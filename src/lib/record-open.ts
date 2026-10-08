/** The few Redis commands recording an open needs, so the logic can be tested without a real database. */
export type OpenStore = {
  /** Sets the key only if it isn't there yet, expiring after `seconds`. Returns true when it was set. */
  claim(key: string, seconds: number): Promise<boolean>;
  lpush(key: string, value: string): Promise<unknown>;
  ltrim(key: string, start: number, stop: number): Promise<unknown>;
  zadd(key: string, score: number, member: string): Promise<unknown>;
  hincr(key: string, field: string): Promise<unknown>;
  sadd(key: string, member: string): Promise<unknown>;
};

const CODE = /^[a-z0-9]{6}$/;
const SLUG = /^[a-z0-9-]{1,80}$/;
/** A reload or a second tab within this long counts as the same visit. */
const SAME_VISIT_SECONDS = 600;
/** Recent opens kept for each code. */
const KEEP = 50;

/** Records that the report link with this code was opened. Returns false when the request isn't valid or is a repeat of a recent visit. */
export async function recordOpen(store: OpenStore, input: { c?: unknown; s?: unknown }, now: number = Date.now()): Promise<boolean> {
  const code = typeof input.c === "string" ? input.c : "";
  const slug = typeof input.s === "string" ? input.s : "";
  if (!CODE.test(code) || !SLUG.test(slug)) return false;
  if (!(await store.claim(`open:seen:${code}`, SAME_VISIT_SECONDS))) return false;
  await store.lpush(`open:${code}`, JSON.stringify({ t: now, s: slug }));
  await store.ltrim(`open:${code}`, 0, KEEP - 1);
  await store.zadd("opens:last", now, code);
  await store.hincr("opens:count", code);
  // Running totals for each report, so the dashboard can show them without adding up every owner's opens.
  await store.hincr("opens:slug:total", slug);
  await store.sadd(`opens:slug:owners:${slug}`, code);
  return true;
}

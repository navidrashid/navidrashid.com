import { Redis } from "@upstash/redis";
import { recordOpen, type OpenStore } from "@/lib/record-open";

/** Called by a report page when someone opens their personal link. It saves a code and a time, nothing else: no name, no IP address. */
function store(): OpenStore | null {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  const redis = new Redis({ url, token });
  return {
    claim: async (key, seconds) => (await redis.set(key, 1, { nx: true, ex: seconds })) === "OK",
    lpush: (key, value) => redis.lpush(key, value),
    ltrim: (key, start, stop) => redis.ltrim(key, start, stop),
    zadd: (key, score, member) => redis.zadd(key, { score, member }),
    hincr: (key, field) => redis.hincrby(key, field, 1),
    sadd: (key, member) => redis.sadd(key, member),
  };
}

export async function POST(request: Request) {
  try {
    const target = store();
    // Without the database connected (for example on a laptop), there is nothing to record.
    if (target) {
      const text = await request.text();
      if (text.length < 500) await recordOpen(target, JSON.parse(text));
    }
  } catch {
    // Recording an open must never break the page, so errors are swallowed.
  }
  return new Response(null, { status: 204 });
}

import { NextResponse, type NextRequest } from "next/server";
import blocked from "./content/blocked-links.json";

/**
 * A personal report link (/reports/<farm>?r=<code>) whose code has been blocked from the dashboard shows "This link has expired"
 * instead of the report, and its open is never counted. Every other link works as before. The list is in content/blocked-links.json.
 */
const codes = new Set<string>(blocked.codes);

const page = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Link expired</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#fff;color:#1d1d1f}main{padding:2rem;text-align:center}h1{font-size:1.4rem;margin:0 0 .5rem}p{margin:0;color:#6e6e73}</style></head><body><main><h1>This link has expired</h1><p>This report is no longer available.</p></main></body></html>`;

export function proxy(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("r");
  if (code && codes.has(code)) {
    return new NextResponse(page, { status: 410, headers: { "content-type": "text/html; charset=utf-8", "x-robots-tag": "noindex, nofollow", "cache-control": "no-store" } });
  }
  return NextResponse.next();
}

export const config = {
  matcher: [{ source: "/reports/:slug", has: [{ type: "query", key: "r" }] }],
};

import type { NextConfig } from "next";

/**
 * Old site URLs mapped to their new home, so links from other sites and search
 * results keep working after the cutover. Add one line per old URL.
 * The old Wix site was a single landing page, so there is nothing to redirect.
 *   { source: "/old-path", destination: "/about" }
 */
const legacyRedirects: { source: string; destination: string }[] = [];

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects.map((redirect) => ({ ...redirect, permanent: true }));
  },
  // Each published market report is a saved page in public/reports/<building>/. The short link opens it directly.
  async rewrites() {
    return {
      beforeFiles: [{ source: "/reports/:slug", destination: "/reports/:slug/index.html" }],
      afterFiles: [],
      fallback: [],
    };
  },
  // Reports are for people who were sent the link, not for search results.
  async headers() {
    return [{ source: "/reports/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },
  images: {
    qualities: [75, 95],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
    ],
  },
};

export default nextConfig;

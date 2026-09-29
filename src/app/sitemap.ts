import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Bump a page's date by hand when its content actually changes. Deriving these
 * from `new Date()` restamps every page on every deploy, and Google discounts
 * lastmod once it stops matching real edits.
 *
 * A page marked `live: false` stays out of the sitemap, so it never lists a
 * URL that 404s.
 */
const pages = [
  { path: "", lastModified: "2026-09-30", priority: 1, live: true },
  { path: "/links", lastModified: "2026-09-30", priority: 0.7, live: true },
  { path: "/about", lastModified: "2026-09-30", priority: 0.9, live: true },
  { path: "/developers", lastModified: "2026-09-30", priority: 0.8, live: true },
  { path: "/moving-to-dubai", lastModified: "2026-09-30", priority: 0.8, live: true },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages
    .filter((page) => page.live)
    .map((page) => ({
      url: `${site.url}${page.path}`,
      lastModified: page.lastModified,
      changeFrequency: "monthly" as const,
      priority: page.priority,
    }));
}

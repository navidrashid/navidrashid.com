import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Bump a page's date by hand when its content actually changes. Deriving these
 * from `new Date()` restamps every page on every deploy, and Google discounts
 * lastmod once it stops matching real edits.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: "2026-08-06",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/links`,
      lastModified: "2026-07-24",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}

import type { MetadataRoute } from "next";

import { flattenDocsNav } from "../lib/docs/navigation";
import { getCanonicalSiteUrl } from "../lib/site-url";


export default function sitemap(): MetadataRoute.Sitemap {
  const base = getCanonicalSiteUrl();
  const lastModified = new Date();
  return PUBLIC_PATHS.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

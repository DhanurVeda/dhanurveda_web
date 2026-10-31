import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/support", "/privacy", "/terms"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: "2026-10-31",
    changeFrequency: path ? "yearly" : "monthly",
    priority: path ? 0.5 : 1,
  }));
}

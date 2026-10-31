import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

const lastModified = "2026-10-31";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: ["/screens/analysis.webp", "/screens/scoremap.webp", "/screens/dashboard.webp"].map(absoluteUrl),
    },
    ...["/support", "/privacy", "/terms"].map((path) => ({
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}

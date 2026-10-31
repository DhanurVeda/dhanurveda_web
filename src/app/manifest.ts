import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "browser",
    background_color: "#040d19",
    theme_color: "#040d19",
    categories: ["sports", "health", "fitness"],
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" }],
    ...(site.appStoreUrl && {
      related_applications: [{ platform: "itunes", url: site.appStoreUrl }],
    }),
  };
}

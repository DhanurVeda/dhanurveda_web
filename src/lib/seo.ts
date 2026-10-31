import type { Metadata } from "next";
import { site } from "@/lib/site";

/** Numeric App Store id from the App Store URL, e.g. ".../id1234567890" → "1234567890". */
export const appStoreId = site.appStoreUrl.match(/id(\d+)/)?.[1];

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

/**
 * Per-page metadata. Next merges `openGraph` and `twitter` shallowly, so a page
 * that only set a title would otherwise share the home page's share-card text.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: `/${string}`;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      url: path,
      title: `${title} · ${site.name}`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${site.name}`,
      description,
    },
  };
}

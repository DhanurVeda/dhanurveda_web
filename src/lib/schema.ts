import { appFacts, features, postureAreas } from "@/lib/content";
import { faqs } from "@/lib/legal";
import { absoluteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

const ids = {
  organization: absoluteUrl("/#organization"),
  website: absoluteUrl("/#website"),
  app: absoluteUrl("/#app"),
};

/** Who publishes the site and app, and the site itself. Rendered on every page. */
export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ids.organization,
      name: site.name,
      url: absoluteUrl("/"),
      logo: absoluteUrl("/icon.png"),
      email: site.supportEmail,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: site.supportEmail,
        url: absoluteUrl("/support"),
        availableLanguage: "English",
      },
      ...(site.appStoreUrl && { sameAs: [site.appStoreUrl] }),
    },
    {
      "@type": "WebSite",
      "@id": ids.website,
      name: site.name,
      url: absoluteUrl("/"),
      description: site.description,
      inLanguage: "en",
      publisher: { "@id": ids.organization },
    },
  ],
};

export const appSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "@id": ids.app,
  name: site.name,
  description: site.description,
  slogan: site.tagline,
  url: absoluteUrl("/"),
  image: absoluteUrl("/icon.png"),
  applicationCategory: "SportsApplication",
  operatingSystem: "iOS 27 or later",
  availableOnDevice: appFacts.platform,
  keywords: appFacts.keywords.join(", "),
  featureList: [
    `${features.posture.title}: ${postureAreas.join(", ")}`,
    features.scoring.title,
    features.feedback.title,
    ...appFacts.modes,
    `Bows: ${appFacts.bows.join(", ")}; right or left handed`,
    "Works offline and syncs when back online",
  ],
  screenshot: ["analysis", "scoremap", "dashboard", "performance"].map((s) =>
    absoluteUrl(`/screens/${s}.webp`),
  ),
  publisher: { "@id": ids.organization },
  ...(site.appStoreUrl && { downloadUrl: site.appStoreUrl, installUrl: site.appStoreUrl }),
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export const breadcrumbSchema = (name: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name, item: absoluteUrl(path) },
  ],
});

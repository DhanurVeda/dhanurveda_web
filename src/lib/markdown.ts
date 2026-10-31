/*
  Plain-Markdown versions of each page for AI agents and LLM tools, built
  from the same data as the HTML so they can't drift. Served at /llms.txt,
  /llms-full.txt and /<page>.md, and to any request for a page that sends
  `Accept: text/markdown` (see next.config.ts).
*/
import { appFacts, features, postureAreas, privacyPoints, steps, supportTopics } from "@/lib/content";
import { faqs, privacyPolicy, termsAndConditions, type LegalDocument } from "@/lib/legal";
import { absoluteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

const pages = [
  { path: "/index.md", html: "/", title: "Home", note: "what the app does, how it works, privacy and FAQ" },
  { path: "/support.md", html: "/support", title: "Support", note: "contact, account deletion and troubleshooting" },
  { path: "/privacy.md", html: "/privacy", title: privacyPolicy.title, note: privacyPolicy.intro },
  { path: "/terms.md", html: "/terms", title: termsAndConditions.title, note: termsAndConditions.intro },
];

const download = () =>
  site.appStoreUrl
    ? `Download on the App Store: ${site.appStoreUrl}`
    : "Coming soon on the App Store (not yet released).";

const faqMarkdown = () => faqs.map(({ q, a }) => `### ${q}\n\n${a}`).join("\n\n");

export function homeMarkdown() {
  const f = features;
  return `# ${site.name}

> ${site.tagline} ${site.description}

- Platform: ${appFacts.platform} (${appFacts.requirements})
- Category: ${appFacts.category}
- Bows: ${appFacts.bows.join(", ")}, right or left handed
- ${download()}
- Support: ${site.supportEmail}

## Features

### ${f.posture.title}

${f.posture.body}

Areas measured: ${postureAreas.join(", ")}.

${[f.scoring, f.feedback, f.modes, f.archers].map((x) => `### ${x.title}\n\n${x.body}`).join("\n\n")}

## How it works

${steps.map((s, i) => `${i + 1}. **${s.title}.** ${s.body}`).join("\n")}

## Privacy

${privacyPoints.map((p) => `- **${p.title}.** ${p.body}`).join("\n")}

Full policy: ${absoluteUrl("/privacy")}

## FAQ

${faqMarkdown()}
`;
}

export function supportMarkdown() {
  return `# ${site.name} Support

Email ${site.supportEmail} with your question and the iPhone model you use.

${supportTopics.map((t) => `## ${t.title}\n\n${t.body}`).join("\n\n")}

## Frequently asked

${faqMarkdown()}
`;
}

export function legalMarkdown(doc: LegalDocument) {
  return `# ${doc.title}

${doc.intro}

Last updated ${site.updated}.

${doc.sections.map((s) => `## ${s.heading}\n\n${s.body}`).join("\n\n")}

Questions: ${site.supportEmail}
`;
}

/** The llms.txt index (https://llmstxt.org): what the site is and where to read more. */
export function llmsTxt() {
  return `# ${site.name}

> ${site.name} is an iPhone archery coaching app. ${site.description}

Key facts:

- Runs on ${appFacts.platform}; ${appFacts.requirements}
- Measures ${postureAreas.join(", ").toLowerCase()} from a side-on video recorded in the app.
- Supports ${appFacts.bows.join(", ")} bows, right or left handed; ${appFacts.modes.join(", ")}.
- Posture analysis and written feedback run on device. No ads, tracking or analytics; data is never sold or shared.
- Guest mode needs no account; sign in with Apple or email to sync. Works offline.
- ${download()}
- Contact: ${site.supportEmail}

## Pages

${pages.map((p) => `- [${p.title}](${absoluteUrl(p.path)}): ${p.note}`).join("\n")}

## Optional

- [Full site as one file](${absoluteUrl("/llms-full.txt")}): every page above in a single Markdown document
- [Sitemap](${absoluteUrl("/sitemap.xml")})
`;
}

export function llmsFullTxt() {
  return [
    homeMarkdown(),
    supportMarkdown(),
    legalMarkdown(privacyPolicy),
    legalMarkdown(termsAndConditions),
  ].join("\n---\n\n");
}

/**
 * The canonical Link header points search engines at the HTML page, so the
 * Markdown copy never competes with it in results.
 */
export const markdownResponse = (body: string, canonical?: string, type = "text/markdown") =>
  new Response(body, {
    headers: {
      "Content-Type": `${type}; charset=utf-8`,
      Vary: "Accept",
      ...(canonical && { Link: `<${absoluteUrl(canonical)}>; rel="canonical"` }),
    },
  });

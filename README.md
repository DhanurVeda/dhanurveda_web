# DhanurVeda website

Marketing, support and legal site for the DhanurVeda iOS archery app. Next.js 16 (App Router, Cache Components) with Tailwind CSS 4. Every route is prerendered as static.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | **Required in production.** Canonical origin, e.g. `https://dhanurveda.app`. Used for canonical URLs, the sitemap, Open Graph, JSON-LD and llms.txt. |
| `NEXT_PUBLIC_APP_STORE_URL` | App Store link. Once set, the buttons switch from "Coming soon" to "Download", Safari shows the Smart App Banner, and the JSON-LD gains `downloadUrl`. |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Overrides the default support address. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional Google Search Console token. |

## Where things live

- `src/lib/content.ts`: home and support copy. The pages, the JSON-LD and the Markdown versions all read it, so edit copy here.
- `src/lib/legal.ts`: Privacy Policy, Terms and FAQ. Keep in step with the app's `LegalDocumentView.swift`.
- `src/lib/site.ts`: name, tagline, URLs, footer links.

## Search and AI agents

- **Metadata:** canonical URLs, Open Graph and Twitter cards on every page, a generated share image (`/opengraph-image`), `/sitemap.xml` with screenshots, `/robots.txt` and `/manifest.webmanifest`.
- **Structured data (`src/lib/schema.ts`):** Organization and WebSite on every page, MobileApplication and FAQPage on the home page, BreadcrumbList on subpages. Check them with the [Rich Results Test](https://search.google.com/test/rich-results).
- **For agents (`src/lib/markdown.ts`):**
  - `/llms.txt` is a short index of the site.
  - `/llms-full.txt` is every page in one Markdown file.
  - Each page has a Markdown twin (`/index.md`, `/support.md`, `/privacy.md`, `/terms.md`). Each page links to its twin with `<link rel="alternate" type="text/markdown">`.
  - Requests for a page URL that send `Accept: text/markdown` get the Markdown (`next.config.ts`).
- **Crawlers:** `robots.txt` allows everyone and names the main AI crawlers explicitly.

After deploying, submit `/sitemap.xml` in Google Search Console and Bing Webmaster Tools.

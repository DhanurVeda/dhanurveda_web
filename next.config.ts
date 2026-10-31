import type { NextConfig } from "next";

// Agents that ask for Markdown get it at the page's own URL.
const wantsMarkdown = [{ type: "header" as const, key: "accept", value: ".*text/markdown.*" }];
const markdownPages = [
  { source: "/", destination: "/index.md" },
  { source: "/support", destination: "/support.md" },
  { source: "/privacy", destination: "/privacy.md" },
  { source: "/terms", destination: "/terms.md" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async rewrites() {
    return {
      // Before pages, or the HTML route would always win.
      beforeFiles: markdownPages.map((page) => ({ ...page, has: wantsMarkdown })),
      afterFiles: [],
      fallback: [],
    };
  },
  async headers() {
    // HTML and Markdown share these URLs, so caches must key on Accept.
    return markdownPages.map(({ source }) => ({
      source,
      headers: [{ key: "Vary", value: "Accept" }],
    }));
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

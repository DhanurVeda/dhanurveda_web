/**
 * Structured data for search engines and AI agents. A plain <script> (not
 * next/script) because it is data, not code; `<` is escaped so a string can
 * never close the tag early.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

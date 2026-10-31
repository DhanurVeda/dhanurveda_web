import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageIntro } from "@/components/page-intro";
import type { LegalDocument } from "@/lib/legal";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const slug = (heading: string) => heading.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export function LegalPage({ document, path }: { document: LegalDocument; path: string }) {
  return (
    <article className="mx-auto max-w-5xl px-5 pt-20 pb-28">
      <PageIntro eyebrow="Legal" title={document.title}>
        <p>{document.intro}</p>
        <p className="mt-2 text-sm text-faint">Last updated {site.updated}</p>
      </PageIntro>

      <div className="mt-14 grid gap-12 lg:grid-cols-[200px_1fr]">
        <nav aria-label="On this page" className="hidden lg:block">
          <ul className="sticky top-28 space-y-1 border-l border-line text-sm">
            {document.sections.map((section) => (
              <li key={section.heading}>
                <a
                  href={`#${slug(section.heading)}`}
                  className="-ml-px block border-l border-transparent py-1.5 pl-4 text-faint transition-colors hover:border-green hover:text-fg"
                >
                  {section.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-4">
          {document.sections.map((section, i) => (
            <section
              key={section.heading}
              id={slug(section.heading)}
              className="scroll-mt-24 rounded-3xl bg-surface/50 p-7 shadow-[inset_0_0_0_1px_var(--color-line)]"
            >
              <h2 className="flex items-baseline gap-3 text-lg font-semibold tracking-tight">
                <span className="font-mono text-xs text-green tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.heading}
              </h2>
              <p className="mt-3 text-pretty text-muted">{section.body}</p>
            </section>
          ))}

          <p className="pt-6 text-sm text-faint">
            Questions about this document?{" "}
            {site.supportEmail ? (
              <a
                href={`mailto:${site.supportEmail}`}
                className="text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
              >
                {site.supportEmail}
              </a>
            ) : (
              <Link
                href="/support"
                className="text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
              >
                Visit Support
              </Link>
            )}
          </p>
        </div>
      </div>
      <JsonLd data={breadcrumbSchema(document.title, path)} />
    </article>
  );
}

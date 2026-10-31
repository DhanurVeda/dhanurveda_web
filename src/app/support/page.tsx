import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { PageIntro } from "@/components/page-intro";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Support",
  description: `Help with ${site.name}: common questions, account deletion and how to get in touch.`,
  path: "/support",
});

const cards = [
  {
    title: "Delete your account",
    body: "In the app, open Profile › Account Management and choose Delete Account. All of your data is permanently removed from our storage.",
  },
  {
    title: "Posture not measured?",
    body: "Turn on posture feedback, record in good light and stand side on with your head, feet and entire bow inside the guide.",
  },
  {
    title: "Sessions not syncing?",
    body: "Check you are signed in under Profile and connected to the internet. Sessions recorded offline sync once you are back online.",
  },
];

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-20 pb-28">
      <PageIntro eyebrow="Support" title="How can we help?">
        <p>Answers to common questions, and how to reach us if you are stuck.</p>
      </PageIntro>

      <div className="mt-12 rounded-3xl bg-gradient-to-b from-surface to-bg-2 p-7 shadow-[inset_0_0_0_1px_var(--color-line-strong)] sm:flex sm:items-center sm:justify-between sm:gap-8">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">Contact us</h2>
          <p className="mt-1 text-pretty text-muted">
            {site.supportEmail
              ? "Email us with your question and the iPhone model you use."
              : "A support email address will be listed here soon."}
          </p>
        </div>
        {site.supportEmail && (
          <a
            href={`mailto:${site.supportEmail}?subject=${encodeURIComponent(`${site.name} support`)}`}
            className="mt-5 inline-flex min-h-11 shrink-0 items-center rounded-full bg-green px-5 text-sm font-semibold text-bg transition-[filter,scale] hover:brightness-110 active:scale-[0.96] sm:mt-0"
          >
            Email support
          </a>
        )}
      </div>

      <ul className="mt-4 grid gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <li
            key={card.title}
            className="rounded-3xl bg-surface/50 p-6 shadow-[inset_0_0_0_1px_var(--color-line)]"
          >
            <h2 className="font-semibold tracking-tight">{card.title}</h2>
            <p className="mt-2 text-sm text-pretty text-muted">{card.body}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-16 mb-6 text-2xl font-semibold tracking-tight">Frequently asked</h2>
      <Faq />

      <p className="mt-10 text-sm text-faint">
        See also the{" "}
        <Link href="/privacy" className="text-muted underline-offset-4 transition-colors hover:text-fg hover:underline">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/terms" className="text-muted underline-offset-4 transition-colors hover:text-fg hover:underline">
          Terms and Conditions
        </Link>
        .
      </p>
      <JsonLd data={breadcrumbSchema("Support", "/support")} />
    </div>
  );
}

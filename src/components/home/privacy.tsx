import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

const points = [
  {
    title: "Analysed on your iPhone",
    body: "Posture analysis and written feedback are created on device. The camera only records your practice.",
    icon: (
      <path d="M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm3 15h2" />
    ),
  },
  {
    title: "Never sold or shared",
    body: "No advertising, no third parties, no tracking or analytics. Your data is only shown back to you.",
    icon: (
      <path d="M12 3 5 6v5c0 4.4 3 8.3 7 9.5 4-1.2 7-5.1 7-9.5V6l-7-3Zm-3 9 2 2 4-4" />
    ),
  },
  {
    title: "Yours to delete",
    body: "Start in guest mode with nothing leaving your phone. Delete your account any time and everything goes with it.",
    icon: <path d="M4 7h16M10 11v6m4-6v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3" />,
  },
];

export function Privacy() {
  return (
    <section id="privacy" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <SectionHeading
        eyebrow="Privacy"
        title="Your practice stays yours."
        lead="DhanurVeda is built to help you train, not to collect data."
      />
      <ul className="mt-14 grid gap-4 md:grid-cols-3">
        {points.map((point) => (
          <li
            key={point.title}
            className="rounded-3xl bg-surface/60 p-7 shadow-[inset_0_0_0_1px_var(--color-line)]"
          >
            <span className="grid size-11 place-items-center rounded-2xl bg-green/10 text-green">
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="size-5 fill-none stroke-current"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {point.icon}
              </svg>
            </span>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">{point.title}</h3>
            <p className="mt-2 text-pretty text-muted">{point.body}</p>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-center text-sm text-faint">
        Read the full{" "}
        <Link href="/privacy" className="text-muted underline-offset-4 transition-colors hover:text-fg hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </section>
  );
}

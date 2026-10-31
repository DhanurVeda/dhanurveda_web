import { Phone, type Screen } from "@/components/phone";
import { SectionHeading } from "@/components/section-heading";

const steps: { title: string; body: string; screen: Screen; alt: string }[] = [
  {
    title: "Set up",
    body: "Choose your bow hand and place your iPhone side on. Spoken guidance helps you frame yourself.",
    screen: "hand",
    alt: "Choosing the playing hand",
  },
  {
    title: "Shoot",
    body: "Step into the outline and start. DhanurVeda records your session and tracks your form.",
    screen: "sideview",
    alt: "Side view setup outline",
  },
  {
    title: "Improve",
    body: "Replay with your posture drawn in, score each arrow and see what to work on next.",
    screen: "scoresheet",
    alt: "Score sheet after a session",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 border-y border-line bg-bg-2/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="How it works" title="Three steps to better form." />
        {/* Phones: a compact phone-beside-text row per step instead of three
            full-height renders stacked; md up: three centred columns. */}
        <ol className="mx-auto mt-12 grid max-w-md gap-8 sm:mt-14 md:max-w-none md:grid-cols-3 md:gap-10">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="grid grid-cols-[112px_1fr] items-center gap-6 md:flex md:flex-col md:items-center md:gap-0 md:text-center"
            >
              <Phone
                screen={step.screen}
                alt={step.alt}
                sizes="(min-width: 768px) 220px, 112px"
                className="w-[112px] md:w-[220px]"
              />
              <div>
                <span className="font-mono text-sm text-green md:mt-8 md:block">0{i + 1}</span>
                <h3 className="mt-1 text-xl font-semibold tracking-tight md:mt-2 md:text-2xl">{step.title}</h3>
                <p className="mt-2 max-w-xs text-pretty text-muted md:mx-auto">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

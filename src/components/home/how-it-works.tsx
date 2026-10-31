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
    <section id="how-it-works" className="scroll-mt-20 border-y border-line bg-bg-2/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="How it works" title="Three steps to better form." />
        <ol className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="flex flex-col items-center text-center">
              <Phone screen={step.screen} alt={step.alt} className="w-[220px]" />
              <span className="mt-8 font-mono text-sm text-green">0{i + 1}</span>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 max-w-xs text-pretty text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

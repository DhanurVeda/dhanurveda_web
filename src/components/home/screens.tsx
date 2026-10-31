import { Phone, type Screen } from "@/components/phone";
import { SectionHeading } from "@/components/section-heading";

const gallery: { screen: Screen; caption: string }[] = [
  { screen: "dashboard", caption: "Your practice at a glance" },
  { screen: "performance", caption: "Five areas, one picture" },
  { screen: "feedback", caption: "Coaching notes on device" },
  { screen: "practice", caption: "Ready-made presets" },
  { screen: "custom", caption: "Or build your own" },
  { screen: "history", caption: "Every session, ready to replay" },
];

export function Screens() {
  return (
    <section id="screens" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Screens" title="Designed to stay out of your way." />
      </div>
      <ul className="mt-14 flex snap-x snap-mandatory gap-8 overflow-x-auto px-[max(1.25rem,calc((100vw-72rem)/2+1.25rem))] pb-6 [scrollbar-width:none] [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
        {gallery.map((item) => (
          <li key={item.screen} className="shrink-0 snap-center text-center">
            <Phone screen={item.screen} alt={item.caption} className="w-[230px]" />
            <p className="mt-5 text-sm text-muted">{item.caption}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

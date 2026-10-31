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

/*
  Phones and tablets: a swipeable row. The inline padding is half the row
  minus half a phone (220px), so the first and last screens snap to the
  exact centre too. Desktop: all six in a centred 3x2 grid, middle column
  dropped a little for rhythm.
*/
export function Screens() {
  return (
    <section id="screens" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Screens" title="Designed to stay out of your way." />
      </div>
      <ul
        aria-label="App screens"
        className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain px-[calc(50%-110px)] pb-4 [scrollbar-width:none] sm:mt-14 sm:gap-10 lg:mx-auto lg:mt-16 lg:grid lg:max-w-5xl lg:grid-cols-3 lg:gap-x-10 lg:gap-y-20 lg:overflow-visible lg:px-5 lg:pb-16 [&::-webkit-scrollbar]:hidden"
      >
        {gallery.map((item) => (
          <li
            key={item.screen}
            className="flex w-[220px] shrink-0 snap-center snap-always flex-col items-center text-center lg:w-auto lg:nth-[3n+2]:translate-y-16"
          >
            <Phone
              screen={item.screen}
              alt={item.caption}
              sizes="(min-width: 1024px) 250px, 220px"
              className="w-[220px] lg:w-[250px]"
            />
            <p className="mt-5 text-sm text-muted">{item.caption}</p>
          </li>
        ))}
      </ul>
      <p aria-hidden className="mt-4 flex items-center justify-center gap-2 text-xs text-faint lg:hidden">
        Swipe to see more
        <svg viewBox="0 0 24 24" className="size-3.5 fill-none stroke-current" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14m-5-5 5 5-5 5" />
        </svg>
      </p>
    </section>
  );
}

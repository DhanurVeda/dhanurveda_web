/*
  Direction from lookap: "Next.js Site Redesign" by Next.js (@nextjs,
  https://x.com/nextjs/status/2110037768202268910), issued to this account
  under lookap's terms: an outlined, glowing wordmark that fades behind a
  tight sans headline, a muted lead and a single pill call to action.
*/
import Link from "next/link";
import { AppStoreButton } from "@/components/app-store-button";
import { Phone } from "@/components/phone";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[900px] bg-[radial-gradient(60%_50%_at_50%_0%,oklch(0.68_0.14_250/0.22),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-6xl px-5 pt-16 sm:pt-24">
        <Wordmark />
        <div className="relative -mt-[3%] text-center">
          <h1 className="animate-rise text-5xl font-semibold tracking-[-0.035em] text-balance sm:text-7xl">
            Your pocket
            <br />
            archery coach.
          </h1>
          <p className="animate-rise mx-auto mt-6 max-w-xl text-lg text-pretty text-muted [animation-delay:120ms]">
            Record your practice on iPhone, see how your{" "}
            <span className="text-fg">shoulders, wrists, hips, stance and torso</span> hold up
            shot after shot, and map every arrow you shoot.
          </p>
          <div className="animate-rise mt-9 flex flex-wrap items-center justify-center gap-4 [animation-delay:240ms]">
            <AppStoreButton />
            <Link
              href="/#how-it-works"
              className="rounded-full border border-line-strong px-6 py-3.5 text-sm font-medium transition-[border-color,scale] hover:border-fg/40 active:scale-[0.96]"
            >
              See how it works
            </Link>
          </div>
        </div>

        <div className="animate-rise relative mt-16 flex justify-center [animation-delay:360ms] sm:mt-20">
          <div
            aria-hidden
            className="absolute top-1/4 left-1/2 h-[70%] w-[80%] -translate-x-1/2 rounded-full bg-green/15 blur-[120px]"
          />
          <Phone
            screen="dashboard"
            alt="DhanurVeda dashboard"
            className="relative mt-20 hidden w-[240px] -rotate-[7deg] translate-x-10 md:block lg:w-[270px]"
          />
          <Phone
            screen="analysis"
            alt="Posture analysis drawn over a practice video"
            priority
            sizes="(min-width: 1024px) 320px, 280px"
            className="relative z-10 w-[280px] lg:w-[320px]"
          />
          <Phone
            screen="scoremap"
            alt="Score map of every arrow"
            className="relative mt-20 hidden w-[240px] rotate-[7deg] -translate-x-10 md:block lg:w-[270px]"
          />
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent"
      />
    </section>
  );
}

function Wordmark() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 210"
      className="mx-auto w-full max-w-5xl overflow-visible drop-shadow-[0_0_24px_oklch(0.86_0.19_145/0.35)]"
    >
      <defs>
        <linearGradient id="wordmark-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="oklch(0.86 0.19 145)" />
          <stop offset="0.55" stopColor="oklch(0.78 0.15 175)" />
          <stop offset="1" stopColor="oklch(0.68 0.14 250)" />
        </linearGradient>
        <linearGradient id="wordmark-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.2" stopColor="#fff" stopOpacity="0.75" />
          <stop offset="0.95" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="wordmark-mask">
          <rect width="1200" height="210" fill="url(#wordmark-fade)" />
        </mask>
      </defs>
      <text
        x="600"
        y="180"
        textAnchor="middle"
        textLength="1180"
        lengthAdjust="spacingAndGlyphs"
        fill="none"
        stroke="url(#wordmark-stroke)"
        strokeWidth="1.6"
        mask="url(#wordmark-mask)"
        className="font-sans text-[215px] font-semibold tracking-tight"
      >
        DHANURVEDA
      </text>
    </svg>
  );
}

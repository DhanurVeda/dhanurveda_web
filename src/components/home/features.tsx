import type { ReactNode } from "react";
import { Phone, type Screen } from "@/components/phone";
import { SectionHeading } from "@/components/section-heading";

const areas = [
  { label: "Shoulders", tone: "text-green" },
  { label: "Wrists", tone: "text-red" },
  { label: "Hips", tone: "text-gold" },
  { label: "Stance", tone: "text-blue" },
  { label: "Torso", tone: "text-green" },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <SectionHeading
        eyebrow="Features"
        title="Everything you need to train with purpose."
        lead="DhanurVeda watches your form, scores your arrows and shows what to work on next."
      />
      <div className="mt-14 grid gap-4 md:grid-cols-3">
        <Card
          className="md:col-span-2 md:row-span-2"
          title="Posture analysis, joint by joint"
          body="Set your iPhone side on and shoot. DhanurVeda tracks your body through the session, draws your posture over the video and scores each area of your form."
          phone="analysis"
          phoneAlt="Posture lines drawn over an archer"
          phoneSide="end"
        >
          <ul className="mt-6 flex max-w-sm flex-wrap gap-2">
            {areas.map((area) => (
              <li
                key={area.label}
                className="rounded-full border border-line bg-bg/60 px-3 py-1 text-sm"
              >
                <span className={`mr-1.5 ${area.tone}`}>●</span>
                {area.label}
              </li>
            ))}
          </ul>
        </Card>
        <Card
          className="md:row-span-2"
          title="Score every arrow"
          body="Tap where each arrow landed. See your groups by quadrant and your average over time."
          phone="scoremap"
          phoneAlt="Score map with arrow hits on a target"
        />
        <Card
          title="Written feedback, on device"
          body="On iPhones with Apple Intelligence, your measurements become plain-language advice, generated privately on your phone."
        />
        <Card
          title="Practice your way"
          body="Train Mode, Time Run Mode or your own presets, with crowd noise simulation and spoken setup guidance."
        />
        <Card
          title="Made for every archer"
          body="Indian, Recurve and Compound bows, right or left handed. Works offline and syncs when you are back online."
        />
      </div>
    </section>
  );
}

function Card({
  title,
  body,
  phone,
  phoneAlt = "",
  phoneSide = "center",
  className = "",
  children,
}: {
  title: string;
  body: string;
  phone?: Screen;
  phoneAlt?: string;
  phoneSide?: "center" | "end";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-surface to-bg-2 p-7 ${
        phone ? "md:min-h-[440px]" : ""
      } ${className}`}
    >
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className={`mt-2 text-pretty text-muted ${phoneSide === "end" ? "max-w-sm" : "max-w-md"}`}>
        {body}
      </p>
      {children}
      {phone && (
        // In flow on phones so it never covers the text; pinned to the card's
        // bottom edge from md up.
        <div
          className={`pointer-events-none mt-8 -mb-44 flex justify-center md:absolute md:inset-x-0 md:bottom-0 md:mb-0 ${
            phoneSide === "end" ? "md:justify-end md:pr-16" : ""
          }`}
        >
          <Phone
            screen={phone}
            alt={phoneAlt}
            className="w-[230px] transition-transform duration-500 ease-out md:translate-y-[38%] md:group-hover:translate-y-[34%]"
          />
        </div>
      )}
    </article>
  );
}

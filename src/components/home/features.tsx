import type { ReactNode } from "react";
import { Phone, type Screen } from "@/components/phone";
import { SectionHeading } from "@/components/section-heading";
import { features, postureAreas } from "@/lib/content";

const tones = ["text-green", "text-red", "text-gold", "text-blue", "text-green"];
const areas = postureAreas.map((label, i) => ({ label, tone: tones[i] }));

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
          {...features.posture}
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
          {...features.scoring}
          phone="scoremap"
          phoneAlt="Score map with arrow hits on a target"
        />
        <Card
          {...features.feedback}
        />
        <Card
          {...features.modes}
        />
        <Card
          {...features.archers}
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

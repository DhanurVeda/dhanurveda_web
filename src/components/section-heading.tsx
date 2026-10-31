export function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl">
        {title}
      </h2>
      {lead && <p className="mt-4 text-lg text-pretty text-muted">{lead}</p>}
    </div>
  );
}

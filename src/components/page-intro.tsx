import type { ReactNode } from "react";

/** Title block for the inner pages (Privacy, Terms, Support). */
export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-blue/15 blur-[110px]"
      />
      <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-green">{eyebrow}</p>
      <h1 className="relative mt-4 text-4xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl">
        {title}
      </h1>
      {children && <div className="relative mt-5 text-lg text-pretty text-muted">{children}</div>}
    </header>
  );
}

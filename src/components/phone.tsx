import Image from "next/image";

export type Screen =
  | "analysis"
  | "dashboard"
  | "performance"
  | "scoremap"
  | "feedback"
  | "practice"
  | "custom"
  | "hand"
  | "sideview"
  | "history"
  | "scoresheet";

/** An iPhone render from public/screens (657x1345, transparent). */
export function Phone({
  screen,
  alt,
  className = "",
  priority = false,
  sizes = "300px",
}: {
  screen: Screen;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={`/screens/${screen}.webp`}
      alt={alt}
      width={657}
      height={1345}
      sizes={sizes}
      priority={priority}
      className={`h-auto drop-shadow-[0_30px_60px_rgb(0_0_0/0.55)] ${className}`}
    />
  );
}

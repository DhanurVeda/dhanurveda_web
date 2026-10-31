import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative mx-auto flex max-w-xl flex-col items-center px-5 py-32 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 left-1/2 h-72 w-[min(32rem,100vw)] -translate-x-1/2 rounded-full bg-green/10 blur-[110px]"
      />
      <Target />
      <p className="relative mt-8 font-mono text-sm text-green">404</p>
      <h1 className="relative mt-3 text-4xl font-semibold tracking-[-0.03em] text-balance">
        That one missed the target.
      </h1>
      <p className="relative mt-4 text-pretty text-muted">
        The page you are looking for does not exist or has moved.
      </p>
      <Link
        href="/"
        className="relative mt-9 inline-flex min-h-11 items-center rounded-full bg-green px-6 text-sm font-semibold text-bg transition-[filter,scale] hover:brightness-110 active:scale-[0.96]"
      >
        Back to home
      </Link>
    </div>
  );
}

function Target() {
  return (
    <svg aria-hidden viewBox="0 0 120 120" className="relative size-28">
      {[56, 44, 32, 20, 9].map((r, i) => (
        <circle
          key={r}
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke={i === 4 ? "var(--color-gold)" : "var(--color-line-strong)"}
          strokeWidth="1.5"
        />
      ))}
      <path d="M104 18 82 40" stroke="var(--color-muted)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="104" cy="18" r="3" fill="var(--color-red)" />
    </svg>
  );
}

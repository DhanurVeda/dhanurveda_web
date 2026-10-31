import { faqs } from "@/lib/legal";

/** Native <details> so it works without JavaScript and stays keyboard accessible. */
export function Faq() {
  return (
    <ul className="divide-y divide-line rounded-3xl bg-surface/50 shadow-[inset_0_0_0_1px_var(--color-line)]">
      {faqs.map((item) => (
        <li key={item.q}>
          <details className="group px-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 font-medium transition-colors hover:text-green">
              {item.q}
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="size-5 shrink-0 fill-none stroke-current text-faint transition-transform duration-200 ease-out group-open:rotate-45"
                strokeWidth={2}
                strokeLinecap="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </summary>
            <p className="max-w-2xl pb-6 text-pretty text-muted">{item.a}</p>
          </details>
        </li>
      ))}
    </ul>
  );
}

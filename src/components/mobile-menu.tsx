"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

/*
  Phone-only menu. Built on <details> so it still opens without JavaScript;
  the script only closes it on link tap, outside tap and Escape.
*/
export function MobileMenu({ items }: { items: readonly { label: string; href: string }[] }) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const close = (event: Event) => {
      const menu = ref.current;
      if (!menu?.open) return;
      if (event instanceof KeyboardEvent ? event.key === "Escape" : !menu.contains(event.target as Node)) {
        menu.open = false;
      }
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", close);
    };
  }, []);

  return (
    <details ref={ref} className="group relative md:hidden">
      <summary
        aria-label="Menu"
        className="grid size-11 cursor-pointer list-none place-items-center rounded-full border border-line-strong transition-[border-color,scale] active:scale-[0.96] group-open:border-fg/40 [&::-webkit-details-marker]:hidden"
      >
        <svg aria-hidden viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth={1.75} strokeLinecap="round">
          <path className="origin-center transition-transform duration-200 group-open:translate-y-[3px] group-open:rotate-45" d="M5 9h14" />
          <path className="origin-center transition-transform duration-200 group-open:-translate-y-[3px] group-open:-rotate-45" d="M5 15h14" />
        </svg>
      </summary>
      <nav
        aria-label="Main"
        className="absolute top-[calc(100%+0.75rem)] right-0 w-60 origin-top-right rounded-3xl border border-line-strong bg-surface p-2 shadow-[0_24px_60px_-12px_rgb(0_0_0/0.7)] group-open:animate-[menu-in_160ms_ease-out]"
      >
        <ul>
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => ref.current?.removeAttribute("open")}
                className="flex min-h-12 items-center rounded-2xl px-4 text-[15px] text-muted transition-colors hover:bg-surface-2 hover:text-fg active:bg-surface-2"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}

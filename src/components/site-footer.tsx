import Image from "next/image";
import Link from "next/link";
import { footerLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-5 py-14 sm:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div className="col-span-2 space-y-3 sm:col-span-1">
          <Link href="/" className="flex min-h-11 items-center gap-2.5">
            <Image src="/icon.png" alt="" width={28} height={28} className="rounded-[7px] outline-1 -outline-offset-1 outline-white/10" />
            <span className="font-semibold tracking-tight">{site.name}</span>
          </Link>
          <p className="max-w-xs text-sm text-muted">{site.tagline}</p>
        </div>
        {footerLinks.map((group) => (
          <div key={group.title}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-faint">
              {group.title}
            </h2>
            {/* 44px-tall rows on touch screens, compact list from sm up. */}
            <ul className="mt-2 text-sm sm:mt-4 sm:space-y-2.5">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-muted transition-colors hover:text-fg sm:min-h-0"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-faint">
          © {site.year} {site.name}. All rights reserved. Apple and App Store are
          trademarks of Apple Inc.
        </p>
      </div>
    </footer>
  );
}

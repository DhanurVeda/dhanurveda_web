import Image from "next/image";
import Link from "next/link";
import { footerLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div className="space-y-3">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/icon.png" alt="" width={28} height={28} className="rounded-[7px]" />
            <span className="font-semibold tracking-tight">{site.name}</span>
          </Link>
          <p className="max-w-xs text-sm text-muted">{site.tagline}</p>
        </div>
        {footerLinks.map((group) => (
          <div key={group.title}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-faint">
              {group.title}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted transition hover:text-fg">
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
          © {new Date().getFullYear()} {site.name}. All rights reserved. Apple and App Store are
          trademarks of Apple Inc.
        </p>
      </div>
    </footer>
  );
}

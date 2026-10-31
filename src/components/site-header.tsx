import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/mobile-menu";
import { site } from "@/lib/site";

const nav = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Screens", href: "/#screens" },
  { label: "FAQ", href: "/#faq" },
  { label: "Support", href: "/support" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex min-h-11 items-center gap-2.5">
          <Image src="/icon.png" alt="" width={30} height={30} className="rounded-[8px] outline-1 -outline-offset-1 outline-white/10" />
          <span className="text-[15px] font-semibold tracking-tight">{site.name}</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-fg">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/#download"
            className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-4 text-sm font-medium transition-[color,border-color,scale] hover:border-green hover:text-green active:scale-[0.96] md:min-h-9"
          >
            Get the app
          </Link>
          <MobileMenu items={nav} />
        </div>
      </div>
    </header>
  );
}

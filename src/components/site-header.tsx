import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const nav = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Screens", href: "/#screens" },
  { label: "Support", href: "/support" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5">
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
        <Link
          href="/#download"
          className="relative rounded-full border border-line-strong px-4 py-1.5 text-sm font-medium transition-[color,border-color,scale] before:absolute before:-inset-x-1 before:-inset-y-2 hover:border-green hover:text-green active:scale-[0.96]"
        >
          Get the app
        </Link>
      </div>
    </header>
  );
}

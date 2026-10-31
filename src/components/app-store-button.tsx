import { site } from "@/lib/site";

export function AppStoreButton({ className = "" }: { className?: string }) {
  const live = Boolean(site.appStoreUrl);
  const content = (
    <>
      <svg aria-hidden viewBox="0 0 24 24" className="size-5 fill-current">
        <path d="M16.37 12.6c.02 2.53 2.22 3.37 2.25 3.38-.02.06-.35 1.2-1.16 2.38-.7 1.02-1.42 2.03-2.56 2.05-1.12.02-1.48-.66-2.76-.66s-1.68.64-2.74.68c-1.1.04-1.94-1.1-2.65-2.12-1.44-2.08-2.54-5.88-1.06-8.44.73-1.27 2.04-2.08 3.47-2.1 1.08-.02 2.1.73 2.76.73.66 0 1.9-.9 3.2-.77.54.02 2.07.22 3.05 1.66-.08.05-1.82 1.06-1.8 3.2ZM14.26 4.88c.58-.7.97-1.68.86-2.65-.84.03-1.85.56-2.45 1.26-.54.62-1.01 1.61-.88 2.56.93.07 1.88-.47 2.47-1.17Z" />
      </svg>
      <span className="flex flex-col leading-none text-left">
        <span className="text-[10px] font-medium uppercase tracking-wider opacity-70">
          {live ? "Download on the" : "Coming soon on the"}
        </span>
        <span className="text-base font-semibold tracking-tight">App Store</span>
      </span>
    </>
  );
  const styles = `inline-flex items-center gap-3 rounded-full bg-green px-6 py-3 text-bg shadow-[0_0_40px_-8px_var(--color-green)] transition hover:brightness-110 ${className}`;

  return live ? (
    <a href={site.appStoreUrl} className={styles}>
      {content}
    </a>
  ) : (
    <span className={`${styles} cursor-default`} aria-label="Coming soon on the App Store">
      {content}
    </span>
  );
}

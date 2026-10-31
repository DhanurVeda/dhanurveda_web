import Image from "next/image";
import { AppStoreButton } from "@/components/app-store-button";

export function Download() {
  return (
    <section id="download" className="scroll-mt-20 px-5 pb-28">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-line bg-gradient-to-b from-surface to-bg-2 px-6 py-20 text-center">
        <div
          aria-hidden
          className="absolute top-0 left-1/2 h-64 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green/20 blur-[100px]"
        />
        <Image
          src="/icon.png"
          alt="DhanurVeda app icon"
          width={96}
          height={96}
          className="relative mx-auto rounded-[22px] outline-1 -outline-offset-1 outline-white/10 shadow-[0_20px_60px_-15px_rgb(0_0_0/0.8)]"
        />
        <h2 className="relative mt-8 text-4xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl">
          Build consistent form,
          <br />
          one arrow at a time.
        </h2>
        <p className="relative mx-auto mt-4 max-w-md text-muted">
          Start in guest mode straight away, then sign in to sync your sessions.
        </p>
        <AppStoreButton className="relative mt-9" />
      </div>
    </section>
  );
}

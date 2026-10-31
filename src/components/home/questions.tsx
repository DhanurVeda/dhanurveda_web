import Link from "next/link";
import { Faq } from "@/components/faq";
import { SectionHeading } from "@/components/section-heading";

export function Questions() {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-5 pb-28">
      <SectionHeading eyebrow="FAQ" title="Questions, answered." />
      <div className="mt-12">
        <Faq />
      </div>
      <p className="mt-8 text-center text-sm text-faint">
        Something else?{" "}
        <Link href="/support" className="text-muted underline-offset-4 transition-colors hover:text-fg hover:underline">
          Visit Support
        </Link>
        .
      </p>
    </section>
  );
}

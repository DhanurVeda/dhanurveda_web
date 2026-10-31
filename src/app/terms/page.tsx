import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { termsAndConditions } from "@/lib/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: termsAndConditions.title,
  description: termsAndConditions.intro,
  path: "/terms",
});

export default function TermsPage() {
  return <LegalPage document={termsAndConditions} path="/terms" />;
}

import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { termsAndConditions } from "@/lib/legal";

export const metadata: Metadata = {
  title: termsAndConditions.title,
  description: termsAndConditions.intro,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalPage document={termsAndConditions} />;
}

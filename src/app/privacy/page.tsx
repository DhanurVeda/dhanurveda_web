import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { privacyPolicy } from "@/lib/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: privacyPolicy.title,
  description: privacyPolicy.intro,
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalPage document={privacyPolicy} />;
}

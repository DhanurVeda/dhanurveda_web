import { JsonLd } from "@/components/json-ld";
import { Download } from "@/components/home/download";
import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { Privacy } from "@/components/home/privacy";
import { Questions } from "@/components/home/questions";
import { Screens } from "@/components/home/screens";
import { appSchema, faqSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Screens />
      <Privacy />
      <Questions />
      <Download />
      <JsonLd data={appSchema} />
      <JsonLd data={faqSchema} />
    </>
  );
}

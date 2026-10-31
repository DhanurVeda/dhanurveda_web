import { Download } from "@/components/home/download";
import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { Privacy } from "@/components/home/privacy";
import { Questions } from "@/components/home/questions";
import { Screens } from "@/components/home/screens";

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
    </>
  );
}


import { CtaSection } from "@/components/home/cta-section";
import { FeaturesSection } from "@/components/home/features-section.tsx";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { HeroSection } from "@/components/home/hero-section";
import { PricingSection } from "@/components/home/pricing-section";

export default function Home() {
  return (
   <div>
    <Header />
    <HeroSection />
    <FeaturesSection />
    <PricingSection />
    <CtaSection />
    <Footer />
   </div>
  );
}

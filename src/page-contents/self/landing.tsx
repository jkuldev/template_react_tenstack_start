import { HeroSection } from "@/page-contents/self/components/hero-section";
import { FeaturesSection } from "@/page-contents/self/components/features-section";
import { TechHighlights } from "@/page-contents/self/components/tech-highlight";
import { PricingSection } from "@/page-contents/self/components/pricing-section";
export default function LandingHomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <FeaturesSection />
      <TechHighlights />
      <PricingSection />
    </main>
  );
}

import { HeroSection } from "@/components/copa/HeroSection";
import { PainSection } from "@/components/copa/PainSection";
import { SolutionSection } from "@/components/copa/SolutionSection";
import { DemoSection } from "@/components/copa/DemoSection";
import { BonusSection } from "@/components/copa/BonusSection";
import { TestimonialsSection } from "@/components/copa/TestimonialsSection";
import { PricingSection } from "@/components/copa/PricingSection";
import { GuaranteeSection } from "@/components/copa/GuaranteeSection";
import { FinalCTA } from "@/components/copa/FinalCTA";
import { FooterCopa } from "@/components/copa/FooterCopa";

export default function App() {
  return (
    <main className="relative min-h-screen bg-[#111111] text-white overflow-x-hidden">
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <DemoSection />
      <BonusSection />
      <TestimonialsSection />
      <PricingSection />
      <GuaranteeSection />
      <FinalCTA />
      <FooterCopa />
    </main>
  );
}

import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  OpportunitySection,
  HowToInvestSection,
  HumanConnectionSection,
  CommunitySection,
} from "@/components/sections";

export function SplashPage() {
  return (
    <div className="flex min-h-screen flex-col bg-sh-cream">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <OpportunitySection />
        <HowToInvestSection />
        <HumanConnectionSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}

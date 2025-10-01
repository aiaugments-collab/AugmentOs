import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LearningSection from "@/components/LearningSection";
import PlanningSection from "@/components/PlanningSection";
import ShoppingSection from "@/components/ShoppingSection";
import WritingSection from "@/components/WritingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PrivacySection from "@/components/PrivacySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div style={{ opacity: 1 }}>
        <main className="overflow-x-clip" style={{ opacity: 1 }}>
          <HeroSection />
          <WritingSection />
          <LearningSection />
          <PlanningSection />
          <ShoppingSection />
          <TestimonialsSection />
          <PrivacySection />
          <CTASection />
        </main>
      </div>
      <Footer />
    </main>
  )
}

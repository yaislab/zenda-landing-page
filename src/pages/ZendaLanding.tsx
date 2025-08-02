import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import HowItWorks from "@/components/HowItWorks";
import SocialImpact from "@/components/SocialImpact";
import Footer from "@/components/Footer";

const ZendaLanding = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ValueProposition />
      <HowItWorks />
      <SocialImpact />
      <Footer />
    </main>
  );
};

export default ZendaLanding;
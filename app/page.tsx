import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import StackSection from "./components/StackSection";
import ResearchSection from "./components/ResearchSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="relative">
        {/* Divider gradient */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <AboutSection />
      </div>
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <StackSection />
      </div>
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <ResearchSection />
      </div>
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}

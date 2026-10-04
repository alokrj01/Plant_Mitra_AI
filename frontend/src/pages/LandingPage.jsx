import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../features/landing/components/Hero";
import AnalysisMethods from "../features/landing/components/AnalysisMethods";
import HowItWorks from "../features/landing/components/HowItWorks";
import Features from "../features/landing/components/Features";
import ProductPreview from "../features/landing/components/ProductPreview";
import SupportedPlants from "../features/landing/components/SupportedPlants";
import Technology from "../features/landing/components/Technology";
import AILimitations from "../features/landing/components/AILimitations";
import FAQ from "../features/landing/components/FAQ";
import FinalCTA from "../features/landing/components/FinalCTA";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg=white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />

      <main>
        <Hero />
        <AnalysisMethods />
        <HowItWorks />
        <Features />
        <ProductPreview />
        <SupportedPlants />
        <Technology />
        <AILimitations />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
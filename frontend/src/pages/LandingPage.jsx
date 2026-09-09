import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/landing/Hero";
import AnalysisMethods from "../components/landing/AnalysisMethods";
import HowItWorks from "../components/landing/HowItWorks";
import Features from "../components/landing/Features";
import ProductPreview from "../components/landing/ProductPreview";
import SupportedPlants from "../components/landing/SupportedPlants";
import Technology from "../components/landing/Technology";
import AILimitations from "../components/landing/AILimitations";
import FAQ from "../components/landing/FAQ";
import FinalCTA from "../components/landing/FinalCTA";

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
import { useState } from "react";
import Navbar from "./Navbar.jsx";
import TextPrediction from "./TextPrediction.jsx";
import ImagePrediction from "./ImagePrediction.jsx";
import Results from "./Results.jsx";
import Footer from "./Footer.jsx";
import { Card, CardContent } from "./ui/card.jsx";
import { Separator } from "./ui/separator.jsx";
import { Sparkles } from "lucide-react";


const Dashboard = () => {
  const [predictionResults, setPredictionResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePredictionResult = (apiResult) => {
    console.log("Dashboard received:", apiResult);

    const formattedResult = {
      ...apiResult,
      disease: 
        apiResult.disease_name || 
        apiResult.predicted_class || 
        apiResult.Predicted_label || 
        "Unknown",
      description: 
        apiResult.description || "No description available.",
      treatment: 
        apiResult.treatment || { 
          immediate: [], 
          prevention: [] 
        },
      severity: apiResult.severity || "Unknown",
      confidence: apiResult.confidence,
    };
    
    setPredictionResults(formattedResult);
  };

  const handleLoadingState = (loading) => {
    setIsLoading(loading);

    if (loading) {
      setPredictionResults(null);
    }
  };

  return (
    // 1. App Layout: Full screen height, flexbox for sticky footer, soft gray background
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 relative overflow-hidden text-slate-900 dark:text-slate-100 font-sans">
      
      {/* 2. Ambient Background Glows (Premium Apple/Stripe Vibe) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-300/20 dark:bg-green-500/20 rounded-full blur-[120px] opacity-80 dark:opacity-60 pointer-events-none"></div>

      <div className="absolute top-40 right-1/4 w-96 h-96 bg-emerald-300/20 dark:bg-emerald-500/20 rounded-full opacity-80 dark:opacity-60 blur-[120px] pointer-events-none"></div>

      <Navbar />

      {/* 3. Main Content Wrapper: flex-grow ensures footer stays at bottom */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 relative z-10">
        
        {/* --- HERO / WELCOME SECTION --- */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-6 duration-700">
          
          {/* AI Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-green-200 dark:border-green-900 shadow-sm dark:shadow-black/30 text-green-700 dark:text-green-400 text-sm font-bold tracking-wide mb-6 font-sans">
            <Sparkles className="w-4 h-4 text-green-500 dark:text-green-400" />
            AI-Powered Diagnostics
          </div>
          
          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.15] text-slate-900 dark:text-white dark:drop-shadow-[0_0_24px_rgba(34,197,94,0.18)]">
            Protect Your Plants with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400 dark:drop-shadow-[0_0_18px_rgba(34,197,94,0.25)]">
              Intelligent Vision
            </span>
          </h1>
          
          {/* Subheading */}
          <p className=" font-sans text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Upload an image of a diseased leaf or describe the symptoms. Our advanced AI will instantly analyze the condition and provide a detailed treatment plan.
          </p>
        </div>

        {/* --- PREDICTION INPUTS GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 max-w-6xl mx-auto">
          
          {/* Text Prediction Card Container */}
          <Card className="backdrop-blur-xl hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-6 md:p-8">
              <TextPrediction
                onResult={handlePredictionResult}
                onLoading={handleLoadingState}
              />
            </CardContent>
          </Card>

          {/* Image Prediction Card Container */}
          <Card className="backdrop-blur-xl hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-6 md:p-8">
              <ImagePrediction
                onResult={handlePredictionResult}
                onLoading={handleLoadingState}
              />
            </CardContent>
          </Card>
        </div>

        {/* --- RESULTS SECTION --- */}
          <div className="max-w-6xl mx-auto animate-in fade-in duration-700">
            
            {/* Elegant Divider Title */}
            <div className="flex items-center justify-center mb-10 opacity-80">
              <Separator className="w-1/4 sm:w-1/3 bg-slate-200" />
              <div className="px-4 sm:px-6 text-slate-500 font-display font-bold tracking-widest uppercase text-xs sm:text-sm">
                Analysis Report
              </div>
              <Separator className="w-1/4 sm:w-1/3 bg-slate-200" />
            </div>

            {/* Results Component (Directly rendered without extra outer card) */}
            <Results results={predictionResults} isLoading={isLoading} />
            
          </div>
      </main>

      {/* Footer handles its own dark background seamlessly */}
      <Footer />
    </div>
  );
};

export default Dashboard;

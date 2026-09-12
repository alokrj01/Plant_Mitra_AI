import { useState } from "react";

import Navbar from "./Navbar.jsx";

import DashboardHero from "./dashboard/DashboardHero.jsx";
import PredictionMethods from "./dashboard/PredictionMethods.jsx";
import AnalysisReport from "./dashboard/AnalysisReport.jsx";
import AnalysisTips from "./dashboard/AnalysisTips.jsx";
import AiDisclaimer from "./dashboard/AiDisclaimer.jsx";

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
          prevention: [],
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
    <div
      className="
        relative
        flex
        min-h-screen
        flex-col
        overflow-hidden
        bg-white
        font-sans
        text-slate-900
        dark:bg-slate-950
        dark:text-slate-100
      "
    >
      {/* Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main emerald glow */}
        <div
          className="
            absolute
            left-1/2
            top-[-180px]
            h-[500px]
            w-[800px]
            -translate-x-1/2
            rounded-full
            bg-emerald-100/50
            blur-3xl
            dark:bg-emerald-950/30
          "
        />

        {/* Left glow */}
        <div
          className="
            absolute
            -left-48
            top-[420px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-green-100/40
            blur-3xl
            dark:bg-green-950/20
          "
        />

        {/* Right glow */}
        <div
          className="
            absolute
            -right-48
            top-[550px]
            h-[450px]
            w-[450px]
            rounded-full
            bg-emerald-100/40
            blur-3xl
            dark:bg-emerald-950/20
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            dark:opacity-[0.035]
            [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main
        className="
          relative
          z-10
          flex-grow
          px-4
          pb-20
          pt-28
          sm:px-6
          sm:pt-32
          lg:px-8
          lg:pt-36
        "
      >
        {/* Hero */}
        <DashboardHero />

        {/* Prediction Methods */}
        <PredictionMethods
          onResult={handlePredictionResult}
          onLoading={handleLoadingState}
        />

        {/* Analysis Report */}
        <AnalysisReport
          results={predictionResults}
          isLoading={isLoading}
        />

        {/* Analysis Tips */}
        <AnalysisTips />

        {/* AI Disclaimer */}
        <AiDisclaimer />
      </main>
    </div>
  );
};

export default Dashboard;
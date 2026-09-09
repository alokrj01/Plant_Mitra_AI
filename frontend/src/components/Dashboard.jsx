import { useState } from "react";
import Navbar from "./Navbar.jsx";
import TextPrediction from "./TextPrediction.jsx";
import ImagePrediction from "./ImagePrediction.jsx";
import Results from "./Results.jsx";
import { Sparkles, Leaf } from "lucide-react";

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
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================= */}
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

      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <Navbar />

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
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
        {/* =====================================================
            HERO / WELCOME
        ===================================================== */}
        <section className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-emerald-200
              bg-emerald-50/80
              px-4
              py-2
              text-xs
              font-semibold
              text-emerald-700
              shadow-sm
              backdrop-blur-sm
              dark:border-emerald-800/80
              dark:bg-emerald-950/40
              dark:text-emerald-400
            "
          >
            <Sparkles className="h-4 w-4" />
            AI-powered plant health analysis
          </div>

          {/* Heading */}
          <h1
            className="
              font-display
              text-4xl
              font-black
              leading-[1.08]
              tracking-tight
              text-slate-950
              dark:text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Understand what is
            <span className="block text-emerald-600 dark:text-emerald-400">
              affecting your plant.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              dark:text-slate-400
              sm:text-lg
              sm:leading-8
            "
          >
            Analyze your plant using an image or describe its symptoms with
            text. Get AI-assisted disease insights and explore available
            treatment guidance.
          </p>

          {/* Small capability row */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Image prediction
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Text prediction
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Treatment guidance
            </div>
          </div>
        </section>

        {/* =====================================================
            ANALYSIS METHODS
        ===================================================== */}
        <section className="mx-auto mt-16 max-w-6xl sm:mt-20">
          {/* Section heading */}
          <div className="mb-8 text-center">
            <div className="mb-2 flex items-center justify-center gap-2">
              <Leaf className="h-4 w-4 text-emerald-500" />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-emerald-600
                  dark:text-emerald-400
                "
              >
                Choose your analysis method
              </span>
            </div>

            <h2
              className="
                font-display
                text-2xl
                font-bold
                tracking-tight
                text-slate-900
                dark:text-white
                sm:text-3xl
              "
            >
              Start with an image or symptoms
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500 dark:text-slate-400">
              Use whichever information you have available to begin your
              plant health analysis.
            </p>
          </div>

          {/* Prediction cards */}
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Text Prediction */}
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200/80
                bg-white/80
                shadow-lg
                shadow-slate-900/5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-emerald-900/10
                dark:border-slate-800
                dark:bg-slate-900/75
                dark:shadow-black/20
                dark:hover:border-emerald-900
              "
            >
              {/* Top accent */}
              <div
                className="
                  absolute
                  inset-x-0
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-emerald-500
                  to-transparent
                  opacity-60
                "
              />

              <div className="p-5 sm:p-7">
                <TextPrediction
                  onResult={handlePredictionResult}
                  onLoading={handleLoadingState}
                />
              </div>
            </div>

            {/* Image Prediction */}
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200/80
                bg-white/80
                shadow-lg
                shadow-slate-900/5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-emerald-900/10
                dark:border-slate-800
                dark:bg-slate-900/75
                dark:shadow-black/20
                dark:hover:border-emerald-900
              "
            >
              {/* Top accent */}
              <div
                className="
                  absolute
                  inset-x-0
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-emerald-500
                  to-transparent
                  opacity-60
                "
              />

              <div className="p-5 sm:p-7">
                <ImagePrediction
                  onResult={handlePredictionResult}
                  onLoading={handleLoadingState}
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ANALYSIS REPORT
        ===================================================== */}
        <section className="mx-auto mt-20 max-w-6xl sm:mt-24">
          {/* Section divider */}
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />

            <div
              className="
                flex
                shrink-0
                items-center
                gap-2
                rounded-full
                border
                border-slate-200
                bg-white
                px-4
                py-2
                shadow-sm
                dark:border-slate-800
                dark:bg-slate-900
              "
            >
              <Sparkles className="h-3.5 w-3.5 text-emerald-500" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-slate-500
                  dark:text-slate-400
                  sm:text-xs
                "
              >
                Analysis Report
              </span>
            </div>

            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>

          {/* Results */}
          <div className="animate-in fade-in duration-700">
            <Results
              results={predictionResults}
              isLoading={isLoading}
            />
          </div>
        </section>

      {/* ANALYSIS TIPS */}
      <section className="mx-auto mt-12 max-w-6xl">
        <div
          className="
             rounded-2xl
             border
           border-slate-200/80
           bg-white/70
             px-5
             py-4
             shadow-sm
             backdrop-blur-xl
           dark:border-slate-800
           dark:bg-slate-900/60
          "
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Left */}
            <div className="flex items-start gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                bg-emerald-50
                dark:bg-emerald-950/40
                "
              >
                <Leaf className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Analysis Tips
                </h3>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Get better results by providing clear information.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
              <span>Clear image</span>
              <span>•</span>
              <span>Visible symptoms</span>
              <span>•</span>
              <span>Good lighting</span>
            </div>
          </div>
        </div>
      </section>

      {/* AI DISCLAIMER */}
      <section className="mx-auto mt-4 max-w-6xl">
        <div
          className="
            flex
            items-start
            gap-3
            rounded-2xl
            border
          border-emerald-100
          bg-emerald-50/50
            px-5
            py-4
          dark:border-emerald-900/60
          dark:bg-emerald-950/20
          "
        >
          <Sparkles
            className="
              mt-0.5
              h-4
              w-4
              shrink-0
            text-emerald-600
            dark:text-emerald-400
            "
          />

          <div>
            <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
              AI-assisted analysis
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
              PlantMitra provides supportive insights and results may not always be
              accurate. Use the analysis alongside your own observation.
            </p>
          </div>
        </div>
      </section>
      </main>
    </div>
    
  );
};

export default Dashboard;
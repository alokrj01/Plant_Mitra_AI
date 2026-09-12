import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";

import PredictionDetailHeader from "../components/prediction-history/PredictionDetailHeader.jsx";
import DiagnosisCard from "../components/prediction-history/DiagnosisCard.jsx";
import PredictionInput from "../components/prediction-history/PredictionInput.jsx";
import PredictionFeedback from "../components/prediction-history/PredictionFeedback.jsx";
import PredictionDetailSkeleton from "../components/prediction-history/PredictionDetailSkeleton.jsx";

import {
  getPrediction,
  submitPredictionFeedback,
} from "../features/predictions/api/predictionApi.js";

import { getApiErrorMessage } from "../lib/apiError.js";

export default function PredictionHistoryDetailPage() {
  const { predictionId } = useParams();
  const navigate = useNavigate();

  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const [isSubmittingFeedback, setIsSubmittingFeedback] =
    useState(false);

  const [feedbackError, setFeedbackError] = useState("");

  const loadPrediction = useCallback(async () => {
    try {
      setIsLoading(true);
      setError("");

      const data = await getPrediction(predictionId);

      setPrediction(data);
    } catch (error) {
      setError(getApiErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  }, [predictionId]);

  useEffect(() => {
    loadPrediction();
  }, [loadPrediction]);

  const handleFeedback = async (feedback) => {
    if (
      !prediction ||
      prediction.feedback ||
      isSubmittingFeedback
    ) {
      return;
    }

    try {
      setIsSubmittingFeedback(true);
      setFeedbackError("");

      const result = await submitPredictionFeedback(
        prediction.id,
        feedback,
      );

      setPrediction((current) => ({
        ...current,
        feedback: result.feedback,
      }));
    } catch (error) {
      setFeedbackError(
        getApiErrorMessage(error),
      );
    } finally {
      setIsSubmittingFeedback(false);
    }
  };

  if (isLoading) {
    return (
      <>
        <Navbar />
        <PredictionDetailSkeleton />
      </>
    );
  }

  if (error || !prediction) {
    return (
      <>
        <Navbar />

        <main className="relative min-h-screen overflow-hidden bg-white px-4 pb-12 pt-28 dark:bg-slate-950 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <button
              type="button"
              onClick={() => navigate("/history")}
              className="
                inline-flex items-center gap-2
                rounded-xl
                px-2 py-1.5
                text-sm font-medium
                text-slate-500
                transition-colors
                hover:bg-slate-100
                hover:text-slate-900
                dark:text-slate-400
                dark:hover:bg-slate-900
                dark:hover:text-white
              "
            >
              ← Back to History
            </button>

            <div
              className="
                mt-8 rounded-3xl
                border border-red-200
                bg-red-50
                p-8
                text-center
                shadow-sm
                dark:border-red-900/50
                dark:bg-red-950/20
              "
            >
              <div
                className="
                  mx-auto flex h-12 w-12
                  items-center justify-center
                  rounded-2xl
                  bg-red-100
                  text-lg font-bold text-red-600
                  dark:bg-red-950/50
                  dark:text-red-400
                "
              >
                !
              </div>

              <h1 className="mt-5 font-semibold text-red-700 dark:text-red-400">
                Prediction not found
              </h1>

              <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                {error || "This prediction could not be loaded."}
              </p>

              <button
                type="button"
                onClick={() => navigate("/history")}
                className="
                  mt-6 inline-flex items-center gap-2
                  rounded-xl
                  bg-red-600
                  px-4 py-2.5
                  text-sm font-semibold text-white
                  transition-colors
                  hover:bg-red-500
                "
              >
                Back to History
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-100/40 blur-3xl dark:bg-emerald-950/25" />

        <div className="absolute -right-48 top-[500px] h-[400px] w-[400px] rounded-full bg-emerald-100/30 blur-3xl dark:bg-emerald-950/15" />

        <div
          className="
            absolute inset-0 opacity-[0.025]
            dark:opacity-[0.035]
            [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />
      </div>

      <Navbar />

      <main className="relative z-10 min-h-screen px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <PredictionDetailHeader
            prediction={prediction}
            onBack={() => navigate("/history")}
          />

          <DiagnosisCard
            confidence={prediction.confidence}
          />

          <PredictionInput
            inputText={prediction.input_text}
          />

          <PredictionFeedback
            feedback={prediction.feedback}
            isSubmitting={isSubmittingFeedback}
            feedbackError={feedbackError}
            onFeedback={handleFeedback}
          />
        </div>
      </main>
    </div>
  );
}
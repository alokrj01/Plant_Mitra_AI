import React, { useEffect, useRef, useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import {
  DiagnosisCard,
  AnalysisContext,
  TreatmentPlan,
  ResultsLoading,
  EmptyResults
} from "./results";

import { submitPredictionFeedback } from "../features/predictions/api/predictionApi.js";


const Results = ({ results, isLoading }) => {
  const resultsRef = useRef(null);

  const [feedback, setFeedback] = useState(null);
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const [feedbackError, setFeedbackError] = useState(null);

  useEffect(() => {
    setFeedback(results?.feedback ?? null);
    setFeedbackError(null);
  }, [results?.prediction_id, results?.feedback]);

  // Smooth scroll to results when they appear
  useEffect(() => {
    if (results && !isLoading && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [results, isLoading]);

  // Helper to convert "98.50%" string to 98.5 number
  const confidenceValue =
  typeof results?.confidence === "string"
    ? parseFloat(results.confidence)
    : results?.confidence ?? 0;

  const handleFeedback = async (value) => {
    if (!results?.prediction_id || feedbackLoading || feedback) {
      return;
    }

    setFeedbackLoading(true);
    setFeedbackError(null);

    try {
      await submitPredictionFeedback(
        results.prediction_id,
        value,
      );

      setFeedback(value);
    } catch (error) {
      console.error("Failed to submit prediction feedback:", error);

      setFeedbackError(
        error?.response?.data?.detail ||
        "Unable to submit feedback. Please try again.",
      );
    } finally {
      setFeedbackLoading(false);
    }
  };

  if (isLoading) {
  return <ResultsLoading />;
  }

  if (!results) {
  return <EmptyResults />;
  }

  // Determine vibes based on healthy vs diseased
  const isHealthy = results.disease?.toLowerCase().includes('healthy');

  return (
    <div ref={resultsRef} className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* --- SECTION 1: AI DIAGNOSIS HEADER --- */}
      <DiagnosisCard
      disease={results.disease}
      confidence={confidenceValue}
      severity={results.severity}
      isHealthy={isHealthy} 
      />

      {/* --- SECTION 2: DESCRIPTION & CONTEXT --- */}
      <AnalysisContext
      type={results.type}
      description={results.description}
      input={results.input} 
      />

      {/* --- SECTION 3: TREATMENT RECOMMENDATIONS --- */}
      <TreatmentPlan
      isHealthy={isHealthy}
      treatment={results.treatment} 
      />

            {/* --- SECTION 4: PREDICTION FEEDBACK --- */}
      {results.prediction_id && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Was this prediction helpful?
            </h3>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Your feedback helps us improve PlantMitra AI.
            </p>

            <div className="mt-5 flex justify-center gap-3">
              <button
                type="button"
                onClick={() => handleFeedback("correct")}
                disabled={feedbackLoading || feedback !== null}
                className={`inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium transition ${
                  feedback === "correct"
                    ? "border-green-500 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                    : "border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                } disabled:cursor-not-allowed disabled:opacity-60`}
              >
                <ThumbsUp size={18} />
                Correct
              </button>

              <button
                type="button"
                onClick={() => handleFeedback("incorrect")}
                disabled={feedbackLoading || feedback !== null}
                className={`inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium transition ${
                  feedback === "incorrect"
                    ? "border-red-500 bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                    : "border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                } disabled:cursor-not-allowed disabled:opacity-60`}
              >
                <ThumbsDown size={18} />
                Incorrect
              </button>
            </div>

            {feedback && (
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                Thanks for your feedback!
              </p>
            )}

            {feedbackError && (
              <p className="mt-4 text-sm text-red-600 dark:text-red-400">
                {feedbackError}
              </p>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default Results;
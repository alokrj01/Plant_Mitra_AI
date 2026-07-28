import React, { useEffect, useRef } from 'react';
import {  Activity, Leaf } from 'lucide-react';
import {
  DiagnosisCard,
  AnalysisContext,
  TreatmentPlan,
  ResultsLoading,
  EmptyResults
} from "./results";


const Results = ({ results, isLoading }) => {
  const resultsRef = useRef(null);

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

    </div>
  );
};

export default Results;
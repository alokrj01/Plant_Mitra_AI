import React, { useState } from 'react';
import { Button } from './ui/button.jsx';
import { Label } from './ui/label.jsx';
import { Textarea } from './ui/textarea.jsx';
import { FileText, Send, ChevronDown, Loader2 } from 'lucide-react';
import SectionHeader from './ui/SectionHeader.jsx';
import { api } from '../api.js';
import { useToast } from '../hooks/use-toast';

const TextPrediction = ({ onResult, onLoading }) => {
  const [plantType, setPlantType] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const plantTypes = [
    'Tomato', 'Potato', 'Pepper', 'Corn', 'Wheat', 'Rice', 'Carrot',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit triggered:", { plantType, symptoms }); //for debugging

    if (!plantType || !symptoms) {
      toast({
        title: "Missing Information",
        description: "Please select a plant type and describe symptoms.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      onLoading(true);
      
      // STEP 1: Combine plantType and symptoms into a single string.
      const combinedText = `The plant is ${plantType}. The symptoms are: ${symptoms}`;

      // STEP 2: Create a payload object with the 'text' key that the backend expects.
      const payload = {
        text: combinedText,
      };

      console.log("Sending this payload to backend:", payload); // For debugging

      // STEP 3: Send the correct payload to the API.
      const { data } = await api.post('/text-prediction', payload);
      
      console.log("API Response:", data); //for debugging

      onResult({
        ...data,
        type: 'text',
        // We can still show the original input to the user
        input: { plantType, symptoms }, 
        confidence: data.confidence || "N/A"
      });

      toast({
        title: "Analysis Complete",
        description: "Text-based prediction has been generated.",
      });

      setSymptoms('');
      setPlantType('');

    } catch (error) {
      console.error("Prediction Failed:", error); //for debugging
      toast({
        title: "Prediction Failed",
        description: error.response?.data?.message || error.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      onLoading(false);
    }
};

  return (
    <div className="w-full max-w-md mx-auto space-y-6 animate-in fade-in duration-500">
      
      {/* Header Section */}
      <SectionHeader
        icon={FileText}
        title="Describe Symptoms"
        subtitle="Provide details for AI analysis"
      />
      
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Plant Type Dropdown */}
        <div>
          <Label htmlFor="plantType"
           className='font-sans font-medium text-slate-700 dark:text-slate-300'>Plant Type</Label>
          <div className="relative group">
            {/* Custom Modern Select Field */}
            <select
              id="plantType"
              value={plantType}
              onChange={(e) => setPlantType(e.target.value)}
              className="font-sans w-full h-12 px-4 pr-10 text-slate-900 dark:text-slate-100 bg-gray-50/60 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 rounded-xl focus:bg-white dark:focus:bg-slate-800 focus:border-green-500 dark:focus:border-green-400 focus:outline-none focus:ring-4 focus:ring-green-500/10 dark:focus:ring-green-400/20 transition-all duration-300 ease-in-out appearance-none cursor-pointer sm:text-sm"
            >
              <option value="" disabled>Choose a plant type</option>
              {plantTypes.map((plant) => (
                <option key={plant} value={plant}>
                  {plant}
                </option>
              ))}
            </select>
            {/* Custom Arrow Icon */}
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-slate-500 pointer-events-none group-focus-within:text-green-500 dark:group-focus-within:text-green-400 transition-colors" />
          </div>
        </div>
        
        {/* Symptoms Textarea */}
        <div>
          <Label htmlFor="symptoms"
           className='font-sans font-medium text-slate-700 dark:text-slate-300'>Symptoms Details</Label>

          <Textarea
            id="symptoms"
            placeholder="Example: Yellow leaves, brown spots, curled edges, wilting, or powdery white patches."
            className='font-sans placeholder:text-slate-400'
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            rows={4} 
          />
        </div>
        
        {/* Button */}
        <Button
          type="submit"
          className="w-full h-12 mt-2 text-sm"
          disabled={!plantType || !symptoms || isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing Symptoms...
            </>
          ) : (
            <>
              Analyze Symptoms
              <Send className="h-4 w-4 ml-2" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default TextPrediction;
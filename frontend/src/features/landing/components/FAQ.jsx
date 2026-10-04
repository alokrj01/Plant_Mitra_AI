import { useState } from "react";
import {
  ChevronDown,
  CircleHelp,
  MessageSquareText,
} from "lucide-react";

const faqs = [
  {
    question: "What is PlantMitra AI?",
    answer:
      "PlantMitra AI is a plant health analysis platform that uses AI-assisted prediction to help identify potential plant diseases from an image or a description of symptoms.",
  },
  {
    question: "How can I analyze a plant?",
    answer:
      "You can start an analysis in two ways: upload an image of the plant for image-based prediction, or describe the symptoms using text for text-based analysis.",
  },
  {
    question: "What does the prediction result include?",
    answer:
      "A prediction can include the identified condition, prediction confidence, relevant disease information, and treatment guidance when information is available for the predicted condition.",
  },
  {
    question: "Can I use PlantMitra without a plant image?",
    answer:
      "Yes. PlantMitra also provides text-based prediction, allowing you to describe the symptoms you are observing when you do not have a suitable image.",
  },
  {
    question: "How reliable are the AI predictions?",
    answer:
      "Predictions depend on the quality of the input and the conditions represented in the underlying model. They should be treated as AI-assisted guidance rather than a definitive diagnosis.",
  },
  {
    question: "Why might an image prediction be incorrect?",
    answer:
      "Poor image quality, unclear symptoms, unusual plant conditions, or symptoms that resemble multiple diseases can affect the prediction. AI models also have limitations based on the data they were trained on.",
  },
  {
    question: "Can I see my previous predictions?",
    answer:
      "Yes. Authenticated users can access their prediction history, making it possible to revisit previous analyses and results.",
  },
  {
    question: "Is PlantMitra a replacement for a plant expert?",
    answer:
      "No. PlantMitra is designed as an AI-assisted analysis tool. For serious, widespread, or uncertain plant health problems, professional agricultural or plant-health advice may be appropriate.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-900/40"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-500/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
            <CircleHelp className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            Frequently asked questions
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Questions,{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              answered.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            A few things worth knowing before you start analyzing your plant
            with PlantMitra.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 dark:bg-slate-950 ${
                  isOpen
                    ? "border-emerald-200 shadow-md dark:border-emerald-900/60"
                    : "border-slate-200 dark:border-slate-800"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-sm font-semibold text-slate-900 sm:text-base dark:text-white">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400"
                        : "bg-slate-100 text-slate-500 dark:bg-slate-900 dark:text-slate-400"
                    }`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 px-5 pb-5 pt-4 dark:border-slate-800 sm:px-6">
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom help card */}
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 dark:border-emerald-900/50 dark:bg-emerald-950/20">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm dark:bg-slate-950 dark:text-emerald-400">
              <MessageSquareText className="h-5 w-5" />
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Still unsure about your plant?
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Start with the information you have. You can use either an
                image or a symptom description to begin your analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
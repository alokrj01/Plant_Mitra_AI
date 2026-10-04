import { FileText } from "lucide-react";

const PredictionInput = ({ inputText }) => {
  if (!inputText) {
    return null;
  }

  return (
    <section
      className="
        mt-4
        rounded-2xl
        border border-slate-200
        bg-white
        p-6
        shadow-sm
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <div className="flex items-center gap-2">
        <FileText className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />

        <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
          Original Input
        </h2>
      </div>

      <div
        className="
          mt-4 rounded-xl
          border border-slate-100
          bg-slate-50
          p-4
          dark:border-slate-800
          dark:bg-slate-950
        "
      >
        <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
          {inputText}
        </p>
      </div>
    </section>
  );
};

export default PredictionInput;
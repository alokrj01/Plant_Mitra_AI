import { Leaf, ShieldCheck } from "lucide-react";

function formatConfidence(confidence) {
  return `${(confidence * 100).toFixed(1)}%`;
}

const DiagnosisCard = ({ confidence }) => {
  const percentage = Math.min(
    Math.max(confidence * 100, 0),
    100,
  );

  return (
    <section
      className="
        relative mt-8 overflow-hidden
        rounded-3xl
        border border-emerald-200
        bg-gradient-to-br from-emerald-50 via-white to-white
        p-6
        shadow-sm
        dark:border-emerald-900/50
        dark:from-emerald-950/40
        dark:via-slate-900
        dark:to-slate-900
        sm:p-7
      "
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-900/20" />

      <div className="relative flex items-center justify-between gap-5">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />

            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Model Confidence
            </p>
          </div>

          <p className="mt-2 text-4xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400">
            {formatConfidence(confidence)}
          </p>

          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Confidence score for this prediction
          </p>
        </div>

        <div
          className="
            flex h-16 w-16 shrink-0 items-center justify-center
            rounded-2xl
            border border-emerald-100
            bg-white
            shadow-sm
            dark:border-emerald-900/50
            dark:bg-slate-900
          "
        >
          <Leaf className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
        </div>
      </div>

      <div className="relative mt-6">
        <div className="h-2 overflow-hidden rounded-full bg-emerald-100 dark:bg-emerald-950/60">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default DiagnosisCard;
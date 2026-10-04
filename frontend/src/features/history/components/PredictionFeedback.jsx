import { MessageSquare } from "lucide-react";

const PredictionFeedback = ({
  feedback,
  isSubmitting,
  feedbackError,
  onFeedback,
}) => {
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
        <div
          className="
            flex h-9 w-9 items-center justify-center
            rounded-xl
            bg-emerald-50
            text-emerald-600
            dark:bg-emerald-950/40
            dark:text-emerald-400
          "
        >
          <MessageSquare className="h-4 w-4" />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
            Was this prediction helpful?
          </h2>

          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            Your feedback helps improve the system.
          </p>
        </div>
      </div>

      {feedback ? (
        <div
          className="
            mt-5 rounded-xl
            border border-emerald-200
            bg-emerald-50
            px-4 py-3
            text-sm text-emerald-700
            dark:border-emerald-900/50
            dark:bg-emerald-950/30
            dark:text-emerald-400
          "
        >
          Thanks for your feedback. You marked this prediction as{" "}
          <span className="font-semibold">{feedback}</span>.
        </div>
      ) : (
        <>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              disabled={isSubmitting}
              onClick={() => onFeedback("helpful")}
              className="
                rounded-xl
                border border-slate-200
                bg-white
                px-4 py-2.5
                text-sm font-medium
                text-slate-700
                transition-all
                hover:-translate-y-0.5
                hover:border-emerald-300
                hover:bg-emerald-50
                hover:text-emerald-700
                disabled:cursor-not-allowed
                disabled:opacity-50
                dark:border-slate-700
                dark:bg-slate-900
                dark:text-slate-300
                dark:hover:border-emerald-700
                dark:hover:bg-emerald-950/30
                dark:hover:text-emerald-400
              "
            >
              👍 Helpful
            </button>

            <button
              type="button"
              disabled={isSubmitting}
              onClick={() => onFeedback("not_helpful")}
              className="
                rounded-xl
                border border-slate-200
                bg-white
                px-4 py-2.5
                text-sm font-medium
                text-slate-700
                transition-all
                hover:-translate-y-0.5
                hover:border-red-300
                hover:bg-red-50
                hover:text-red-700
                disabled:cursor-not-allowed
                disabled:opacity-50
                dark:border-slate-700
                dark:bg-slate-900
                dark:text-slate-300
                dark:hover:border-red-800
                dark:hover:bg-red-950/30
                dark:hover:text-red-400
              "
            >
              👎 Not Helpful
            </button>
          </div>

          {feedbackError && (
            <p className="mt-3 text-sm text-red-600 dark:text-red-400">
              {feedbackError}
            </p>
          )}
        </>
      )}
    </section>
  );
};

export default PredictionFeedback;
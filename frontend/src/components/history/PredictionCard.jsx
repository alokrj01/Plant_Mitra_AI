import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock3,
  FileText,
  Image,
  MessageSquare,
} from "lucide-react";

function formatDate(date) {
  return new Date(date).toLocaleString([], {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function formatConfidence(confidence) {
  return `${(confidence * 100).toFixed(1)}%`;
}

const PredictionCard = ({ prediction }) => {
  const isImagePrediction =
    prediction.prediction_type === "image";

  return (
    <article
      className="
        group relative overflow-hidden
        rounded-2xl
        border border-slate-200
        bg-white
        p-5
        shadow-sm
        transition-all duration-300
        hover:-translate-y-0.5
        hover:border-emerald-200
        hover:shadow-lg hover:shadow-emerald-100/40
        dark:border-slate-800
        dark:bg-slate-900
        dark:hover:border-emerald-900/70
        dark:hover:shadow-emerald-950/20
      "
    >
      {/* Accent line */}
      <div
        className="
          absolute inset-x-0 top-0 h-px
          bg-gradient-to-r
          from-transparent
          via-emerald-400/70
          to-transparent
          opacity-0
          transition-opacity
          group-hover:opacity-100
        "
      />

      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3.5">
          <div
            className="
              flex h-11 w-11 shrink-0 items-center justify-center
              rounded-xl
              border border-emerald-100
              bg-emerald-50
              text-emerald-600
              dark:border-emerald-900/50
              dark:bg-emerald-950/40
              dark:text-emerald-400
            "
          >
            {isImagePrediction ? (
              <Image className="h-5 w-5" />
            ) : (
              <FileText className="h-5 w-5" />
            )}
          </div>

          <div className="min-w-0">
            <div className="mb-1.5 flex flex-wrap items-center gap-2">
              <span
                className="
                  rounded-full
                  bg-slate-100
                  px-2 py-0.5
                  text-[10px] font-semibold uppercase tracking-wider
                  text-slate-500
                  dark:bg-slate-800
                  dark:text-slate-400
                "
              >
                {isImagePrediction ? "Image" : "Text"}
              </span>
            </div>

            <h2
              className="
                truncate
                text-base font-semibold
                text-slate-900
                dark:text-white
              "
            >
              {prediction.predicted_class}
            </h2>

            <div
              className="
                mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1
                text-xs text-slate-500
                dark:text-slate-400
              "
            >
              <Clock3 className="h-3.5 w-3.5" />
              <span>{formatDate(prediction.created_at)}</span>
            </div>
          </div>
        </div>

        {/* Confidence */}
        <div
          className="
            shrink-0 rounded-xl
            border border-emerald-100
            bg-emerald-50/80
            px-3 py-2
            text-right
            dark:border-emerald-900/50
            dark:bg-emerald-950/30
          "
        >
          <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
            Confidence
          </p>

          <p className="mt-0.5 text-sm font-bold text-emerald-600 dark:text-emerald-400">
            {formatConfidence(prediction.confidence)}
          </p>
        </div>
      </div>

      {/* Confidence bar */}
      <div className="mt-5">
        <div className="h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all"
            style={{
              width: `${Math.min(
                Math.max(prediction.confidence * 100, 0),
                100,
              )}%`,
            }}
          />
        </div>
      </div>

      {/* Input */}
      {prediction.input_text && (
        <div
          className="
            mt-5 rounded-xl
            border border-slate-100
            bg-slate-50/80
            px-4 py-3
            dark:border-slate-800
            dark:bg-slate-950/60
          "
        >
          <p
            className="
              line-clamp-2
              text-sm leading-5
              text-slate-600
              dark:text-slate-400
            "
          >
            {prediction.input_text}
          </p>
        </div>
      )}

      {/* Footer */}
      <div
        className="
          mt-5 flex flex-col gap-3
          border-t border-slate-100
          pt-4
          sm:flex-row sm:items-center sm:justify-between
          dark:border-slate-800
        "
      >
        <div
          className="
            flex min-w-0 items-center gap-1.5
            text-xs text-slate-500
            dark:text-slate-400
          "
        >
          <MessageSquare className="h-3.5 w-3.5 shrink-0" />

          <span className="truncate">
            {prediction.feedback
              ? `Feedback: ${prediction.feedback}`
              : "No feedback yet"}
          </span>
        </div>

        <Link
          to={`/history/${prediction.id}`}
          className="
            inline-flex shrink-0 items-center justify-center gap-1.5
            rounded-xl
            border border-slate-200
            bg-white
            px-3.5 py-2
            text-xs font-semibold
            text-slate-700
            transition-all
            hover:border-emerald-200
            hover:bg-emerald-50
            hover:text-emerald-700
            dark:border-slate-700
            dark:bg-slate-900
            dark:text-slate-300
            dark:hover:border-emerald-800
            dark:hover:bg-emerald-950/30
            dark:hover:text-emerald-400
          "
        >
          View Details
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
};

export default PredictionCard;
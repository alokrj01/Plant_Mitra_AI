import { useCallback, useEffect, useState } from "react";

import Navbar from "../components/Navbar.jsx";

import HistoryHeader from "../components/history/HistoryHeader.jsx";
import PredictionCard from "../components/history/PredictionCard.jsx";
import HistoryEmptyState from "../components/history/HistoryEmptyState.jsx";
import HistoryPagination from "../components/history/HistoryPagination.jsx";

import {
  getPredictionHistory,
} from "../features/predictions/api/predictionApi.js";

import { getApiErrorMessage } from "../lib/apiError.js";

const PAGE_SIZE = 10;

export default function HistoryPage() {
  const [history, setHistory] = useState(null);
  const [page, setPage] = useState(1);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const loadHistory = useCallback(async () => {
    try {
      setIsLoading(true);
      setError("");

      const data = await getPredictionHistory({
        page,
        pageSize: PAGE_SIZE,
      });

      setHistory(data);
    } catch (error) {
      setError(getApiErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  const goToPreviousPage = () => {
    setPage((currentPage) =>
      Math.max(currentPage - 1, 1),
    );
  };

  const goToNextPage = () => {
    if (history?.has_next) {
      setPage((currentPage) => currentPage + 1);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-100/40 blur-3xl dark:bg-emerald-950/25" />

        <div className="absolute -left-48 top-[500px] h-[350px] w-[350px] rounded-full bg-green-100/30 blur-3xl dark:bg-green-950/15" />

        <div className="absolute -right-48 top-[700px] h-[400px] w-[400px] rounded-full bg-emerald-100/30 blur-3xl dark:bg-emerald-950/15" />

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
        <div className="mx-auto max-w-5xl">
          <HistoryHeader total={history?.total ?? 0} />

          {/* Loading */}
          {isLoading && (
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="
                    h-48 animate-pulse
                    rounded-2xl
                    border border-slate-200
                    bg-slate-100
                    dark:border-slate-800
                    dark:bg-slate-900
                  "
                />
              ))}
            </div>
          )}

          {/* Error */}
          {!isLoading && error && (
            <div
              className="
                rounded-2xl
                border border-red-200
                bg-red-50
                p-7
                text-center
                shadow-sm
                dark:border-red-900/50
                dark:bg-red-950/20
              "
            >
              <div
                className="
                  mx-auto flex h-11 w-11
                  items-center justify-center
                  rounded-full
                  bg-red-100
                  text-red-600
                  dark:bg-red-950/50
                  dark:text-red-400
                "
              >
                !
              </div>

              <h2 className="mt-4 font-semibold text-red-700 dark:text-red-400">
                Unable to load prediction history
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm text-red-600 dark:text-red-400">
                {error}
              </p>

              <button
                type="button"
                onClick={loadHistory}
                className="
                  mt-5 rounded-xl
                  bg-red-600
                  px-4 py-2.5
                  text-sm font-semibold text-white
                  transition-colors
                  hover:bg-red-500
                "
              >
                Try Again
              </button>
            </div>
          )}

          {/* Empty */}
          {!isLoading &&
            !error &&
            !history?.items?.length && (
              <HistoryEmptyState />
            )}

          {/* Predictions */}
          {!isLoading &&
            !error &&
            history?.items?.length > 0 && (
              <>
                <div className="space-y-4">
                  {history.items.map((prediction) => (
                    <PredictionCard
                      key={prediction.id}
                      prediction={prediction}
                    />
                  ))}
                </div>

                {history.total > PAGE_SIZE && (
                  <HistoryPagination
                    page={history.page}
                    hasNext={history.has_next}
                    onPrevious={goToPreviousPage}
                    onNext={goToNextPage}
                  />
                )}
              </>
            )}
        </div>
      </main>
    </div>
  );
}
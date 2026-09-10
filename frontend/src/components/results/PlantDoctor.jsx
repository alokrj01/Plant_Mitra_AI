import { useState } from "react";
import {
  Bot,
  Send,
  Loader2,
  Sparkles,
} from "lucide-react";

import { askPlantDoctor } from "../../features/predictions/api/predictionApi.js";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";


const PlantDoctor = ({ predictionId, disease }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleAsk = async (event) => {
    event.preventDefault();

    const trimmedQuestion = question.trim();

    if (!trimmedQuestion || loading) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await askPlantDoctor(
        predictionId,
        trimmedQuestion,
      );

      setAnswer(data.answer);
      setQuestion("");
    } catch (error) {
      console.error(
        "Failed to ask Plant Doctor:",
        error,
      );

      setError(
        error?.response?.data?.detail ||
        "Unable to get an answer right now. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };


  return (
    <Card className="overflow-hidden border-0 shadow-xl">

      <CardHeader className="border-b border-slate-200 bg-gradient-to-r from-green-50 to-emerald-50 dark:border-slate-700 dark:from-green-950/30 dark:to-emerald-950/20">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400">
            <Bot size={22} />
          </div>

          <div>
            <CardTitle className="flex items-center gap-2 text-lg">
              Ask Plant Doctor
              <Sparkles
                size={16}
                className="text-green-600 dark:text-green-400"
              />
            </CardTitle>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Ask questions about your {disease} diagnosis.
            </p>
          </div>

        </div>

      </CardHeader>


      <CardContent className="space-y-6 p-6">

        <form
          onSubmit={handleAsk}
          className="space-y-3"
        >

          <Textarea
            value={question}
            onChange={(event) =>
              setQuestion(event.target.value)
            }
            placeholder="e.g. What should I do to prevent this disease from spreading?"
            maxLength={1000}
            rows={4}
            disabled={loading}
          />

          <div className="flex justify-end">

            <Button
              type="submit"
              disabled={!question.trim() || loading}
              className="gap-2"
            >
              {loading ? (
                <>
                  <Loader2
                    size={17}
                    className="animate-spin"
                  />
                  Thinking...
                </>
              ) : (
                <>
                  <Send size={17} />
                  Ask Plant Doctor
                </>
              )}
            </Button>

          </div>

        </form>


        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400">
            {error}
          </div>
        )}


        {answer && (
          <div className="space-y-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/50">

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">
                {answer.summary}
              </h4>
            </div>


            {answer.immediate_actions.length > 0 && (
              <div>
                <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">
                  What should I do?
                </h4>

                <ul className="space-y-2">
                  {answer.immediate_actions.map(
                    (action, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
                      >
                        <span className="mt-1 text-green-600">
                          ✓
                        </span>

                        <span>{action}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            )}


            {answer.prevention.length > 0 && (
              <div>
                <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">
                  Prevention
                </h4>

                <ul className="space-y-2">
                  {answer.prevention.map(
                    (item, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
                      >
                        <span className="mt-1 text-green-600">
                          ✓
                        </span>

                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            )}

          </div>
        )}

      </CardContent>
    </Card>
  );
};

export default PlantDoctor;
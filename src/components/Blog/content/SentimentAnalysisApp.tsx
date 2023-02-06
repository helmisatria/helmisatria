import React from "react";
import { twJoin } from "tailwind-merge";

// define window global variable
declare global {
  interface Window {
    dataLayer: {
      push: (data: {}) => void;
    };
    posthog: {
      capture: (event: string, data: {}) => void;
    };
  }
}

export const SentimentAnalysisApp = () => {
  const sentenceInputRef = React.useRef<HTMLInputElement>(null);
  const resultRef = React.useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sentence = sentenceInputRef.current?.value;
    const url = `${import.meta.env.PUBLIC_SENTIMENT_API_HOST}/sentiment`;

    setIsLoading(true);

    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: sentence }),
    })
      .then(async (response) => {
        const data = await response.json().catch(() => {
          throw new Error("Kamu keseringan ngecek sentimen 😨, coba lagi nanti ya");
        });

        window.posthog?.capture?.("sentiment_analysis", { $set: { sentence: sentence } });

        if (!resultRef.current) return;

        if (!data.label) {
          resultRef.current.innerHTML = data.error;
          return;
        } else {
          const label = data.label.toUpperCase();
          const score = (data.score * 100).toFixed(4);

          const emoticon = {
            POSITIVE: "😄",
            NEGATIVE: "😢",
            NEUTRAL: "😐",
          };

          resultRef.current.innerHTML = `<span style="font-weight: 700">${emoticon[label]} ${label}</span> => ${score}%`;
        }
      })
      .catch((error) => {
        if (!resultRef.current) return;

        const defaultErrorMessage = "Maaf yaa, lagi mati servernya (mahal 😅). Boleh cek lagi nanti di working hours ya";
        let errorMessage = defaultErrorMessage;

        if (
          error.message &&
          (error.message.includes("NetworkError") || String(error.message).toLowerCase().includes("failed"))
        ) {
          errorMessage = defaultErrorMessage;
        } else if (error?.message) {
          errorMessage = error.message;
        }

        resultRef.current.innerHTML = errorMessage;
        window.posthog?.capture?.("sentiment_analysis", { $set: { sentence: sentence, error: error.message } });
      })
      .finally(() => {
        setIsLoading(false);

        window.dataLayer?.push?.({
          event: "sentiment_analysis",
          sentiment_analysis_sentence: sentence,
        });
      });
  };

  return (
    <div className="m-10 mx-auto max-w-md rounded-lg px-4 py-4 shadow-lg sm:px-6 sm:py-10">
      <div className="bg-white sm:rounded-lg sm:shadow">
        <div className="px-2 py-3 sm:p-6">
          <h3 className="text-lg font-semibold leading-6 text-gray-900">Aplikasi Sentimen Analisis</h3>
          <div className="mt-2 max-w-md text-gray-500">
            <p className="!max-w-[300px] !text-xs">
              Aplikasi ini akan menganalisis sentimen dari sebuah kalimat yang dimasukkan.
            </p>
          </div>
          <form onSubmit={onSubmit} className="mt-5 flex-col space-y-3 sm:flex sm:items-end">
            <div className="w-full">
              <label htmlFor="sentence" className="sr-only">
                Kalimat
              </label>
              <input
                ref={sentenceInputRef}
                type="text"
                name="text"
                id="sentence"
                className="block w-full rounded-md border-gray-300 !py-3 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                placeholder="Masukkan kalimat disini"
              />
            </div>
            <button
              type="submit"
              className={twJoin(
                "mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 font-semibold text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
                isLoading && "cursor-not-allowed bg-gray-400 hover:bg-gray-400 focus:ring-gray-400"
              )}
            >
              {isLoading ? "Loading cek sentimen..." : "Cek Sentimen"}
            </button>
          </form>
          <div className="mt-5">
            <p className="text-sm text-gray-500">Hasil Sentimen Analisis</p>
            <div ref={resultRef} id="result" className="mt-1 text-sm font-medium text-cyan-800">
              <p className="!text-xs !text-slate-600">-- Sentimen akan muncul disini --</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

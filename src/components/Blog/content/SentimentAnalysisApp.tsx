import React from "react";

// define window global variable
declare global {
  interface Window {
    dataLayer: {
      push: (data: {}) => void;
    }
  }
}

export const SentimentAnalysisApp = () => {
  const sentenceInputRef = React.useRef<HTMLInputElement>(null);
  const resultRef = React.useRef<HTMLDivElement>(null);


  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sentence = sentenceInputRef.current?.value
    const url = 'https://4fa4-2404-8000-1025-3c-20c9-f787-6ff3-f2b.ap.ngrok.io/sentiment'

    console.log('sentence -->', sentence)

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: sentence }),
    })
      .then((response) => response.json())
      .then((data) => {
        window.dataLayer?.push?.({
          'event': 'sentiment_analysis',
          'sentence': sentence,
          'is_error': data.error ? true : false,
        });

        if (!resultRef.current) return

        if (!data.label) {
          resultRef.current.innerHTML = data.error
          return
        } else {
          const label = data.label.toUpperCase()
          const score = Number(data.score.toFixed(2)) * 100

          resultRef.current.innerHTML = `<span style="font-weight: 700">${label}</span> => ${score}%`
        }
      })
      .catch((error) => {
        console.error('Error:', error)
        window.dataLayer?.push?.({
          'event': 'sentiment_analysis',
          'sentence': sentence,
          'is_error': true
        });
      })

    return false;
  }

  return (
    <div className="m-10 max-w-md mx-auto shadow-lg px-6 py-10">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-2 py-3 sm:p-6">
          <h3 className="text-lg font-semibold leading-6 text-gray-900">Aplikasi Sentimen Analisis</h3>
          <div className="mt-2 max-w-md text-gray-500">
            <p className="!text-xs !max-w-[300px]">
              Aplikasi ini akan menganalisis sentimen dari sebuah kalimat yang dimasukkan.
            </p>
          </div>
          <form onSubmit={onSubmit} className="mt-5 sm:flex flex-col space-y-3 sm:items-end">
            <div className="w-full">
              <label htmlFor="sentence" className="sr-only">Kalimat</label>
              <input ref={sentenceInputRef} type="text" name="text" id="sentence" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm !py-3" placeholder="Masukkan kalimat disini" />
            </div>
            <button type="submit" className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm font-semibold">Cek Sentimen</button>
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
}
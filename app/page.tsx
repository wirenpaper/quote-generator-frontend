"use client";

import { useEffect, useState } from "react";

interface Quote {
  text?: string;
  author?: string;
}
let data: Quote[];
let flg = false;

export default function Quotes() {
  const [quote, setQuote] = useState<Quote>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuotes() {
      try {
        const res = await fetch("https://type.fit/api/quotes");
        data = await res.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        if (flg == false) {
          flg = true;
          setQuote(data[randomIndex]);
        }
      } catch {
        console.log("Error fetching quotes:", Error);
      } finally {
        setLoading(false);
      }
    }
    fetchQuotes();
  }, []);

  return (
    <div>
      <h1 className="flex justify-center p-4 pb-24">
        Project 3: Quote Generator
      </h1>
      <div className="flex justify-center">
        <div className="flex-row justify-center border-2 border-gray-500 bg-white w-31rem">
          <div className="flex justify-center">
            <button
              className="border border-gray-500 m-4
              py-0.5 flex px-2 bg-gray-200 text-xs"
              onClick={() => {
                if (data.length > 0) {
                  // Ensures there are quotes before accessing
                  const randomIndex = Math.floor(Math.random() * data.length);
                  setQuote(data[randomIndex]);
                  console.log("quotes length", data.length);
                }
              }}
            >
              New Quote
            </button>
          </div>
          {loading ? (
            <>
              <h3 className="text-center">
                <span>“</span>
              </h3>
              <i className="flex justify-center p-4">
                - 
              </i>
            </>
          ) : (
            data.length > 0 && (
              <>
                <h3 className="text-center">
                  <span>“</span>
                  {quote?.text} {/* Use optional chaining */}
                </h3>
                <i className="flex justify-center p-4">
                  - {quote?.author} {/* Use optional chaining */}
                </i>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
}

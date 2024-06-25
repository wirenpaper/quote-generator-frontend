"use client";

import { useEffect, useState } from "react";

interface Quote {
  text: string;
  author?: string;
}

export default function Quotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    async function fetchQuotes() {
      const res = await fetch("https://type.fit/api/quotes");
      const data: Quote[] = await res.json();
      setQuotes(data);
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
            >
              New Quote
            </button>
          </div>
          <h3 className="text-center">
            <span>“</span>
            Genius is one percent inspiration and ninety-nine percent
            perspiration.
          </h3>
          <i className="flex justify-center p-4">- Thomas edison</i>
        </div>
      </div>
    </div>
  );
}

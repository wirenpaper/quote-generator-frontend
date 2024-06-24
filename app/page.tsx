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
      <h1 className="flex justify-center p-4 pb-24">Project 3: Quote Generator</h1>
      <div className="flex justify-center">
        <div className="flex justify-center border-2 border-gray-500 bg-white w-31rem">
          <button className="border p-1">New Quote</button>
        </div>
      </div>
    </div>
  );
}

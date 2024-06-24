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
      <h1 className="flex justify-center p-4">Project 3: Quote Generator</h1>
    </div>
  );
}

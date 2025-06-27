'use client'; // important to use hooks

import { useState } from 'react';

const quotes = [
  "Stay hungry, stay foolish.",
  "Be yourself; everyone else is already taken.",
  "Simplicity is the ultimate sophistication.",
  "Code is like humor. When you have to explain it, it’s bad."
];

export default function HomePage() {
  const [quote, setQuote] = useState("");

  const getRandomQuote = () => {
    const index = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[index]);
  };

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🎯 Quote Generator</h1>
      <button onClick={getRandomQuote} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
        Generate Quote
      </button>
      {quote && <p style={{ marginTop: '2rem', fontSize: '1.2rem' }}>{quote}</p>}
    </main>
  );
}

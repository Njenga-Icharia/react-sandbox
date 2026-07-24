'use client';

import { useState } from 'react';

export default function ButtonPractice() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-800 p-8">
      <h1 className="text-3xl font-bold text-white">🔘 Button Practice</h1>
      
      <button
        onClick={() => setCount(count + 1)}
        className="rounded-lg bg-blue-600 px-8 py-4 text-2xl font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-500 active:scale-95"
      >
        Clicked {count} times
      </button>

      <button
        onClick={() => setCount(0)}
        className="rounded bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
      >
        Reset
      </button>

      <a href="/" className="text-blue-400 underline hover:text-blue-300">
        ← Back to Home
      </a>
    </div>
  );
}
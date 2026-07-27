'use client';

import { useState } from 'react';

export default function Page() {
  return (
    // 1. Full-screen lime green background, centered vertically & horizontally
    <div className="min-h-screen w-full bg-[#b5e853] flex flex-col items-center justify-center p-4 sm:p-8 gap-6">
      
      {/* 2. The main container card with hard offset shadow */}
      <div className="w-full max-w-5xl bg-[#f5f0e6] border-2 border-black rounded-[2rem] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        
        {/* Placeholder content area */}
        <div className="p-8 text-center text-gray-700">
          Main Card Area
        </div>

      </div>

      <a href="/" className="text-black font-semibold underline hover:opacity-80">
        ← Back to Home
      </a>

    </div>
  );
}
'use client';

import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-[#f97316] flex flex-col items-center justify-between p-6 sm:p-10 text-[#1e1e28]">
      
      {/* 1. TOP OUTER BRANDING */}
      <header className="pt-4 pb-8 flex items-center gap-3 text-3xl sm:text-4xl font-recoleta font-bold tracking-tight">
        <span className="text-4xl">🧠</span> 
        <span>TECHNO BRAIN</span>
      </header>

      {/* 2. MAIN CONTAINER CARD */}
      <div className="w-full max-w-5xl bg-[#f8f9fa] border-2 border-[#1e1e28] rounded-[2.5rem] shadow-[20px_20px_0px_0px_#1e1e28] overflow-hidden my-auto">
        
        {/* NAVBAR */}
        <nav className="flex items-center justify-between px-8 py-4 border-b border-[#1e1e28]">
          <div className="flex items-center gap-2 font-black text-lg tracking-tight">
            <span className="text-xl">🧠</span> TechnoBrain
          </div>

          <div className="hidden md:flex items-center gap-6 font-bold text-xs tracking-wider uppercase">
            <Link href="/practice/abc/solutions" className="hover:underline">Solutions</Link>
            <Link href="/practice/abc/enterprise" className="hover:underline">Enterprise</Link>
            <Link href="/practice/abc/industries" className="hover:underline">Industries</Link>
            <Link href="/case-studies" className="hover:underline">Case Studies</Link>
            <Link href="/careers" className="hover:underline">Careers</Link>
          </div>

          <Link 
            href="/contact" 
            className="bg-[#f97316] text-white px-5 py-2 rounded-full border border-[#1e1e28] font-bold text-xs tracking-wider uppercase shadow-[3px_3px_0px_0px_#1e1e28] active:translate-x-0.5 active:translate-y-0.5 transition-all inline-block text-center"
          >
            Get In Touch
          </Link>
        </nav>

        {/* HERO CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col items-start gap-6">
            
            <span className="bg-[#f97316]/10 text-[#f97316] border border-[#f97316] text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
              Empowering Lives • CMMI Level 5
            </span>

            <h1 className="text-4xl md:text-5xl font-recoleta font-bold leading-tight tracking-tight">
              Engineered for{' '}
              <span className="inline-block bg-[#f97316] text-white border border-[#1e1e28] px-2 rounded-md shadow-[4px_4px_0px_0px_#1e1e28]">
                scale.
              </span>{' '}
              Built for impact.
            </h1>

            <p className="text-[#1e1e28]/70 text-sm leading-relaxed max-w-md">
              Enterprise software development, public sector automation, digital identity, and IT infrastructure — tailored for global growth.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link 
                href="/practice/abc/solutions" 
                className="bg-[#f97316] text-white px-6 py-3 rounded-full border-2 border-[#1e1e28] font-bold text-xs uppercase tracking-wider shadow-[4px_4px_0px_0px_#1e1e28] active:translate-x-0.5 active:translate-y-0.5 transition-all inline-block text-center"
              >
                Explore Solutions
              </Link>
              
              <Link 
                href="/practice/abc/industries" 
                className="bg-transparent text-[#1e1e28] px-6 py-3 rounded-full border-2 border-[#1e1e28] font-bold text-xs uppercase tracking-wider hover:bg-[#1e1e28]/5 transition-all inline-block text-center"
              >
                Our Capabilities
              </Link>
            </div>

          </div>

          {/* Right Column: Illustration */}
          <div className="relative min-h-[300px] flex items-center justify-center p-4">
            <img 
              src="/Computer login-amico.svg" 
              alt="Computer Login Illustration" 
              className="w-full max-w-[340px] h-auto object-contain" 
            />
          </div>

        </div>

      </div>

      {/* 3. FOOTER */}
      <footer className="pt-6 pb-2">
        <Link
          href="/"
          className="bg-white text-[#1e1e28] px-5 py-2 rounded-full border border-[#1e1e28] font-bold text-xs tracking-wider uppercase shadow-[3px_3px_0px_0px_#1e1e28] active:translate-x-0.5 active:translate-y-0.5 transition-all inline-block"
        >
          Back to Home
        </Link>
      </footer>

    </div>
  );
}
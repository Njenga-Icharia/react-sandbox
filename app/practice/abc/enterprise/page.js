import Link from 'next/link';

export default function EnterprisePage() {
  return (
    <div className="min-h-screen w-full bg-[#f97316] flex flex-col items-center justify-between p-6 sm:p-10 text-[#1e1e28]">
      
      {/* Header */}
      <header className="pt-4 pb-4">
        <h1 className="text-3xl font-recoleta font-bold tracking-tight text-white drop-shadow-[2px_2px_0px_#1e1e28]">
          Enterprise Solutions
        </h1>
      </header>

      {/* Main Container Card */}
      <div className="w-full max-w-4xl bg-[#f8f9fa] border-2 border-[#1e1e28] rounded-[2.5rem] shadow-[20px_20px_0px_0px_#1e1e28] p-8 flex items-center justify-center my-auto">
        <img 
          src="/enterprise-img.png" 
          alt="Enterprise Details" 
          className="w-full max-h-[500px] object-contain rounded-xl"
        />
      </div>

      {/* Back Button */}
      <footer className="pt-6 pb-2">
        <Link
          href="/practice/abc"
          className="bg-white text-[#1e1e28] px-5 py-2 rounded-full border border-[#1e1e28] font-bold text-xs tracking-wider uppercase shadow-[3px_3px_0px_0px_#1e1e28] active:translate-x-0.5 active:translate-y-0.5 transition-all inline-block"
        >
          ← Back to Landing Page
        </Link>
      </footer>

    </div>
  );
}
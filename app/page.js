export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-900 p-8">
      
      {/* Titles on Top with Cool Typography & Gradients */}
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-4xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 drop-shadow-md">
          🧪 MY REACT SANDBOX 🧪
        </h1>
        
        <p className="text-xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-300">
          Mastering React ⚛️, Frontend 🎨 & UI/UX 🫟 one page at a time 🧩
        </p>
        
        <h2 className="text-sm font-mono tracking-widest text-indigo-200 uppercase bg-gray-800/80 px-4 py-1.5 rounded-full border border-indigo-500/30 shadow-inner">
          ⋆⭒˚.⋆🪐 ⋆⭒˚.⋆ NJENGA ICHARIA 𓍯𓂃𓏧♡ 
        </h2>
      </div>

      {/* SVG in the Middle */}
      <div className="w-[500px] h-[400px] bg-slate-100 rounded-3xl p-6 shadow-2xl flex items-center justify-center">
        <img 
          src="/horseback-riding-animate.svg" 
          alt="Horseback Riding Animation" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Buttons at the Bottom */}
      <div className="flex flex-wrap justify-center gap-4 max-w-2xl">
        <a 
          href="/practice/button" 
          className="rounded-lg bg-blue-600 px-6 py-4 text-white transition hover:scale-105 hover:bg-blue-500 font-medium"
        >
          🖲️ Push Button Practice
        </a>
        <a 
          href="/practice/nextjs-default" 
          className="rounded-lg bg-purple-600 px-6 py-4 text-white transition hover:scale-105 hover:bg-purple-500 font-medium"
        >
          🚀 Next.js Starter Template
        </a>
        <a
          href="/practice/test"
          className="rounded-lg bg-purple-600 px-6 py-4 text-white transition hover:scale-105 hover:bg-purple-500 font-medium"
        >
          📋 Testing Area
        </a>

        <a
          href="/practice/FloatingSquare"
          className="rounded-lg bg-purple-600 px-6 py-4 text-white transition hover:scale-105 hover:bg-purple-500 font-medium"
        >
          🏡 CauseHouse
        </a>

        <a
          href="/practice/abc"
          className="rounded-lg bg-purple-600 px-6 py-4 text-white transition hover:scale-105 hover:bg-purple-500 font-medium"
        >
          🧠 Techno Brain Demo
        </a>
      </div>
    </main>
  );
}
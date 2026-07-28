'use client';

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-[#f97316] flex flex-col items-center justify-between p-6 sm:p-10 text-[#1e1e28]">
      
      {/* 1. TOP OUTER BRANDING (Logo icon kept, text removed) */}
      <header className="pt-4 pb-8 flex items-center justify-center">
        <span className="text-4xl">🧠 Techno Brain </span>
      </header>

      {/* 2. MAIN CONTAINER CARD (Structural Shell) */}
      <div className="w-full max-w-5xl bg-[#f8f9fa] border-2 border-[#1e1e28] rounded-[2.5rem] shadow-[20px_20px_0px_0px_#1e1e28] overflow-hidden my-auto">
        
        {/* NAVBAR FRAME */}
        <nav className="flex items-center justify-between px-8 py-5 border-b border-[#1e1e28]">
          {/* Inner Logo Placeholder */}
          <div className="w-8 h-8 rounded-full bg-[#f97316]/20 border border-[#1e1e28]" />

          {/* Nav Links Placeholders */}
          <div className="hidden md:flex items-center gap-6">
            <div className="w-16 h-3 bg-[#1e1e28]/10 rounded-full" />
            <div className="w-16 h-3 bg-[#1e1e28]/10 rounded-full" />
            <div className="w-20 h-3 bg-[#1e1e28]/10 rounded-full" />
            <div className="w-20 h-3 bg-[#1e1e28]/10 rounded-full" />
            <div className="w-14 h-3 bg-[#1e1e28]/10 rounded-full" />
          </div>

          {/* Top Right CTA Button Frame */}
          <button className="bg-[#f97316] w-28 h-8 rounded-full border border-[#1e1e28] shadow-[3px_3px_0px_0px_#1e1e28] active:translate-x-0.5 active:translate-y-0.5 transition-all" />
        </nav>

        {/* HERO CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
          
          {/* Left Column: Wireframe Block Placeholders */}
          <div className="flex flex-col items-start gap-6 w-full">
{/*             
            {/* Tagline Badge Frame */}
            <div className="w-40 h-6 bg-[#f97316]/10 border border-[#f97316] rounded-full" />

            {/* Main Title Wireframe Lines */}
            <div className="w-full space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-1/2 h-10 bg-[#1e1e28]/15 rounded-lg" />
                <div className="w-1/3 h-10 bg-[#f97316] border border-[#1e1e28] rounded-md shadow-[4px_4px_0px_0px_#1e1e28]" />
              </div>
              <div className="w-3/4 h-10 bg-[#1e1e28]/15 rounded-lg" />
            </div>

            {/* Subtitle Wireframe Lines */}
            <div className="w-full max-w-md space-y-2 pt-2">
              <div className="w-full h-3 bg-[#1e1e28]/10 rounded-full" />
              <div className="w-11/12 h-3 bg-[#1e1e28]/10 rounded-full" />
              <div className="w-4/5 h-3 bg-[#1e1e28]/10 rounded-full" />
            </div> 

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#f97316] w-36 h-11 rounded-full border-2 border-[#1e1e28] shadow-[4px_4px_0px_0px_#1e1e28] active:translate-x-0.5 active:translate-y-0.5 transition-all" />
              <button className="bg-transparent w-36 h-11 rounded-full border-2 border-[#1e1e28] hover:bg-[#1e1e28]/5 transition-all" /> 
            </div>

          </div>

          {/* Right Column: Graphic Area Shell */}
          <div className="relative min-h-[250px] flex items-center justify-center border-2 border-dashed border-[#1e1e28]/20 rounded-2xl bg-[#1e1e28]/5 p-6">
            <span className="text-4xl opacity-40">💻 🌐 ☁️</span>
          </div>

        </div>

      </div>

      {/* 3. FOOTER / BACK LINK (Pinned to bottom) */}
      <footer className="pt-6 pb-2">
        <a href="/" className="font-semibold underline hover:opacity-80">
          ← Back to Home
        </a>
      </footer>

    </div>
  );
}







  
//   'use client';

// export default function Page() {
//   return (
//     // 1. Full-screen lime green background, centered vertically & horizontally
//     <div className="min-h-screen w-full bg-[#b5e853] flex flex-col items-center justify-center p-4 sm:p-8 gap-6">
      
//       {/* 2. The main container card with hard offset shadow */}
//       <div className="w-full max-w-5xl bg-[#f5f0e6] border-2 border-black rounded-[2rem] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        
//         {/* Placeholder content area */}
//         <div className="p-8 text-center text-gray-700">
//           Main Card Area
//         </div>

//       </div>

//       <a href="/" className="text-black font-semibold underline hover:opacity-80">
//         ← Back to Home
//       </a>

//     </div>
//   );
// } 


  
//   'use client';

// export default function Page() {
//   return (
//     <div className="min-h-screen w-full bg-[#b5e853] flex flex-col items-center justify-center p-4 sm:p-8 gap-6">
      
//       {/* Main Container Card */}
//       <div className="w-full max-w-5xl bg-[#f5f0e6] border-2 border-black rounded-[2rem] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden text-black">
        
//         {/* 1. NAVBAR */}
//         <nav className="flex items-center justify-between px-8 py-4 border-b border-black">
//           {/* Brand / Logo */}
//           <div className="flex items-center gap-2 font-black text-xl tracking-tight">
//             <span className="text-2xl">🏡</span> CauseHouse
//           </div>

//           {/* Navigation Links */}
//           <div className="hidden md:flex items-center gap-6 font-bold text-xs tracking-wider uppercase">
//             <a href="#" className="hover:underline">Services</a>
//             <a href="#" className="hover:underline">About</a>
//             <a href="#" className="hover:underline">Who We Serve</a>
//             <a href="#" className="hover:underline">Case Studies</a>
//             <a href="#" className="hover:underline">Resources</a>
//           </div>

//           {/* Top Right CTA Button */}
//           <button className="bg-[#b5e853] px-5 py-2 rounded-full border border-black font-bold text-xs tracking-wider uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all">
//             Work With Us
//           </button>
//         </nav>

//         {/* 2. HERO CONTENT GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
          
//           {/* Left Column: Text & Action Buttons */}
//           <div className="flex flex-col items-start gap-6">
            
//             {/* Small Top Badge */}
//             <span className="bg-[#b5e853] border border-black text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
//               Nonprofit Marketing Agency
//             </span>

//             {/* Main Title */}
//             <h1 className="text-4xl md:text-5xl font-serif font-black leading-tight tracking-tight">
//               Build the house your{' '}
//               <span className="inline-block bg-[#b5e853] border border-black px-2 rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-[#1a1a1a]">
//                 mission
//               </span>{' '}
//               grows in.
//             </h1>

//             {/* Subtitle */}
//             <p className="text-gray-600 text-sm leading-relaxed max-w-md">
//               Websites, fundraising systems, CRM, analytics, and campaign infrastructure — designed to work as one for growing mission-driven teams.
//             </p>

//             {/* Action Buttons */}
//             <div className="flex flex-wrap gap-4 pt-2">
//               <button className="bg-[#b5e853] px-6 py-3 rounded-full border-2 border-black font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all">
//                 Work With Us
//               </button>
              
//               <button className="bg-transparent px-6 py-3 rounded-full border-2 border-black font-bold text-xs uppercase tracking-wider hover:bg-black/5 transition-all">
//                 Explore Services
//               </button>
//             </div>

//           </div>

//           {/* Right Column: Illustration Placeholder */}
//           <div className="relative min-h-[250px] flex items-center justify-center border-2 border-dashed border-black/20 rounded-2xl bg-black/5 p-6">
//             <div className="text-center text-sm font-semibold text-gray-500">
//               <span className="text-3xl block mb-2">🎨 🏡 🐔</span>
//               [ Illustration Area ]
//               <p className="text-xs font-normal text-gray-400 mt-1">
//                 (House, Hill, Chicken & Clouds SVG assets go here)
//               </p>
//             </div>
//           </div>

//         </div>

//       </div>

//       <a href="/" className="text-black font-semibold underline hover:opacity-80">
//         ← Back to Home
//       </a>

//     </div>
//   );
// }


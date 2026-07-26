export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-900 p-8">
      <h1 className="text-4xl font-bold text-white">🧪 My React Sandbox 🧪</h1>
      <h1 className="text-4xl font-bold text-white"> ⋆⭒˚.⋆🪐 ⋆⭒˚.⋆ NJENGA ICHARIA 𓍯𓂃𓏧♡ </h1>
      
      <div className="flex flex-wrap justify-center gap-4">
        <a 
          href="/practice/button" 
          className="rounded-lg bg-blue-600 px-6 py-4 text-white transition hover:scale-105 hover:bg-blue-500"
        >
          🔘 Button Practice
        </a>
        <a 
          href="/practice/nextjs-default" 
          className="rounded-lg bg-purple-600 px-6 py-4 text-white transition hover:scale-105 hover:bg-purple-500"
        >
          🎨 Next.js Default Playground
        </a>
        <a
          href="/practice/test"
          className="rounded-lg bg-purple-600 px-6 py-4 text-white transition hover:scale-105 hover:bg-purple-500"
          >
          🔘  Test
        </a>



      </div>
    </main>
  );
}
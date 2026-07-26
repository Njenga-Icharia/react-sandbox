'use client'; 
import { useState, useEffect } from 'react'; // [⚛️ React Concept: Rules of Hooks - top-level, use prefix]

export default function FeatureTesterPage() {
  // --- STATE MANAGEMENT ---
  // [⚛️ React Concept: State (useState Hook) for memory storage] 
  // [⚡ JS Concept: Variables (defaulting to const) & Array Destructuring]
  const [docs, setDocs] = useState([]); 
  const [currentText, setCurrentText] = useState('');
  const [policy, setPolicy] = useState('');
  const [loading, setLoading] = useState(true);
  
  // --- STRINGS & INTERPOLATION ---
  const developerName = 'Njenga Icharia'; 
  // [⚡ JS Concept: Template Literals using backticks and ${} injection]
  const welcomeMessage = `Developer: ${developerName} | Workspace: Practice Module`;

  // --- SIDE EFFECTS (ASYNCHRONOUS ACTIONS) ---
  // [⚛️ React Concept: Side Effects via useEffect]
  useEffect(() => {
    // [⚡ JS Concept: Async/Await & Promises with try/catch for fetching data]
    const fetchPolicyData = async () => {
      try {
        setLoading(true);
        // Simulating 1.5-second network latency promise delay
        await new Promise((resolve) => setTimeout(resolve, 1500));
        
        const serverData = "TECHNO BRAIN CMMI LEVEL 5: Build on a feature branch (njenga/feature), verify locally, and submit a Pull Request for Steven to review.";
        setPolicy(serverData);
      } catch (error) {
        console.error("Failed fetching internal policy script", error);
        setPolicy("Error loading system requirements.");
      } finally {
        setLoading(false);
      }
    };

    fetchPolicyData();
  }, []); // Empty array dependency means this runs exactly once when page loads

  // --- ACTIONS & HANDLERS ---
  // [⚡ JS Concept: Arrow Functions (() => {}) with implicit logic blocks]
  const handleAddDocument = () => {
    if (!currentText.trim()) return; // [⚛️ React Concept: Early Return pattern]

    const newDoc = {
      id: Date.now(),
      content: currentText,
      timestamp: new Date().toLocaleTimeString()
    };

    // [⚡ JS Concept: Spread Operator (...) for copying old array items and appending the new one]
    setDocs([...docs, newDoc]); 
    setCurrentText(''); // Reset state to clear text area
  };

  const handleDeleteDocument = (idToDelete) => {
    // [⚡ JS Concept: Array Method .filter() for deleting/searching elements]
    const updatedDocs = docs.filter((doc) => doc.id !== idToDelete);
    setDocs(updatedDocs);
  };

  // --- RENDER COMPONENT LAYOUT ---
  return (
    // [🔌 Stack Concept: Tailwind CSS Utility Classes (p-8, flex, max-w-4xl)]
    <div className="p-8 max-w-4xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      
      {/* Header Block */}
      <header className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        {/* [⚛️ React Concept: JSX rules - use className instead of class] */}
        <h1 className="text-2xl font-bold text-gray-800">React & JS Concept Testing Area</h1>
        <p className="text-sm text-blue-600 mt-1 font-mono">{welcomeMessage}</p>
      </header>

      {/* CMMI Compliance Policy Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-md">
        <h3 className="text-xs font-bold uppercase tracking-wider text-yellow-800">Fetched Git Policy</h3>
        {loading ? (
          <p className="text-sm text-gray-500 italic mt-1 animate-pulse">Connecting to internal workspace servers...</p>
        ) : (
          <p className="text-sm text-yellow-900 mt-1 font-sans">{policy}</p>
        )}
      </div>

      {/* Workspace Grid Layout */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Input Field */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">Sandbox Input Field</h2>
          
          <textarea
            value={currentText}
            // [⚛️ React Concept: Handling Events via onChange and e.target.value]
            onChange={(e) => setCurrentText(e.target.value)}
            placeholder="Type code logs here..."
            className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          
          <p className="text-xs text-gray-400 font-mono">Character Length: {currentText.length}</p>

          <button
            onClick={handleAddDocument} // [⚛️ React Concept: Handling Events via onClick]
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition"
          >
            Save to Sandbox State
          </button>
        </section>

        {/* Right Preview Output Terminal */}
        <section className="bg-gray-800 text-green-400 p-6 rounded-lg font-mono text-sm shadow-inner">
          <h2 className="text-white font-bold mb-2">Live State Monitor Terminal</h2>
          {/* [⚛️ React Concept: Conditional Rendering using a Ternary Operator (? :)] */}
          {currentText ? (
            <p className="whitespace-pre-wrap">{currentText}</p>
          ) : (
            <p className="text-gray-500 italic">Waiting for developer keystrokes...</p>
          )}
        </section>
      </main>

      {/* Render Lists Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Saved State Items ({docs.length})</h2>
        
        {/* [⚛️ React Concept: Conditional Rendering using Short-circuit evaluation (&&)] */}
        {docs.length === 0 && (
          <p className="text-gray-400 italic text-sm">No items pushed to current array yet.</p>
        )}

        <ul className="space-y-3">
          {/* [⚡ JS Concept: Array Method .map() for rendering loop elements onto the UI] */}
          {docs.map((doc) => {
            // [⚡ JS Concept: Object Destructuring]
            const { id, content, timestamp } = doc; 

            return (
              // [⚛️ React Concept: JSX rules require a single unique root wrapper node with a 'key' during mapping]
              <li key={id} className="flex justify-between items-start bg-gray-50 p-4 rounded-md border border-gray-100">
                <div>
                  <p className="text-sm text-gray-800">{content}</p>
                  <span className="text-xs text-gray-400 font-mono mt-1 block">Log Instance ID: {timestamp}</span>
                </div>
                <button
                  onClick={() => handleDeleteDocument(id)}
                  className="text-xs bg-red-50 hover:bg-red-100 text-red-600 px-2 py-1 rounded border border-red-200 transition"
                >
                  Clear Item
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

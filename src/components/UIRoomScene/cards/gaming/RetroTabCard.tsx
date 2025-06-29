"use client";

export default function RetroCard() {
  return (
    <div className="max-w-sm mx-auto bg-[#1a001a] text-pink-300 shadow-[0_0_10px_#ff00cc] p-6 rounded-md font-mono border border-pink-400">
      <h2 className="text-2xl font-bold mb-4 text-pink-400 text-center">🎮 Welcome Gamer!</h2>
      <p className="mb-4 text-xs text-pink-200 text-center">Enter the arena by signing into your account.</p>
      <input
        type="text"
        placeholder="Username"
        className="w-full px-3 py-2 mb-3 bg-black text-pink-300 border border-pink-500 rounded-sm placeholder-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-3 py-2 mb-4 bg-black text-pink-300 border border-pink-500 rounded-sm placeholder-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <button className="w-full py-2 bg-pink-500 text-black font-bold rounded-sm shadow-[2px_2px_0px_#000] hover:scale-[1.03] transition-transform">
         Enter Game
      </button>
      <p className="mt-4 text-xs text-pink-300 text-center">
        New player? <span className="underline hover:text-pink-100">Create an account</span>
      </p>
    </div>
  );
}

// Dependencies: none (pure Tailwind CSS)
// Run: No external dependencies required

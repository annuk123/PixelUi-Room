"use client";
import { Button } from "@/components/ui/button";

export default function CyberSecuritySignInCard() {
  return (
    <div className="max-w-sm mx-auto bg-black text-green-400 border border-green-500 shadow-[0_0_20px_#0f0] rounded-lg p-6 font-mono">
      <h2 className="text-2xl font-bold mb-2 text-green-400 text-center">Access Terminal 🔐</h2>
      <p className="text-sm text-green-300 text-center mb-6">Authenticate to enter the secure system</p>

      <input
        type="text"
        placeholder="Username"
        className="w-full mb-3 px-4 py-2 bg-black text-green-300 border border-green-500 rounded-sm placeholder:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <input
        type="password"
        placeholder="••••••••"
        className="w-full mb-5 px-4 py-2 bg-black text-green-300 border border-green-500 rounded-sm placeholder:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <Button className="w-full bg-green-400 text-black font-bold hover:bg-green-300 transition rounded-sm shadow-[0_0_10px_#0f0]">
        Grant Access
      </Button>

      <p className="mt-4 text-center text-xs text-green-500">
        No credentials? <span className="underline hover:text-green-300" >Request Access</span>
      </p>
    </div>
  );
}

//change span with <Link> or <a> while editing

// Dependencies: shadcn/ui (Button)
// Run: npx shadcn add button
// or Run npx install -g cmdease for installing any dependency

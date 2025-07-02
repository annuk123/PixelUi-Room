"use client";
import { Button } from "@/components/ui/button";

export default function BlockchainSignInCard() {
  return (
    <div className="max-w-sm mx-auto bg-[#0a0a23] text-cyan-200 border border-cyan-500/20 backdrop-blur-lg shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-semibold mb-2 text-cyan-400 text-center"> Connect to Chain</h2>
      <p className="text-sm text-cyan-300 text-center mb-6">Access your decentralized dashboard</p>

      <input
        type="email"
        placeholder="wallet@web3mail.io"
        className="w-full mb-4 px-4 py-2 bg-[#0a0a23]/60 text-cyan-200 border border-cyan-500/30 rounded-md placeholder:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      <input
        type="password"
        placeholder="Private Key"
        className="w-full mb-6 px-4 py-2 bg-[#0a0a23]/60 text-cyan-200 border border-cyan-500/30 rounded-md placeholder:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      <Button className="w-full bg-cyan-400 text-black font-bold hover:bg-cyan-300 transition rounded-md shadow-cyan-500/50 shadow-md">
        Connect Wallet
      </Button>

      <p className="mt-4 text-center text-sm text-cyan-400">
        Need a wallet? <span className="underline hover:text-cyan-300">Create one</span>
      </p>
    </div>
  );
}

//change span with <Link> or <a> while editing

// Dependencies: shadcn/ui (Button)
// Run: npx shadcn add button
// or Run npx install -g cmdease for installing any dependency

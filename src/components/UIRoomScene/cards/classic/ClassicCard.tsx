"use client";
import { Button } from "@/components/ui/button";

export default function ClassicSignInCard() {
  return (
    <div className="max-w-sm mx-auto bg-[#f9f5ec] text-[#3b3b3b] border border-[#d8cbb6] shadow-[0_4px_8px_rgba(0,0,0,0.1)] rounded-lg p-6 font-serif">
      <h2 className="text-2xl font-bold mb-2 text-center text-[#5a4334]">Sign In</h2>
      <p className="text-sm text-[#6d5c4d] text-center mb-5 italic">Welcome back to the vintage portal</p>

      <label className="block text-sm mb-1 font-semibold">Email</label>
      <input
        type="email"
        placeholder="your@email.com"
        className="w-full mb-4 px-4 py-2 bg-[#f3ede3] border border-[#c6b69d] text-[#3b3b3b] rounded-md placeholder-[#9e8f7f] focus:outline-none focus:ring-2 focus:ring-[#b89b72]"
      />

      <label className="block text-sm mb-1 font-semibold">Password</label>
      <input
        type="password"
        placeholder="••••••••"
        className="w-full mb-6 px-4 py-2 bg-[#f3ede3] border border-[#c6b69d] text-[#3b3b3b] rounded-md placeholder-[#9e8f7f] focus:outline-none focus:ring-2 focus:ring-[#b89b72]"
      />

      <Button className="w-full bg-[#5a4334] text-[#f9f5ec] font-semibold hover:bg-[#4b3628] transition rounded-md shadow-md">
        Log In
      </Button>

      <p className="mt-4 text-center text-sm text-[#6d5c4d]">
        Don&apos;t have an account? <span className="underline hover:text-[#5a4334]">Register here</span>
      </p>
    </div>
  );
}


//change span with <Link> or <a> while editing

// Dependencies: shadcn/ui (Button)
// Run: npx shadcn add button
// or Run npx install -g cmdease for installing any dependency


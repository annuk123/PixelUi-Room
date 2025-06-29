"use client";
import { Button } from "@/components/ui/button";

export default function FinanceSignInCard() {
  return (
    <div className="max-w-sm mx-auto bg-[#f0f4f8] text-gray-900 border border-gray-200 shadow-xl rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-2 text-center text-[#1e3a8a]">Secure Sign In</h2>
      <p className="text-sm text-gray-600 text-center mb-6">Access your financial dashboard</p>

      <input
        type="email"
        placeholder="you@financecorp.com"
        className="w-full mb-4 px-4 py-2 border border-blue-200 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full mb-6 px-4 py-2 border border-blue-200 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:brightness-110 transition rounded-md shadow-md">
        Log In
      </Button>

      <p className="mt-4 text-center text-sm text-gray-600">
        New to FinanceCorp? <span className="text-blue-700 underline hover:text-blue-600">Sign Up</span>
      </p>
    </div>
  );
}

//change span with <Link> or <a> while editing
// Dependencies: shadcn/ui (Button)
// Run: npx shadcn add button
// or Run npx install -g cmdease for installing any dependency

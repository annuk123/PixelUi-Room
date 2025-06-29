"use client";
import { Button } from "@/components/ui/button";

export default function TravelSignInCard() {
  return (
    <div className="max-w-sm mx-auto bg-gradient-to-br from-[#007cf0] to-[#00dfd8] text-white border border-cyan-300 shadow-xl rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-2 text-center">Adventure Awaits ✈️</h2>
      <p className="text-sm text-cyan-100 text-center mb-6">Sign in to plan your journey</p>

      <input
        type="email"
        placeholder="explorer@travelly.com"
        className="w-full mb-4 px-4 py-2 bg-white/10 text-white border border-white/20 rounded-md placeholder:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-white"
      />

      <input
        type="password"
        placeholder="••••••••"
        className="w-full mb-6 px-4 py-2 bg-white/10 text-white border border-white/20 rounded-md placeholder:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-white"
      />

      <Button className="w-full bg-white text-cyan-700 font-semibold hover:bg-cyan-100 transition rounded-md shadow-md">
        Get Started
      </Button>

      <p className="mt-4 text-center text-sm text-cyan-100">
        New to Travelly? <a className="underline hover:text-white" href="#">Create Account</a>
      </p>
    </div>
  );
}

// Dependencies: shadcn/ui (Button)
// Run: npx cmdease install @radix-ui/react-icons class-variance-authority tailwind-variants

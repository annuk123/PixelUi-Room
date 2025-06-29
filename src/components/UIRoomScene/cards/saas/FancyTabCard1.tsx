"use client";
import { Button } from "@/components/ui/button";

export default function SaaSSignInCard() {
  return (
    <div className="max-w-sm mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-xl rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-2 text-white text-center">Welcome Back 👋</h2>
      <p className="text-sm text-white/90 text-center mb-6">Sign in to your SaaS Dashboard</p>

      <input
        type="email"
        placeholder="you@example.com"
        className="w-full mb-4 px-4 py-2 rounded-md text-black placeholder:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white border border-gray-200"
      />

      <input
        type="password"
        placeholder="••••••••"
        className="w-full mb-6 px-4 py-2 rounded-md text-black placeholder:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white border border-gray-200"
      />

      <Button className="w-full bg-white text-cyan-700 font-semibold hover:bg-white/90 transition rounded-md shadow">
        Sign In
      </Button>

      <p className="mt-4 text-center text-sm text-white/80">
        Don&apos;t have an account? <span className="underline hover:text-white">Get Started</span>
      </p>
    </div>
  );
}

// Dependencies: shadcn/ui (Button)
// Run: npx shadcn add button
// or Run npx install -g cmdease for installing any dependency
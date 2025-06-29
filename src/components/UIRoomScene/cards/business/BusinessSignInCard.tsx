"use client";
import { Button } from "@/components/ui/button";

export default function BusinessSignInCard() {
  return (
    <div className="max-w-sm mx-auto bg-white text-gray-800 border border-gray-300 shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-semibold mb-2 text-center text-gray-900">Welcome Back</h2>
      <p className="text-sm text-gray-500 text-center mb-6">Sign in to your business dashboard</p>

      <input
        type="email"
        placeholder="name@company.com"
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <Button className="w-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition rounded-md shadow">
        Sign In
      </Button>

      <p className="mt-4 text-center text-sm text-gray-500">
        Don’t have an account? <span className="text-blue-600 underline hover:text-blue-500">Get Started</span>
      </p>
    </div>
  );
}

//change span with <Link> or <a> while editing

// Dependencies: shadcn/ui (Button)
// Run: npx shadcn add button
// or Run npx install -g cmdease for installing any dependency



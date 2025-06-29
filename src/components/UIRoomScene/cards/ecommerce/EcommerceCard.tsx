"use client";
import { Button } from "@/components/ui/button";

export default function EcommerceSignInCard() {
  return (
    <div className="max-w-sm mx-auto bg-white text-gray-900 border border-gray-200 shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-2 text-center text-pink-600">Welcome Back 👋</h2>
      <p className="text-sm text-gray-600 text-center mb-6">Sign in to continue shopping</p>

      <input
        type="email"
        placeholder="customer@email.com"
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
      />

      <Button className="w-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold hover:brightness-110 transition rounded-md shadow-md">
        Continue
      </Button>

      <p className="mt-4 text-center text-sm text-gray-600">
        Don’t have an account? <a className="text-pink-600 underline hover:text-pink-500" href="#">Sign Up</a>
      </p>
    </div>
  );
}

//change span with <Link> or <a> while editing

// Dependencies: shadcn/ui (Button)
// Run: npx shadcn add button
// or Run npx install -g cmdease for installing any dependency

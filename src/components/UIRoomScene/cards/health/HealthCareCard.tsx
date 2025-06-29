"use client";
import { Button } from "@/components/ui/button";

export default function HealthCareSignInCard() {
  return (
    <div className="max-w-sm mx-auto bg-[#f6fffb] text-gray-900 border border-emerald-200 shadow-md rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-2 text-center text-emerald-700">Patient Portal</h2>
      <p className="text-sm text-emerald-600 text-center mb-6">Secure access to your health records</p>

      <input
        type="email"
        placeholder="your@email.com"
        className="w-full mb-4 px-4 py-2 border border-emerald-300 rounded-md placeholder:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full mb-6 px-4 py-2 border border-emerald-300 rounded-md placeholder:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />

      <Button className="w-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition rounded-md shadow-md">
        Sign In
      </Button>

      <p className="mt-4 text-center text-sm text-emerald-600">
        New patient? <a className="text-emerald-700 underline hover:text-emerald-600" href="#">Register</a>
      </p>
    </div>
  );
}

//change span with <Link> or <a> while editing

// Dependencies: shadcn/ui (Button)
// Run: npx shadcn add button
// or Run npx install -g cmdease for installing any dependency

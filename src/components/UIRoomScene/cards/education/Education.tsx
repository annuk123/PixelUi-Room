"use client";
import { Button } from "@/components/ui/button";

export default function EducationSignInCard() {
  return (
    <div className="max-w-sm mx-auto bg-[#f9fafb] text-gray-900 border border-gray-200 shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-2 text-center text-indigo-700">Student Login</h2>
      <p className="text-sm text-gray-600 text-center mb-6">Access your learning dashboard</p>

      <input
        type="email"
        placeholder="student@university.edu"
        className="w-full mb-4 px-4 py-2 border border-indigo-300 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full mb-6 px-4 py-2 border border-indigo-300 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <Button className="w-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition rounded-md shadow-md">
        Sign In
      </Button>

      <p className="mt-4 text-center text-sm text-gray-600">
        New here? <span className="text-indigo-700 underline hover:text-indigo-600" >Create an Account</span>
      </p>
    </div>
  );
}

//change span with <Link> or <a> while editing

// Dependencies: shadcn/ui (Button)
// Run: npx shadcn add button
// or Run npx install -g cmdease for installing any dependency


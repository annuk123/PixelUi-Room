"use client";
import { Button } from "@/components/ui/button";

export default function SocialMediaSignInCard() {
  return (
    <div className="max-w-sm mx-auto bg-gradient-to-br from-[#2d2dff] to-[#8f00ff] text-white border border-violet-400 shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-2 text-center">Welcome Back</h2>
      <p className="text-sm text-violet-100 text-center mb-6">Connect with your world</p>

      <input
        type="email"
        placeholder="username@socialhub.com"
        className="w-full mb-4 px-4 py-2 bg-white/10 text-white border border-white/20 rounded-md placeholder:text-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
      />

      <input
        type="password"
        placeholder="••••••••"
        className="w-full mb-6 px-4 py-2 bg-white/10 text-white border border-white/20 rounded-md placeholder:text-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
      />

      <Button className="w-full bg-white text-violet-700 font-semibold hover:bg-violet-100 transition rounded-md shadow-md">
        Log In
      </Button>

      <p className="mt-4 text-center text-sm text-violet-200">
        Don’t have an account? <span className="underline hover:text-white" >Join Now</span>
      </p>
    </div>
  );
}

//change span with <Link> or <a> while editing

// Dependencies: shadcn/ui (Button)
// Run: npx shadcn add button
// or Run npx install -g cmdease for installing any dependency

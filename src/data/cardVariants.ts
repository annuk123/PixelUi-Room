import FancyTabCard1 from "@/components/UIRoomScene/cards/saas/FancyTabCard1";
import RetroTabCard from "@/components/UIRoomScene/cards/gaming/RetroTabCard";
import CyberSecuritySignInCard from "@/components/UIRoomScene/cards/cybersecurity/CyberSecuritySignInCard";
import BlockchainSignInCard from "@/components/UIRoomScene/cards/blockchain/BlockChainSignIn";
import BusinessSignInCard from "@/components/UIRoomScene/cards/business/BusinessSignInCard";
import ClassicSignInCard from "@/components/UIRoomScene/cards/classic/ClassicCard";
import FinanceSignInCard from "@/components/UIRoomScene/cards/finance/FinanceCard";
import EcommerceSignInCard from "@/components/UIRoomScene/cards/ecommerce/EcommerceCard";
import EducationSignInCard from "@/components/UIRoomScene/cards/education/Education";
import HealthCareSignInCard from "@/components/UIRoomScene/cards/health/HealthCareCard";
import SocialMediaSignInCard from "@/components/UIRoomScene/cards/socialmedia/SocialMediaCard";
import TravelSignInCard from "@/components/UIRoomScene/cards/travel/TravelCard";

export const cardVariants = [
  {
    label: "Gradient Card",
    category: "enterprise",
    Component: FancyTabCard1,
    code: `// Dependencies: shadcn/ui, framer-motion
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";

export default function GradientTabs() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md">
        <TabsTrigger value="tab1">Overview</TabsTrigger>
        <TabsTrigger value="tab2">Details</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Welcome to the Gradient Tabs!</TabsContent>
      <TabsContent value="tab2">More info here.</TabsContent>
    </Tabs>
  );
}

 // Run: npx shadcn add button
// or Run npx install -g cmdease for installing any dependency
`,
  },
  {
    label: "Retro Card",
    category: "gaming",
    Component: RetroTabCard,
    code: `// Dependencies: none (pure Tailwind)
"use client";

export default function RetroCard() {
  return (
    <div className="max-w-sm mx-auto bg-[#1a001a] text-pink-300 shadow-[0_0_10px_#ff00cc] p-6 rounded-md font-mono border border-pink-400">
      <h2 className="text-2xl font-bold mb-4 text-pink-400 text-center">🎮 Welcome Gamer!</h2>
      <p className="mb-4 text-xs text-pink-200 text-center">Enter the arena by signing into your account.</p>
      <input
        type="text"
        placeholder="Username"
        className="w-full px-3 py-2 mb-3 bg-black text-pink-300 border border-pink-500 rounded-sm placeholder-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-3 py-2 mb-4 bg-black text-pink-300 border border-pink-500 rounded-sm placeholder-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <button className="w-full py-2 bg-pink-500 text-black font-bold rounded-sm shadow-[2px_2px_0px_#000] hover:scale-[1.03] transition-transform">
         Enter Game
      </button>
      <p className="mt-4 text-xs text-pink-300 text-center">
        New player? <p className="underline hover:text-pink-100" >Create an account</p>
      </p>
    </div>
  );
}

// Run: No external dependencies required
`,
  },

    {
    label: "Cyber Card",
    category: "cybersecurity",
    Component: CyberSecuritySignInCard,
    code: `"use client";
import { Button } from "@/components/ui/button";

export default function CyberSecuritySignInCard() {
  return (
    <div className="max-w-sm mx-auto bg-black text-green-400 border border-green-500 shadow-[0_0_20px_#0f0] rounded-lg p-6 font-mono">
      <h2 className="text-2xl font-bold mb-2 text-green-400 text-center">Access Terminal 🔐</h2>
      <p className="text-sm text-green-300 text-center mb-6">Authenticate to enter the secure system</p>

      <input
        type="text"
        placeholder="Username"
        className="w-full mb-3 px-4 py-2 bg-black text-green-300 border border-green-500 rounded-sm placeholder:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <input
        type="password"
        placeholder="••••••••"
        className="w-full mb-5 px-4 py-2 bg-black text-green-300 border border-green-500 rounded-sm placeholder:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <Button className="w-full bg-green-400 text-black font-bold hover:bg-green-300 transition rounded-sm shadow-[0_0_10px_#0f0]">
        Grant Access
      </Button>

      <p className="mt-4 text-center text-xs text-green-500">
        No credentials? <a className="underline hover:text-green-300" href="#">Request Access</a>
      </p>
    </div>
  );
}

// Dependencies: shadcn/ui (Button)
// Run: npx shadcn add button
// or Run npx install -g cmdease for installing any dependency
`,
  },

      {
    label: "Block Card",
    category: "blockchain",
    Component: BlockchainSignInCard,
    code: `"use client";
import { Button } from "@/components/ui/button";

export default function BlockchainSignInCard() {
  return (
    <div className="max-w-sm mx-auto bg-[#0a0a23] text-cyan-200 border border-cyan-500/20 backdrop-blur-lg shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-semibold mb-2 text-cyan-400 text-center">🔗 Connect to Chain</h2>
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

// Dependencies: shadcn/ui (Button)
// Run: npx shadcn add button
// or Run npx install -g cmdease for installing any dependency
`,
  },

        {
    label: "Business Card",
    category: "blockchain",
    Component: BusinessSignInCard,
    code: `"use client";
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


`,
  },
          {
    label: "Classic Card",
    category: "classic",
    Component: ClassicSignInCard,
    code: `"use client";
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
        Don't have an account? <a className="underline hover:text-[#5a4334]" href="#">Register here</a>
      </p>
    </div>
  );
}


//change span with <Link> or <a> while editing

// Dependencies: shadcn/ui (Button)
// Run: npx shadcn add button
// or Run npx install -g cmdease for installing any dependency

`,
  },
            {
    label: "Finance Card",
    category: "finance",
    Component: FinanceSignInCard,
    code: `"use client";
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
        New to FinanceCorp? <a className="text-blue-700 underline hover:text-blue-600" href="#">Sign Up</a>
      </p>
    </div>
  );
}

//change span with <Link> or <a> while editing
// Dependencies: shadcn/ui (Button)
// Run: npx shadcn add button
// or Run npx install -g cmdease for installing any dependency

`,
  },
            {
    label: "E-commerce Card",
    category: "e-commerce",
    Component: EcommerceSignInCard,
    code: `"use client";
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

`,
  },

              {
    label: "Education Card",
    category: "education",
    Component: EducationSignInCard,
    code: `"use client";
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
        New here? <a className="text-indigo-700 underline hover:text-indigo-600" href="#">Create an Account</a>
      </p>
    </div>
  );
}

//change span with <Link> or <a> while editing

// Dependencies: shadcn/ui (Button)
// Run: npx shadcn add button
// or Run npx install -g cmdease for installing any dependency

`,
  },
            {
    label: "Health Care Card",
    category: "health",
    Component: HealthCareSignInCard,
    code: `"use client";
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

`,
  },
              {
    label: "Social Media Card",
    category: "social media",
    Component: SocialMediaSignInCard,
    code: `"use client";
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
        Don’t have an account? <a className="underline hover:text-white" href="#">Join Now</a>
      </p>
    </div>
  );
}


//change span with <Link> or <a> while editing

// Dependencies: shadcn/ui (Button)
// Run: npx shadcn add button
// or Run npx install -g cmdease for installing any dependency

`,
  },

              {
    label: "Travel Card",
    category: "travel",
    Component: TravelSignInCard,
    code: `"use client";
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
        New to Travelly? <span className="underline hover:text-white">Create Account</span>
      </p>
    </div>
  );
}
`,
  },
];

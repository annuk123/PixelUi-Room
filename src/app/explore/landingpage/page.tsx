'use client';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import RandomParticles from '@/components/HeroSection/RandomParticles/RandomParticles';
import ComingSoonPage from '@/app/comingsoon/page';
// import LandingPageHub from '@/ExplorePage/LandingPageHub';


export default function ComponentPage() {
  return (
    <div className="relative w-full h-screen overflow-x-hidden bg animated-gradient-bg">
              {/* Background Canvas */}
              <div className="fixed inset-0 z-0 pointer-events-none">
                <Canvas
                  camera={{ position: [0, 0, 10], fov: 75 }}
                  gl={{ alpha: true }}
                >
                  <Suspense fallback={null}>
                    <RandomParticles />
                  </Suspense>
                </Canvas>
              </div>
        
              {/* Scrollable Main Content */}
              <main className="relative z-10 px-4  backdrop-blur text-white ">
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-10 bg-black/30 text-white"
    >
          < ComingSoonPage />
      {/* <RetroCard /> */}
      {/* <LandingPageHub /> */}
    </motion.main>
    </main>
    </div>
  );
}

// "use client";

// export default function RetroCard() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 to-pink-900">
//       <div className="max-w-sm mx-auto bg-[#1a001a] text-pink-300 shadow-[0_0_10px_#ff00cc] p-6 rounded-md font-mono border border-pink-400">
//         <h2 className="text-2xl font-bold mb-4 text-pink-400 text-center">🎮 Welcome Gamer!</h2>
//         <p className="mb-4 text-xs text-pink-200 text-center">Enter the arena by signing into your account.</p>
//         <input
//           type="text"
//         placeholder="Username"
//         className="w-full px-3 py-2 mb-3 bg-black text-pink-300 border border-pink-500 rounded-sm placeholder-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         className="w-full px-3 py-2 mb-4 bg-black text-pink-300 border border-pink-500 rounded-sm placeholder-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
//       />
//       <button className="w-full py-2 bg-pink-500 text-black font-bold rounded-sm shadow-[2px_2px_0px_#000] hover:scale-[1.03] transition-transform">
//          Enter Game
//       </button>
//       <p className="mt-4 text-xs text-pink-300 text-center">
//         New player? <span className="underline hover:text-pink-100">Create an account</span>
//       </p>
//     </div>
//   </div>
//   );
// }

// // Dependencies: none (pure Tailwind CSS)
// // Run: No external dependencies required


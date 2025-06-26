'use client';

import ComingSoonPage from '@/app/comingsoon/page';
// import IconHub from '@/ExplorePage/IconHub';
import { motion } from 'framer-motion';
// import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import RandomParticles from '@/components/HeroSection/RandomParticles/RandomParticles';

export default function ComponentPage() {
  return (

        <div className="relative w-full min-h-screen overflow-x-hidden bg animated-gradient-bg">
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
          <main className="relative z-10 px-4 pt-24 pb-32 bg-black/30 backdrop-blur text-white min-h-screen">
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-10 bg-black/30 text-white"
    >
        {/* <Link href="/explore">
  <div className="text-cyan-300 hover:underline mb-4 block">&larr; Back to Explore</div>
</Link>
      <IconHub /> */}
      < ComingSoonPage />
      
    </motion.main>
    </main>
        </div>
  );
}
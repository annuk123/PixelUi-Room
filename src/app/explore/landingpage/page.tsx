'use client';

// import LandingPageHub from '@/ExplorePage/LandingPageHub';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import RandomParticles from '@/components/HeroSection/RandomParticles/RandomParticles';
import ComingSoonPage from '@/app/comingsoon/page';

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
      {/* < LandingPageHub /> */}
    </motion.main>
    </main>
    </div>
  );
}
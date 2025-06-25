'use client';

import { ComponentHub } from '@/ExplorePage/ComponentHub';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <Link href="/explore" className="text-cyan-300 hover:underline mb-4 block">
            &larr; Back to Explore
          </Link>

          <ComponentHub />
        </motion.div>
      </main>
    </div>
  );
}

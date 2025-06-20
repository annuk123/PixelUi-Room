'use client';

import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Suspense } from 'react';
import Particles from './Particles/particles';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#0a0a23] flex items-center justify-center">
      {/* 3D Canvas Background */}
      <Canvas
        className="absolute inset-0 z-0"
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ alpha: true }}
        style={{ pointerEvents: 'auto' }}
      >
        <Suspense fallback={null}>
          <Particles />
        </Suspense>
      </Canvas>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-center">
        <motion.section
          className="space-y-6 max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-lg"
          >
            PixelCraft Studio
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
            className="text-2xl md:text-3xl font-semibold text-cyan-300"
          >
            Welcome to the world where <span className="text-blue-400">Design</span> meets <span className="text-blue-400">Development</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.5 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            At PixelCraft Studio, we blend creativity with precision to craft stunning designs and immersive web experiences that leave a lasting impact.
          </motion.p>

          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 4 }}
            className="inline-block bg-cyan-400 hover:bg-cyan-500 text-black px-6 py-3 rounded-full text-lg font-semibold transition-transform"
          >
            Get Started
          </motion.a>
        </motion.section>
      </div>
    </section>
  );
}

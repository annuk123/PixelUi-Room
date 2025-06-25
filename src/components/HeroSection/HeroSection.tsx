'use client';

import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Suspense, useState } from 'react';
import Particles from './Particles/particles';

interface HeroSectionProps {
  onEnterRoom: () => void;
}

export default function HeroSection({ onEnterRoom }: HeroSectionProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden bg flex items-center justify-center">
      {/* 3D Particle Background */}
<Canvas
  className="absolute inset-0 z-0 pointer-events-none"
  camera={{ position: [0, 0, 10], fov: 75 }}
  gl={{ alpha: true }}
>
  <Suspense fallback={null}>
    <Particles />
  </Suspense>
</Canvas>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-center">
        <motion.section
          className="space-y-6 max-w-4xl"
          initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <TiltText
            text="PixelUI Room"
            className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-lg cursor-pointer"
            initialTilt={{ rotateX: 10, rotateY: 10 }}
          />

          <TiltText
            text="Welcome to the world where Design meets Development."
            className="text-2xl md:text-3xl font-semibold text-cyan-300 cursor-pointer"
            initialTilt={{ rotateX: -10, rotateY: -10 }}
          />

          <TiltText
            text="At PixelUI Room, we blend creativity with precision to craft stunning designs and immersive web experiences that leave a lasting impact."
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto cursor-pointer"
            initialTilt={{ rotateX: 8, rotateY: 8 }}
          />

          <motion.button
            onClick={onEnterRoom}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-cyan-400 hover:bg-cyan-500 text-black px-6 py-3 rounded-full text-lg font-semibold transition-transform cursor-pointer shadow-lg"
          >
            Explore More
          </motion.button>
        </motion.section>
      </div>
    </section>
  );
}

interface TiltTextProps {
  text: string;
  className: string;
  initialTilt: { rotateX: number; rotateY: number };
}

function TiltText({ text, className, initialTilt }: TiltTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={className}
      animate={isHovered ? { rotateX: 0, rotateY: 0 } : initialTilt}
      whileHover={{ rotateX: 0, rotateY: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {text}
    </motion.div>
  );
}

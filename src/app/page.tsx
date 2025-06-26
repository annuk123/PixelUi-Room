'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Loader from '@/components/ Loader/Loader';
import HeroSection from '@/components/HeroSection/HeroSection';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [stage, setStage] = useState<'loading' | 'hero'>('loading');
  const router = useRouter();


  const handleLoadingComplete = () => {
    window.scrollTo(0, 0);
    setStage('hero');
  };

  const handleEnterExplore = () => {
    router.push('/explore'); // ⬅️ navigate to explore route directly
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a23] overflow-x-hidden">
      <div className="absolute inset-0 -z-10" />

      <AnimatePresence mode="wait">
        {stage === 'loading' && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Loader onComplete={handleLoadingComplete} />
          </motion.div>
        )}

        {stage === 'hero' && (
          <motion.main
            key="hero"
            className="flex min-h-screen items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1 }}
          >
            <HeroSection onEnterRoom={handleEnterExplore} />
          </motion.main>
        )}
      </AnimatePresence>


    </div>
  );
}

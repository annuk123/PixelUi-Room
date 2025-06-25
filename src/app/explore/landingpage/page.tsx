'use client';

import LandingPageHub from '@/ExplorePage/LandingPageHub';
import { motion } from 'framer-motion';

export default function ComponentPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-10 bg-[#0a0a23] text-white"
    >
      
      < LandingPageHub />
    </motion.main>
  );
}
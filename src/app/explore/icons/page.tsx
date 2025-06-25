'use client';

import IconHub from '@/ExplorePage/IconHub';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ComponentPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-10 bg-[#0a0a23] text-white"
    >
        <Link href="/explore">
  <div className="text-cyan-300 hover:underline mb-4 block">&larr; Back to Explore</div>
</Link>
      <IconHub />
    </motion.main>
  );
}
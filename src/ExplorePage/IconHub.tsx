'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CategoryFilter } from '@/components/IconHub/CategoryFilter';
import { IconGrid } from '@/components/IconHub/IconGrid';

export default function IconHub() {
  const [category, setCategory] = useState('All');

  return (
    <motion.section
      className="min-h-screen px-6 py-12 max-w-7xl mx-auto text-white space-y-10"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold text-cyan-400">PixelUI IconHub</h1>
        <p className="text-sm text-cyan-100">
          Copy, Download, and Use high-quality SVG, PNG, JPG icons for your product.
        </p>
      </div>

      <CategoryFilter selected={category} setSelected={setCategory} />
      <IconGrid category={category} />

      <div className="text-center mt-12">
        <p className="text-cyan-200">
          Want custom icons for your brand or app?{' '}
          <a href="/contact" className="underline hover:text-white">
            Contact me →
          </a>
        </p>
      </div>
    </motion.section>
  );
}

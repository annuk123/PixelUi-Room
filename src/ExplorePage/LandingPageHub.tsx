'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionCard } from './SectionCard';
import { landingPageData } from '@/components/LandingPages/landingPageData';

const categories = ['All', 'SaaS', 'Enterprise', 'Cybersecurity', 'Portfolio', 'Education'];

export default function LandingPageHub() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPages = selectedCategory === 'All'
    ? landingPageData
    : landingPageData.filter((page) => page.category === selectedCategory);

  return (
    <motion.section
      className="min-h-screen px-6 py-12 max-w-7xl mx-auto text-white space-y-10"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-cyan-400">Explore Landing Pages</h1>
        <p className="text-sm text-cyan-100">Clean and modern landing pages built with passion and precision.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedCategory === cat
                ? 'bg-cyan-500 text-black font-semibold'
                : 'border-cyan-600 text-cyan-300 hover:bg-cyan-700/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPages.map((page) => (
          <SectionCard key={page.title} {...page} />
        ))}
      </div>

      <div className="text-center mt-10">
        <p className="text-cyan-200">
          Want a fully custom landing page?{' '}
          <a href="/contact" className="underline hover:text-white">
            Contact me →
          </a>
        </p>
      </div>
    </motion.section>
  );
}

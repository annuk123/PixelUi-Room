'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SvgCard } from './SectionCard'; 
import { svgAssets } from '@/components/SVGHub/svg-data';

const svgCategories = ['All', 'Waves', 'Blobs', 'Dividers', 'Doodles', 'Background'];

export default function SVGHub() {
  const [selected, setSelected] = useState('All');

  const filteredSVGs = selected === 'All'
    ? svgAssets
    : svgAssets.filter((svg) => svg.category === selected);

  return (
    <motion.section
      className="min-h-screen px-6 py-12 max-w-7xl mx-auto text-white space-y-10"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold text-cyan-400">SVG Hub</h1>
        <p className="text-sm text-cyan-100">
          Explore and download SVG design assets for modern websites and apps.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {svgCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              selected === cat
                ? 'bg-cyan-500 text-black font-semibold'
                : 'border-cyan-600 text-cyan-300 hover:bg-cyan-700/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSVGs.map((svg) => (
          <SvgCard key={svg.title} {...svg} />
        ))}
      </div>

      <div className="text-center mt-10">
        <p className="text-cyan-200">
          Need custom SVG shapes for your landing page or UI?{' '}
          <a href="/contact" className="underline hover:text-white">
            Contact me →
          </a>
        </p>
      </div>
    </motion.section>
  );
}

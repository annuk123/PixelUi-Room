'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

const buttonStyles = [
  {
    label: 'Gradient',
    className: 'bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold hover:brightness-110 shadow-lg',
    category: 'saas',
  },
  {
    label: 'Neumorphism',
    className: 'bg-[#0a0a23] text-cyan-300 shadow-[8px_8px_15px_#060617,-8px_-8px_15px_#10103a] hover:shadow-inner',
    category: 'business',
  },
  {
    label: 'Glassmorphism',
    className: 'bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-md hover:scale-105 transition',
    category: 'saas',
  },
  {
    label: 'Outline Glow',
    className: 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black shadow-cyan-500/40 hover:shadow-md transition',
    category: 'blockchain',
  },
  {
    label: 'Soft Shadow',
    className: 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-md',
    category: 'enterprise',
  },
  {
    label: 'Sharp Corners',
    className: 'bg-yellow-400 text-black rounded-none font-semibold hover:brightness-110 shadow',
    category: 'cybersecurity',
  },
  {
    label: 'Pulse Hover',
    className: 'bg-indigo-500 text-white font-medium tracking-wide hover:animate-pulse shadow-md',
    category: 'gaming',
  },
  {
    label: 'Retro Pixel',
    className: 'bg-[#ff0055] text-white font-mono text-sm border-2 border-white shadow-[4px_4px_0px_#fff] hover:scale-105 transition-transform',
    category: 'gaming',
  },
  {
    label: 'Minimal',
    className: 'bg-transparent border border-gray-600 text-gray-400 hover:text-white shadow-inner',
    category: 'business',
  },
  {
    label: 'Custom Cyan',
    className: 'bg-cyan-800 hover:bg-cyan-600 text-white shadow-md',
    category: 'enterprise',
  },
  {
    label: 'Cyberpunk',
    className: 'bg-black border border-pink-500 text-pink-500 font-bold hover:bg-pink-500 hover:text-black shadow',
    category: 'cybersecurity',
  },
  {
    label: 'SaaS Primary',
    className: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md transition',
    category: 'saas',
  },
  {
    label: 'Gradient Border',
    className: 'relative text-white font-bold bg-black border border-transparent hover:brightness-110 shadow-md',
    category: 'saas',
  },
  {
    label: 'Floating Hover',
    className: 'bg-lime-500 text-black font-semibold shadow-md hover:-translate-y-1 transition-transform',
    category: 'business',
  },
  {
    label: 'Dark Hacker',
    className: 'bg-[#111] text-green-400 border border-green-400 font-mono hover:bg-green-400 hover:text-black shadow',
    category: 'cybersecurity',
  },
  {
    label: 'Futuristic Glass',
    className: 'bg-[#0a0a23]/30 border border-cyan-400/20 backdrop-blur-lg text-cyan-200 hover:scale-105 transition shadow-lg',
    category: 'blockchain',
  },
  {
    label: 'Bubble Pop',
    className: 'bg-pink-400 text-white font-bold rounded-full hover:scale-110 transition-all shadow-lg',
    category: 'gaming',
  },
  {
    label: 'Command Line',
    className: 'bg-[#000] text-[#0f0] font-mono border border-[#0f0] hover:bg-[#0f0] hover:text-black shadow',
    category: 'cybersecurity',
  },
  {
    label: '3D Push',
    className: 'bg-cyan-600 text-white border-b-[4px] border-cyan-800 active:translate-y-[2px] shadow-md',
    category: 'enterprise',
  },
  {
    label: 'Glass Cyan',
    className: 'bg-white/5 backdrop-blur-sm border border-cyan-500/30 text-cyan-200 hover:brightness-125 transition shadow-md',
    category: 'blockchain',
  },
];

type Props = {
  selectedCategory: string;
};

export default function ButtonShowcase({ selectedCategory }: Props) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (code: string, index: number) => {
    await navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const filteredButtons = selectedCategory === 'All'
    ? buttonStyles
    : buttonStyles.filter(btn => btn.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <motion.section
      id="buttons"
      className="space-y-8 scroll-mt-24"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-cyan-300 border-b border-cyan-800 pb-2">
        Buttons
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 bg-black/30 p-8 rounded-lg shadow-lg backdrop-blur-md border border-cyan-800">
        {filteredButtons.map(({ label, className }, index) => {
          const tailwindCode = `className="${className}"`;
          return (
            <div key={label + index} className="space-y-3">
              <button className={cn('px-5 py-2 rounded-xl', className)}>
                {label}
              </button>
              <div className="flex items-center justify-between bg-[#141436] px-3 py-2 rounded-md border border-cyan-800 text-sm">
                <code className="text-xs text-cyan-300 truncate max-w-[80%]">
                  {tailwindCode}
                </code>
                <button
                  onClick={() => handleCopy(tailwindCode, index)}
                  className="text-cyan-400 hover:text-white transition"
                  aria-label={`Copy Tailwind for ${label}`}
                >
                  {copiedIndex === index ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}

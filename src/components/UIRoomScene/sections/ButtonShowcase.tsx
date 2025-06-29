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
    category: 'enterprise',
  },
  {
    label: 'Gradient Border',
    className: 'relative text-white font-bold bg-black border border-transparent hover:brightness-110 shadow-md',
    category: 'enterprise',
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
  {
  label: 'Blockchain Neon',
  className: 'bg-gradient-to-tr from-[#0f0f0f] to-[#1a1a1a] border border-cyan-500 text-cyan-400 font-semibold hover:shadow-[0_0_10px_#00ffff,0_0_20px_#00ffff] transition-all duration-300',
  category: 'blockchain',
},
{
  label: 'Classic Blue',
  className: 'bg-[#1e3a8a] text-white font-medium py-2 px-4 rounded-md hover:bg-[#3b82f6] shadow-sm hover:shadow-md transition',
  category: 'classic',
},
{
  label: 'Aurora Glow',
  className: 'bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out',
  category: 'saas',
},
{
  label: 'Animated Border',
  className: 'relative text-white bg-black border border-transparent font-bold px-5 py-2 transition-all before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-r before:from-cyan-400 before:to-blue-500 before:blur-sm before:opacity-75 before:animate-pulse',
  category: 'blockchain',
},
{
  label: 'Elegant Shadow',
  className: 'bg-white text-black font-semibold shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_15px_rgba(0,0,0,0.2)] transition-all duration-300',
  category: 'classic',
},

{
  label: 'Hover Slide',
  className: 'relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:brightness-110 transition before:absolute before:inset-0 before:bg-white/10 before:translate-x-[-100%] hover:before:translate-x-full before:transition-transform before:duration-700',
  category: 'modern',
},
{
  label: 'Blockchain Circuit',
  className: 'bg-[#0a0a23] text-green-300 border border-green-300 font-mono shadow-[0_0_10px_#00ff88] hover:shadow-[0_0_20px_#00ff88,0_0_40px_#00ff88] transition-all duration-300',
  category: 'blockchain',
},
{
  label: 'Elegant Fade',
  className: 'bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium shadow-inner hover:shadow-lg hover:scale-105 transition duration-300',
  category: 'classic',
},
{
  label: 'Cyber Circuit',
  className: 'bg-black text-lime-400 font-mono border border-lime-500 shadow-[0_0_15px_lime] hover:bg-lime-500 hover:text-black hover:shadow-[0_0_25px_lime] transition-all duration-300',
  category: 'cybersecurity',
},
{
  label: 'Hover Morph',
  className: 'bg-[#1f1f1f] text-white font-semibold border border-gray-700 hover:rounded-full hover:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-500',
  category: 'modern',
},
{  label: 'Gradient Pulse',
  className: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-transform duration-300',
  category: 'saas',
},
{  label: 'Futuristic Neon',
  className: 'bg-black text-cyan-400 font-semibold border border-cyan-500 shadow-[0_0_10px_cyan] hover:shadow-[0_0_20px_cyan] hover:scale-105 transition-all duration-300',
  category: 'cybersecurity',
},
{  label: 'Gradient Wave',
  className: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-transform duration-300',
  category: 'saas',
},
  {
    label: 'Minimalist Outline',
    className: 'border-2 border-gray-600 text-gray-400 font-medium py-2 px-4 rounded-md hover:bg-gray-600 hover:text-white shadow-sm transition-all duration-300',
    category: 'classic',
  },
  {
    label: 'Cyberpunk Neon',
    className: 'bg-black text-pink-500 font-bold border border-pink-500 shadow-[0_0_10px_pink] hover:shadow-[0_0_20px_pink] hover:scale-105 transition-all duration-300',
    category: 'cybersecurity',
  },
  {
    label: 'Gradient Shift',
    className: 'bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-teal-500/50 hover:scale-105 transition-transform duration-300',
    category: 'saas',
  },
  {
    label: 'Elegant Glass',
    className: 'bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium py-2 px-4 rounded-lg shadow-lg hover:bg-white/20 transition-all duration-300',
    category: 'classic',
  },
  { label: 'Cyber Circuitry',
    className: 'bg-[#0a0a23] text-green-300 font-mono border border-green-300 shadow-[0_0_10px #00ff88] hover:shadow-[0_0_20px #00ff88,0_0_40px #00ff88] transition-all duration-300',
    category: 'blockchain',
  },
  {
    label: 'Soft Glow',
    className: 'rounded-full font-semibold text-white bg-gradient-to-r from-fuchsia-500 to-cyan-500 shadow-lg hover:shadow-fuchsia-500/50 overflow-hidden group transition-transform duration-300',
    category: 'modern',
  },
  {
    label: 'Cyber Circuitry',
    className: 'bg-[#0a0a23] text-green-300 font-mono border border-green-300 shadow-[0_0_10px #00ff88] hover:shadow-[0_0_20px #00ff88,0_0_40px #00ff88] transition-all duration-300',
    category: 'blockchain',
  }
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 bg-black/30 p-8 rounded-lg shadow-lg backdrop-blur-md border border-cyan-800">
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

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type Props = {
  selectedCategory: string;
};

const inputStyles = [
  {
    label: 'Simple Input',
    className: '',
    category: 'all',
  },
  {
    label: 'Cyan Focus',
    className: 'border border-cyan-400 focus:ring-2 focus:ring-cyan-300 transition',
    category: 'saas',
  },
  {
    label: 'Dark Input',
    className: 'bg-[#1f1f3d] text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-400',
    category: 'enterprise',
  },
  {
    label: 'Rounded Input',
    className: 'rounded-full px-6 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300',
    category: 'business',
  },
  {
    label: 'Outlined Hacker',
    className: 'bg-black text-green-400 font-mono border border-green-500 focus:ring-green-300 focus:outline-none',
    category: 'cybersecurity',
  },
  {
    label: 'Soft Shadow',
    className: 'bg-white text-black shadow-inner px-4 py-2 rounded-md border border-gray-300 focus:shadow focus:outline-none',
    category: 'saas',
  },
  {
    label: 'Glassmorphism Input',
    className: 'bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-sm px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300',
    category: 'blockchain',
  },
  {
    label: 'Neon Gaming',
    className: 'bg-[#0f0f0f] text-pink-500 border border-pink-500 font-mono focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-[0_0_10px_#ff00ff]',
    category: 'gaming',
  },
  {
    label: 'Classic Gray',
    className: 'bg-white text-black border border-gray-300 rounded-sm px-3 py-2 focus:ring-2 focus:ring-gray-400',
    category: 'classic',
  },
  {
    label: 'Finance Glow',
    className: 'bg-white text-green-700 border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 font-medium shadow-sm',
    category: 'finance',
  },
  {
    label: 'E-commerce Slick',
    className: 'bg-white border border-zinc-300 rounded-md shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400',
    category: 'e-commerce',
  },
  {
    label: 'Edu Minimal',
    className: 'bg-gray-50 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400',
    category: 'education',
  },
  {
    label: 'Health Pulse',
    className: 'bg-white border border-pink-300 text-pink-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all',
    category: 'health',
  },
  {
    label: 'Social Glow',
    className: 'bg-[#1DA1F2] text-white border border-transparent px-4 py-2 rounded-md shadow hover:brightness-110 focus:ring-2 focus:ring-blue-300',
    category: 'social media',
  },
  {
    label: 'Travel Breeze',
    className: 'bg-gradient-to-r from-blue-100 to-teal-100 border border-blue-200 text-blue-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300',
    category: 'travel',
  },
  {
  label: 'Cyberpunk Terminal',
  className: 'bg-black text-lime-400 font-mono border border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-500 shadow-[0_0_10px_#a6f750]',
  category: 'cybersecurity',
},
{
  label: 'Sleek Blue',
  className: 'bg-blue-50 text-blue-800 border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400',
  category: 'business',
},
{
  label: 'Gradient Neon',
  className: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md px-4 py-2 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-purple-300 transition-all',
  category: 'gaming',

},
{
  label: 'Luxury Dark',
  className: 'bg-gradient-to-br from-gray-900 to-gray-800 text-white border border-gray-600 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-600',
  category: 'finance',
},
{
  label: 'Bubble Pop',
  className: 'bg-pink-100 text-pink-700 rounded-full px-5 py-2 border border-pink-300 shadow-inner hover:shadow-md focus:ring-2 focus:ring-pink-300 transition-all',
  category: 'gaming',
},
{
  label: 'Clean White',
  className: 'bg-white text-black border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300',
  category: 'business',
},
{
  label: 'Futuristic Circuit',
  className: 'bg-[#0a0a23] text-cyan-300 border border-cyan-400 shadow-[inset_0_0_8px_#00ffff55] focus:outline-none focus:ring-2 focus:ring-cyan-500',
  category: 'blockchain',
},
{
  label: 'Skyline Gradient',
  className: 'bg-gradient-to-r from-cyan-100 to-blue-100 text-blue-800 border border-blue-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-cyan-400',
  category: 'travel',
},
{
  label: 'Soft Peach',
  className: 'bg-pink-50 text-gray-700 border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300',
  category: 'health',
},
{
  label: 'Modern Minimal',
  className: 'bg-transparent border-b-2 border-gray-400 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition',
  category: 'classic',
},

{
  label: 'Elegant Glass White',
  className: 'bg-white/5 text-white backdrop-blur-xl border border-white/20 rounded-md px-4 py-2 focus:ring-2 focus:ring-white/40 shadow-sm',
  category: 'enterprise',
},
{
  label: 'Edu Typing Bar',
  className: 'bg-gray-100 text-gray-800 font-medium border-b-2 border-indigo-300 px-4 py-2 focus:outline-none focus:border-indigo-500 transition-colors',
  category: 'education',
},
  {
    label: 'Social Media Input',
    className: 'bg-[#1DA1F2] text-white border border-transparent rounded-md px-4 py-2 shadow hover:brightness-110 focus:ring-2 focus:ring-blue-300',
    category: 'social media',
  },
  {
    label: 'E-commerce Cart Input',
    className: 'bg-white text-gray-800 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400',
    category: 'e-commerce',
  },
  { label: 'Travel Booking Input',
    className: 'bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700 border border-blue-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300',
    category: 'travel',
  },
  { label: 'Finance Dashboard Input',
    className: 'bg-white text-green-700 border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 font-medium shadow-sm',
//    category: 'finance',
  category: 'finance',
  },
  { label: 'Health Tracker Input',
    className: 'bg-white text-pink-500 border border-pink-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 <focus:ring-pink-400></focus:ring-pink-400>',
    category: 'health',
  },
  { label: 'Gaming Leaderboard Input',
    className: 'bg-[#0f0f0f] text-pink-500 border border-pink-500 font-mono focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-[0_0_10px_#ff00ff]',
//    category: 'gaming',
  category: 'gaming',
  },


];


export default function InputShowcase({ selectedCategory }: Props) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (code: string, index: number) => {
    await navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const filteredInputs =
    selectedCategory === 'All'
      ? inputStyles
      : inputStyles.filter((input) =>
          input.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <motion.section
      id="inputs"
      className="space-y-8 scroll-mt-24"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-cyan-300 border-b border-cyan-800 pb-2">
        Inputs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 bg-black/30 p-8 rounded-lg shadow-lg backdrop-blur-md border border-cyan-800">
        {filteredInputs.map(({ label, className }, index) => {
          const tailwindCode = `className="${className}"`;
          return (
            <div key={label + index} className="space-y-3">
              <Input
                className={cn(className)}
                placeholder={label}
              />
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

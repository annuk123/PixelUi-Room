'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Switch } from '@/components/ui/switch';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
  selectedCategory: string;
};

const switchStyles = [
  {
    label: 'Default',
    className: '',
    category: 'all',
  },
  {
    label: 'Large Scale',
    className: 'scale-125',
    category: 'enterprise',
  },
  {
    label: 'Outline Glow',
    className: 'ring-2 ring-cyan-400 hover:ring-4 transition duration-300',
    category: 'blockchain',
  },
  {
    label: 'Rounded Shadow',
    className: 'rounded-full shadow-lg bg-cyan-500 data-[state=unchecked]:bg-gray-700',
    category: 'enterprise',
  },
  {
    label: 'Hacker Style',
    className: 'bg-black text-green-400 font-mono border border-green-500 hover:bg-green-600 transition-all',
    category: 'cybersecurity',
  },
  {
    label: 'Soft Glass',
    className: 'bg-white/10 backdrop-blur-md border border-white/20 shadow-sm transition',
    category: 'enterprise',
  },
  {
    label: 'Neon Gaming',
    className: 'bg-[#0f0f0f] text-pink-500 border border-pink-500 font-mono shadow-[0_0_10px_#ff00ff] transition-all',
    category: 'gaming',
  },
  {
    label: 'Classic Gray',
    className: 'bg-gray-200 data-[state=checked]:bg-gray-900 border border-gray-400 rounded-sm transition',
    category: 'classic',
  },
  {
    label: 'Finance Glow',
    className: 'bg-green-100 data-[state=checked]:bg-green-500 text-green-800 shadow-inner ring-1 ring-green-400 transition-all',
    category: 'finance',
  },
  {
    label: 'E-commerce Shine',
    className: 'bg-white data-[state=checked]:bg-yellow-400 shadow-lg border border-yellow-300 transition-all',
    category: 'e-commerce',
  },
  {
    label: 'Edu Friendly',
    className: 'bg-indigo-100 data-[state=checked]:bg-indigo-600 shadow focus:ring-2 focus:ring-indigo-300 transition-all',
    category: 'education',
  },
  {
    label: 'Health Soft',
    className: 'bg-pink-200 data-[state=checked]:bg-pink-500 border border-pink-300 shadow-sm transition-all',
    category: 'health',
  },
  {
    label: 'Social Bright',
    className: 'bg-[#1DA1F2]/20 data-[state=checked]:bg-[#1DA1F2] shadow ring-1 ring-[#1DA1F2] transition-all',
    category: 'social media',
  },
  {
    label: 'Travel Breeze',
    className:
      'bg-gradient-to-r from-teal-200 to-blue-200 data-[state=checked]:from-blue-500 data-[state=checked]:to-teal-500 shadow transition-all',
    category: 'travel',
  },
  {
    label: 'Cyber Pulse',
    className: 'bg-green-500 data-[state=unchecked]:bg-black shadow-[0_0_10px_#0f0] transition-all',
    category: 'cybersecurity',
  },

  {
    label: 'Glass Toggle',
    className: 'bg-white/10 backdrop-blur-md border border-white/30 shadow-inner transition',
    category: 'business',
  },
  {
    label: 'Sleek Blue',
    className: 'bg-blue-50 text-blue-800 border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition',
    category: 'business',
  },
  {
    label: 'Elegant Glass White',
    className: 'bg-white/5 text-white backdrop-blur-xl border border-white/20 rounded-md px-4 py-2 focus:ring-2 focus:ring-white/40 shadow-sm',
    category: 'enterprise',
  },
  {
    label: 'Edu Typing Bar',
    className: 'bg-gray-100 data-[state=checked]:bg-gray-800 text-gray-900 data-[state=checked]:text-white shadow-sm rounded-md transition-all',
    category: 'education',
  },
  {
    label: 'Retro Pixel',
    className: 'bg-[#ff0055] border border-white shadow-[4px_4px_0px_#fff] scale-110 data-[state=unchecked]:bg-gray-700',
    category: 'gaming',
  },
  {
    label: 'Classic Toggle',
    className: 'bg-gray-200 data-[state=checked]:bg-gray-900 border border-gray-400 rounded-sm transition',
    category: 'classic',
  },
  {
    label: 'Finance Neon',
    className: 'bg-green-100 data-[state=checked]:bg-green-500 text-green-800 shadow-inner ring-1 ring-green-400',
    category: 'finance',
  },
  {
    label: 'E-commerce Glow',
    className: 'bg-white data-[state=checked]:bg-yellow-400 shadow-lg border border-yellow-300',
    category: 'e-commerce',
  },
  {
    label: 'Edu Friendly',
    className: 'bg-indigo-100 data-[state=checked]:bg-indigo-600 shadow focus:ring-2 focus:ring-indigo-300',
    category: 'education',
  },
  {
    label: 'Health Soft',
    className: 'bg-pink-200 data-[state=checked]:bg-pink-500 border border-pink-300 shadow-sm',
    category: 'health',
  },
  {
    label: 'Social Bright',
    className: 'bg-[#1DA1F2]/20 data-[state=checked]:bg-[#1DA1F2] shadow ring-1 ring-[#1DA1F2]',
    category: 'social media',
  },
  {
    label: 'Travel Breeze',
    className: 'bg-gradient-to-r from-teal-200 to-blue-200 data-[state=checked]:from-blue-500 data-[state=checked]:to-teal-500 shadow transition-all',
    category: 'travel',
  },
  {
    label: 'Custom Style',
    className: 'bg-purple-500 data-[state=checked]:bg-purple-700 shadow-lg rounded-full transition-all',
    category: 'classic',
  },
  {
    label: 'Minimalist',
    className: 'bg-gray-100 data-[state=checked]:bg-gray-800 text-gray-900 data-[state=checked]:text-white shadow-sm rounded-md transition-all',
    category: 'classic',
  },
  {
    label: 'Dark Mode',
    className: 'bg-gray-900 data-[state=checked]:bg-gray-700 text-white shadow-md rounded-md transition-all',
    category: 'enterprise',
  },
  {
    label: 'Light Mode',
    className: 'bg-white data-[state=checked]:bg-gray-200 text-black shadow-sm rounded-md transition-all',
    category: 'gaming',
  },
  {
    label: 'Gradient Toggle',
    className: 'bg-gradient-to-r from-purple-500 to-pink-500 data-[state=checked]:from-pink-500 data-[state=checked]:to-purple-500',
    category: 'classic',
  },
];


export default function SwitchShowcase({ selectedCategory }: Props) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (code: string, index: number) => {
    await navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const filteredSwitches =
    selectedCategory === 'All'
      ? switchStyles
      : switchStyles.filter(
          (sw) => sw.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <motion.section
      id="switches"
      className="space-y-8 scroll-mt-24"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-cyan-300 border-b border-cyan-800 pb-2">
        Switches
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 bg-black/30 p-8 rounded-lg shadow-lg backdrop-blur-md border border-cyan-800">
        {filteredSwitches.map(({ label, className }, index) => {
          const tailwindCode = `className="${className}"`;
          return (
            <div key={label + index} className="space-y-3">
              <div className="flex items-center gap-3">
                <Switch className={cn(className)} defaultChecked />
                <span className="text-sm text-cyan-100">{label}</span>
              </div>
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

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
    className: 'border-cyan-400 focus:ring-cyan-300',
    category: 'saas',
  },
  {
    label: 'Dark Input',
    className: 'bg-[#1f1f3d] text-white',
    category: 'enterprise',
  },
  {
    label: 'Rounded Input',
    className: 'rounded-full px-6',
    category: 'business',
  },
  {
    label: 'Outlined Hacker',
    className: 'bg-black text-green-400 font-mono border border-green-500',
    category: 'cybersecurity',
  },
  {
    label: 'Soft Shadow',
    className: 'bg-white shadow-inner text-black',
    category: 'saas',
  },
  {
    label: 'Glassmorphism Input',
    className: 'bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-sm',
    category: 'blockchain',
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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

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
    category: 'saas',
  },
  {
    label: 'Outline Glow',
    className: 'ring-2 ring-cyan-400 hover:ring-4 transition',
    category: 'blockchain',
  },
  {
    label: 'Rounded Shadow',
    className: 'shadow-lg rounded-full bg-cyan-500 data-[state=unchecked]:bg-gray-700',
    category: 'enterprise',
  },
  {
    label: 'Cyber Pulse',
    className: 'bg-green-500 shadow-[0_0_10px_#0f0] data-[state=unchecked]:bg-black',
    category: 'cybersecurity',
  },
  {
    label: 'Glass Toggle',
    className: 'bg-white/10 backdrop-blur-md border border-white/30 shadow-inner',
    category: 'business',
  },
  {
    label: 'Retro Pixel',
    className: 'bg-[#ff0055] border border-white shadow-[4px_4px_0px_#fff] scale-110',
    category: 'gaming',
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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

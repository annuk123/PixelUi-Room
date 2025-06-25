'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
  selectedCategory: string;
};

const tabVariants = [
  {
    label: 'Default Tabs',
    className: '',
    category: 'all',
  },
  {
    label: 'Cyan Border Tabs',
    className: 'border-b-2 border-cyan-400 text-cyan-300 data-[state=active]:text-white',
    category: 'saas',
  },
  {
    label: 'Dark Shadow Tabs',
    className: 'bg-[#1a1a2e] text-white shadow-inner rounded-md px-4 py-1',
    category: 'enterprise',
  },
  {
    label: 'Glassmorphism',
    className: 'bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-md',
    category: 'blockchain',
  },
  {
    label: 'Neon Hacker',
    className: 'text-green-400 border-b-2 border-green-400 data-[state=active]:bg-green-400 data-[state=active]:text-black font-mono',
    category: 'cybersecurity',
  },
  {
    label: 'Retro Pixel',
    className: 'bg-[#ff0055] text-white font-mono shadow-[4px_4px_0px_#fff] rounded-none',
    category: 'gaming',
  },
];

export default function TabsShowcase({ selectedCategory }: Props) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (code: string, index: number) => {
    await navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const filteredTabs =
    selectedCategory === 'All'
      ? tabVariants
      : tabVariants.filter((tab) => tab.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <motion.section
      id="tabs"
      className="space-y-8 scroll-mt-24"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-cyan-300 border-b border-cyan-800 pb-2">
        Tabs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredTabs.map(({ label, className }, index) => {
          const code = `TabsTrigger className="${className}"`;
          return (
            <div key={label + index} className="space-y-3">
              <Tabs defaultValue="tab1">
                <TabsList className="flex gap-2">
                  <TabsTrigger value="tab1" className={cn(className)}>
                    Tab One
                  </TabsTrigger>
                  <TabsTrigger value="tab2" className={cn(className)}>
                    Tab Two
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                  <p className="text-sm text-gray-300 mt-3">
                    You&apos;re viewing tab one content.
                  </p>
                </TabsContent>
                <TabsContent value="tab2">
                  <p className="text-sm text-gray-300 mt-3">
                    You&apos;re viewing tab two content.
                  </p>
                </TabsContent>
              </Tabs>

              <div className="flex items-center justify-between bg-[#141436] px-3 py-2 rounded-md border border-cyan-800 text-sm">
                <code className="text-xs text-cyan-300 truncate max-w-[80%]">
                  {code}
                </code>
                <button
                  onClick={() => handleCopy(code, index)}
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

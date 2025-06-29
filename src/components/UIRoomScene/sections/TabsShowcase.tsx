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
    className: 'bg-cyan-950/30 backdrop-blur-md text-cyan-300 border border-cyan-500/30 rounded-md data-[state=active]:text-white',
    category: 'blockchain',
  },
  {
    label: '3d Tabs',
    className: 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md rounded-md px-4 py-1',
    category: 'gaming',
  },
  {
    label: 'Soft Blue Tabs',
    className: 'text-blue-300 border-b-2 border-blue-300 data-[state=active]:bg-blue-300 data-[state=active]:text-black rounded-md px-3 py-1',
    category: 'web development',
  },
  {
    label: 'Neon Glow',
    className: 'text-pink-400 border-b-2 border-pink-400 data-[state=active]:bg-pink-400 data-[state=active]:text-black font-bold',
    category: 'design',
  },
  {
    label: 'Minimalist Tabs',
    className: 'text-gray-300 border-b-2 border-gray-600 data-[state=active]:bg-gray-700 data-[state=active]:text-white rounded-md px-3 py-1',
    category: 'minimalist',
  },
  {
    label: 'Bold Red Tabs',
    className: 'text-red-500 border-b-2 border-red-500 data-[state=active]:bg-red-500 data-[state=active]:text-white font-semibold',
    category: 'marketing',
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
  {
    label: 'Classic Line',
    className: 'text-gray-400 border-b border-gray-500 data-[state=active]:text-white data-[state=active]:border-b-2',
    category: 'classic',
  },
  {
    label: 'Finance Glow',
    className: 'text-green-300 border-b-2 border-green-300 data-[state=active]:bg-green-300 data-[state=active]:text-black shadow-md',
    category: 'finance',
  },
  {
    label: 'Ecom Highlight',
    className: 'text-yellow-500 border-b-2 border-yellow-500 data-[state=active]:bg-yellow-400 data-[state=active]:text-black',
    category: 'e-commerce',
  },
  {
    label: 'Edu Tabs',
    className: 'text-indigo-300 data-[state=active]:bg-indigo-600 data-[state=active]:text-white rounded-md px-3 py-1 transition',
    category: 'education',
  },
  {
    label: 'Health Soft',
    className: 'text-pink-400 border-b-2 border-pink-300 data-[state=active]:bg-pink-500 data-[state=active]:text-white rounded-t-md',
    category: 'health',
  },
  {
    label: 'Social Bold',
    className: 'text-[#1DA1F2] border-b-2 border-[#1DA1F2] data-[state=active]:bg-[#1DA1F2] data-[state=active]:text-black font-semibold',
    category: 'social media',
  },
  {
    label: 'Travel Sky',
    className: 'bg-gradient-to-r from-teal-600 to-blue-600 text-white data-[state=active]:brightness-125 rounded-md px-4 py-1',
    category: 'travel',
  },
  {
  label: 'Gradient Glow',
  className: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md data-[state=active]:brightness-125 rounded-md px-4 py-1',
  category: 'saas',
},
{
  label: 'Blue Shadow Tabs',
  className: 'bg-blue-900 text-cyan-300 shadow-[0_2px_8px_rgba(0,255,255,0.2)] data-[state=active]:bg-blue-700 data-[state=active]:text-white rounded-md px-4 py-1',
  category: 'enterprise',
},
{
  label: '3D Lift',
  className: 'bg-indigo-600 text-white shadow-[0_4px_0_rgba(0,0,0,0.4)] data-[state=active]:translate-y-[2px] transition-all rounded-sm px-3 py-1',
  category: 'gaming',
},
{
  label: 'Frosted Green',
  className: 'bg-green-900/50 backdrop-blur-lg border border-green-400/30 text-green-200 shadow-inner rounded-md data-[state=active]:text-white',
  category: 'health',
},
{
  label: 'Soft Yellow Glow',
  className: 'bg-yellow-700 text-yellow-200 shadow-[0_0_12px_rgba(255,255,0,0.3)] data-[state=active]:bg-yellow-500 data-[state=active]:text-black rounded-full px-4 py-1',
  category: 'e-commerce',
},
{
  label: 'Royal Gradient',
  className: 'bg-gradient-to-br from-purple-700 to-indigo-800 text-indigo-200 data-[state=active]:text-white shadow-lg rounded-md',
  category: 'education',
},
{
  label: 'Moonlight Tabs',
  className: 'bg-[#0b1120] text-blue-400 shadow-[inset_0_-2px_6px_rgba(0,0,0,0.6)] data-[state=active]:bg-[#1e293b] data-[state=active]:text-white rounded-md',
  category: 'classic',
},
{
  label: 'Vibrant Gradient',
  className: 'bg-gradient-to-tr from-pink-500 via-yellow-400 to-red-500 text-black shadow-md data-[state=active]:scale-105 transition-transform rounded-md',
  category: 'social media',
},
{
  label: 'Sunset Tabs',
  className: 'bg-gradient-to-r from-orange-600 to-pink-500 text-white shadow-[0_2px_6px_rgba(255,100,100,0.4)] data-[state=active]:brightness-125 rounded-md px-4 py-1',
  category: 'travel',
},
{
  label: 'Ocean Wave',
  className: 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg data-[state=active]:bg-teal-400 data-[state=active]:text-black rounded-md px-4 py-1',
  category: 'blockchain',
},
{
  label: 'Teal Glow',
  className: 'bg-teal-700 text-white border border-teal-500 shadow-[0_0_10px_#14b8a6] data-[state=active]:bg-teal-500 data-[state=active]:text-black rounded-md px-3 py-1',
  category: 'finance',
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 bg-black/30 p-8 rounded-lg shadow-lg backdrop-blur-md border border-cyan-800">
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

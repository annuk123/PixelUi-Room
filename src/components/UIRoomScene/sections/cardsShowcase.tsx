'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy } from 'lucide-react';
import { cardVariants } from "@/data/cardVariants"; // adjust path if needed


type Props = {
  selectedCategory: string;
};




export default function CardShowcase({ selectedCategory }: Props) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (code: string, index: number) => {
    await navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };


    let filteredCards = cardVariants.filter((card) => card.category.toLowerCase() === selectedCategory.toLowerCase());
    if (selectedCategory === 'All') {
      filteredCards = cardVariants;

    }
    


    function downloadAsFile(filename: string, code: string): void {
        const blob = new Blob([code], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
  return (
    <motion.section
      id="tabs"
      className="space-y-8 scroll-mt-24"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredCards.map((card, index) => (
    <div key={index} className="bg-[#0b1120] border border-cyan-800 p-4 rounded-lg shadow-lg space-y-4">
      <card.Component />

      <div className="flex justify-between items-center text-sm text-gray-400">
        <span className='mt-3'>{card.label}</span>
        <div className="flex gap-2">
          <button
            onClick={() => handleCopy(card.code, index)}
            className="hover:text-cyan-400 transition mt-3"
          >
            {copiedIndex === index ? <Check size={16} /> : <Copy size={16} />}
            Copy
          </button>

          <button
            onClick={() => downloadAsFile(`${card.label}.jsx`, card.code)}
            className="hover:text-cyan-400 transition mt-3"
          >
           ⬇️
           <p> Download</p>
          </button>
        </div>
      </div>
    </div>
  ))}
</div>



    </motion.section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SvgPreviewCard from "@/components/SVGHub/SvgPreviewCard";
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import RandomParticles from '@/components/HeroSection/RandomParticles/RandomParticles';
const svgDividers = [
  {
    id: "wave-top-1",
    label: "Wavy Top 1",
    svg: `<svg class='w-full h-auto' viewBox='0 0 1440 320'><path fill='#06b6d4' d='M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,197.3C672,192,768,128,864,106.7C960,85,1056,107,1152,128C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'></path></svg>`,
    type: "top",
    tags: ["wave", "top", "blue"],
  },
  {
    id: "wave-bottom-1",
    label: "Wavy Bottom 1",
    svg: `<svg class='w-full h-auto' viewBox='0 0 1440 320'><path fill='#3b82f6' d='M0,32L48,69.3C96,107,192,181,288,192C384,203,480,149,576,117.3C672,85,768,75,864,80C960,85,1056,107,1152,106.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path></svg>`,
    type: "bottom",
    tags: ["wave", "bottom", "blue"],
  },
  {
    id: "blob-1",
    label: "Blob Divider",
    svg: `<svg class='w-full h-auto' viewBox='0 0 1440 320'><path fill='#f59e0b' fill-opacity='1' d='M0,160L40,176C80,192,160,224,240,240C320,256,400,256,480,229.3C560,203,640,149,720,138.7C800,128,880,160,960,176C1040,192,1120,192,1200,186.7C1280,181,1360,171,1400,165.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'></path></svg>`,
    type: "bottom",
    tags: ["blob", "yellow", "creative"],
  },
  {
    id: "mountain-1",
    label: "Mountain View",
    svg: `<svg class='w-full h-auto' viewBox='0 0 1440 320'><path fill='#0f766e' fill-opacity='1' d='M0,224L80,213.3C160,203,320,181,480,176C640,171,800,181,960,192C1120,203,1280,213,1360,218.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'></path></svg>`,
    type: "top",
    tags: ["mountain", "top", "green"],
  },
  
  {
    id: "diagonal-slice",
    label: "Diagonal Slice",
    svg: `<svg class='w-full h-auto' viewBox='0 0 1440 320'><path fill='#4f46e5' d='M0,32L1440,288L1440,0L0,0Z'></path></svg>`,
    type: "top",
    tags: ["diagonal", "top", "purple"],
  },
  {
    id: "spikes",
    label: "Sharp Spikes",
    svg: `<svg class='w-full h-auto' viewBox='0 0 1440 320'><path fill='#e11d48' d='M0,64L60,90.7C120,117,240,171,360,165.3C480,160,600,96,720,101.3C840,107,960,181,1080,197.3C1200,213,1320,171,1380,149.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'></path></svg>`,
    type: "bottom",
    tags: ["sharp", "bottom", "red"],
  },
  {
    id: "abstract-1",
    label: "Abstract Shape",
    svg: `<svg class='w-full h-auto' viewBox='0 0 1440 320'><path fill='#8b5cf6' d='M0,128L40,138.7C80,149,160,171,240,186.7C320,203,400,213,480,186.7C560,160,640,96,720,80C800,64,880,96,960,128C1040,160,1120,192,1200,186.7C1280,181,1360,139,1400,128L1440,117.3L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z'></path></svg>`,
    type: "bottom",
    tags: ["abstract", "bottom", "purple"],
  },
  {
    id: "zigzag-1",
    label: "Zigzag Divider",
    svg: `<svg class='w-full h-auto' viewBox='0 0 1440 320'><path fill='#f43f5e' d='M0,64L40,85.3C80,107,160,149,240,165.3C320,181,400,171,480,165.3C560,160,640,160,720,165.3C800,171,880,181,960,170.7C1040,160,1120,128,1200,117.3C1280,107,1360,117,1400,122.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'></path></svg>`,
    type: "top",
    tags: ["zigzag", "top", "pink"],
  },
  {
    id: "blob-2",
    label: "Blob Shape",
    svg: `<svg class='w-full h-auto' viewBox='0 0 1440 320'><path fill='#fbbf24' d='M0,128L40,138.7C80,149,160,171,240,186.7C320,203,400,213,480,186.7C560,160,640,96,720,80C800,64,880,96,960,128C1040,160,1120,192,1200,186.7C1280,181,1360,139,1400,128L1440,117.3L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z'></path></svg>`,
    type: "bottom",
    tags: ["blob", "bottom", "yellow"],
  },
   {
    label: "Wave Divider",
    svg: `<svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"><path fill="#0ea5e9" fill-opacity="1" d="M0,96L48,85.3C96,75,192,53,288,80C384,107,480,181,576,181.3C672,181,768,107,864,80C960,53,1056,75,1152,96C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>`,
    tags: ["wave", "divider", "blue"],
  },
  {
    label: "Zigzag Divider",
    svg: `<svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg"><path fill="#6366f1" fill-opacity="1" d="M0,64L60,80C120,96,240,128,360,128C480,128,600,96,720,74.7C840,53,960,43,1080,48C1200,53,1320,75,1380,85.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>`,
    tags: ["zigzag", "divider", "purple"],
  },
  {
    label: "Mountains-1",
    svg: `<svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"><path fill="#14b8a6" d="M0,192L80,170.7C160,149,320,107,480,117.3C640,128,800,192,960,213.3C1120,235,1280,213,1360,202.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>`,
    tags: ["mountains", "divider", "green"],
  },
  {
    label: "Blob Top",
    svg: `<svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"><path fill="#9333ea" fill-opacity="1" d="M0,0L80,10.7C160,21,320,43,480,64C640,85,800,107,960,96C1120,85,1280,43,1360,21.3L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>`,
    tags: ["blob", "top", "purple"],
  },
  {
    label: "Blob Bottom",
    svg: `<svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"><path fill="#06b6d4" fill-opacity="1" d="M0,288L80,272C160,256,320,224,480,197.3C640,171,800,149,960,133.3C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>`,
    tags: ["blob", "bottom", "blue"],
  },
  {
    label: "Peaks",
    svg: `<svg viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg"><path fill="#e11d48" fill-opacity="1" d="M0,64L60,90.7C120,117,240,171,360,165.3C480,160,600,96,720,69.3C840,43,960,53,1080,74.7C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>`,
    tags: ["peaks", "divider", "red"],
  },
  {
    label: "Skewed Wave",
    svg: `<svg viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg"><path fill="#f59e0b" d="M0,32L1440,160L1440,320L0,320Z"></path></svg>`,
    tags: ["skewed", "wave", "orange"],
  },
  {
    label: "Tilt Slice",
    svg: `<svg viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg"><path fill="#10b981" d="M0,160L1440,0V320H0Z"></path></svg>`,
    tags: ["tilt", "slice", "green"],
  },
  {
    label: "Double Peaks",
    svg: `<svg viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg"><path fill="#8b5cf6" d="M0,64L60,80C120,96,240,128,360,138.7C480,149,600,139,720,112C840,85,960,43,1080,42.7C1200,43,1320,85,1380,106.7L1440,128V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>`,
    tags: ["double", "peaks", "purple"],
  },
  {
    label: "Curved Line",
    svg: `<svg viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg"><path fill="#0f172a" fill-opacity="1" d="M0,160C120,120,360,40,600,90C840,140,1080,220,1320,190L1440,160V0H0Z"></path></svg>`,
    tags: ["curved", "line", "black"],
  },

];

export default function SvgPageDividers() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? svgDividers
      : svgDividers.filter((div) => div.tags.includes(filter));

  return (

         <div className="relative w-full min-h-screen overflow-x-hidden bg animated-gradient-bg">
                  {/* Background Canvas */}
                  <div className="fixed inset-0 z-0 pointer-events-none">
                    <Canvas
                      camera={{ position: [0, 0, 10], fov: 75 }}
                      gl={{ alpha: true }}
                    >
                      <Suspense fallback={null}>
                        <RandomParticles />
                      </Suspense>
                    </Canvas>
                  </div>
            
                  {/* Scrollable Main Content */}
                  <main className="relative z-10 px-4 pt-24 pb-32 bg-black/30 backdrop-blur text-white min-h-screen">
<section className="py-16 px-6 max-w-7xl mx-auto">
      <motion.h1
        className="text-4xl font-bold text-cyan-400 text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        SVG Page Dividers
      </motion.h1>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {["all", "top", "bottom", "wave", "blob", "diagonal", "sharp", "mountain", "peaks", "skewed", "tilt", "double", "curved", "zigzag"].map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-4 py-1 text-sm rounded-full border transition-all duration-300 ${
              filter === tag
                ? "bg-cyan-500 text-black"
                : "text-cyan-400 border-cyan-400 hover:bg-cyan-700/20"
            }`}
          >
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </button>
        ))}
      </div>

      {/* Divider Preview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((svg) => (
          <SvgPreviewCard key={svg.id} svgData={svg} />
        ))}
      </div>
    </section>
    </main>
    </div>
  );
}
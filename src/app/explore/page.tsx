'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';;
import RandomParticles from '@/components/HeroSection/RandomParticles/RandomParticles';
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import FeedbackSection from '@/components/FeedBackComponenet/Feedback';

const sections = [
  { href: '/explore/uicomponents', title: 'UI Components', description: 'Buttons, Inputs, Tabs, Cards...' },
  { href: '/explore/landingpage', title: 'Landing Pages', description: 'Fully designed responsive pages' },
  { href: '/explore/icons', title: 'Icon Sets', description: 'SVG, PNG, JPG icons for every domain' },
  { href: '/explore/svg', title: 'SVG Page Dividers', description: 'Wavy, blob, fancy background SVGs' },
];

export default function ExplorePage() {

    const feedback = useQuery(api.feedback.getAllFeedback);
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight">
            Pixel<span className="text-blue-500">UI</span> Roo
            <span className="text-blue-500">m</span> 
          </h1>
          <p className="text-gray-200 mt-4 max-w-xl mx-auto">
            Explore beautifully crafted UI components, landing pages, icons, and SVG section dividers.
          </p>
        </motion.div>

        {/* Section Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {sections.map((sec) => (
            <Link key={sec.href} href={sec.href}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="block rounded-xl p-6 text-left bg-gradient-to-br from-cyan-600 to-blue-800 shadow-lg hover:shadow-cyan-400/40 transition"
              >
                <h2 className="text-2xl font-semibold text-white mb-1">{sec.title}</h2>
                <p className="text-sm text-cyan-100">{sec.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <Link href="/feedback">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold shadow-md transition"
            >
              Give Feedback
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 font-semibold shadow-md transition"
            >
              Contact Me
            </motion.button>
          </Link>
        </div>

        {/* Feedback */}

        <FeedbackSection
  feedback={
    (feedback ?? []).map(fb => ({
      ...fb,
      createdAt: String(fb.createdAt),
    }))
  }
/>
      </main>
    </div>
  );
}

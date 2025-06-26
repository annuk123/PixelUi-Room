// 'use client';

// import { useState, Suspense } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ComponentHub } from './ComponentHub';
// import LandingPageHub from './LandingPageHub';
// import IconHub from './IconHub';
// import SVGHub from './SVGHub';
// import { Canvas } from '@react-three/fiber';
// import Particles from '@/components/HeroSection/Particles/particles';


// const sections = [
//   { id: 'components', title: 'UI Components', description: 'Buttons, Inputs, Tabs, Cards...' },
//   { id: 'landing', title: 'Landing Pages', description: 'Fully designed responsive pages' },
//   { id: 'icons', title: 'Icon Sets', description: 'SVG, PNG, JPG icons for every domain' },
//   { id: 'svg', title: 'SVG Page Dividers', description: 'Wavy, blob, fancy background SVGs' },
// ];

// export default function ExplorePage() {
//   const [activeSection, setActiveSection] = useState<string | null>(null);

//   return (
//     <main className="min-h-screen px-6 md:px-16  text-white bg-[#0a0a23]">

//         <Canvas
//           className="absolute inset-0 z-0 pointer-events-none"
//           camera={{ position: [0, 0, 10], fov: 75 }}
//           gl={{ alpha: true }}
//         >
//           <Suspense fallback={null}>
//             <Particles />
//           </Suspense>
//         </Canvas>

//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-12"
//       >
//         <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">Welcome to PixelUI Room ✨</h1>
//         <p className="text-gray-400 mt-4 max-w-xl mx-auto">
//           Explore beautifully crafted UI components, landing pages, icons, and SVG section dividers.
//         </p>
//       </motion.div>

//       {/* Section Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
//         {sections.map((sec) => (
//           <motion.button
//             key={sec.id}
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//             transition={{ type: 'spring', stiffness: 200, damping: 15 }}
//             className={`rounded-xl p-6 text-left bg-gradient-to-br from-cyan-700 to-blue-900 shadow-md hover:shadow-cyan-500/30 transition 
//               ${activeSection === sec.id ? 'ring-2 ring-cyan-300' : ''}`}
//             onClick={() => setActiveSection(sec.id)}
//           >
//             <h2 className="text-2xl font-semibold text-white mb-1">{sec.title}</h2>
//             <p className="text-sm text-cyan-100">{sec.description}</p>
//           </motion.button>
//         ))}
//       </div>

//       {/* Active Section */}
//       <div className="max-w-6xl mx-auto px-2 md:px-4">
//         <AnimatePresence mode="wait">
//           {activeSection === 'components' && (
//             <motion.div
//               key="components"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <ComponentHub />
//             </motion.div>
//           )}

//           {activeSection === 'landing' && (
//             <motion.div
//               key="landing"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <LandingPageHub />
//             </motion.div>
//           )}

//           {activeSection === 'icons' && (
//             <motion.div
//               key="icons"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <IconHub />
//             </motion.div>
//           )}

//           {activeSection === 'svg' && (
//             <motion.div
//               key="svg"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <SVGHub />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </main>
//   );
// }

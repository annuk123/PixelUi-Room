'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export default function Loader({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const topPanelRef = useRef<HTMLDivElement>(null);
  const bottomPanelRef = useRef<HTMLDivElement>(null);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setShowLoader(false);
          onComplete();
        },
      });

      tl.to(topPanelRef.current, { yPercent: -100, duration: 1, ease: 'power4.inOut' }, 0)
        .to(bottomPanelRef.current, { yPercent: 100, duration: 1, ease: 'power4.inOut' }, 0);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [onComplete]);

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
      {/* Top Panel */}
      <div
        ref={topPanelRef}
        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-[#0a0a23] flex justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center leading-tight space-y-2"
        >
          <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight">
            Pixel<span className="text-blue-500">UI</span> Roo
            <span className="text-blue-500">m</span> 
          </h1>
          <p className="text-blue-300 text-lg md:text-xl">
            Welcome to Creativity
          </p>
        </motion.div>
      </div>

      {/* Bottom Panel */}
      <div
        ref={bottomPanelRef}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-[#0a0a23] flex justify-center items-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white text-lg md:text-xl text-center max-w-md leading-snug"
        >
          Designs That Speak for You.<br />
          Turning <span className="text-blue-500 font-semibold">Creativity</span> Into Reality.
        </motion.p>
      </div>
    </div>
  );
}

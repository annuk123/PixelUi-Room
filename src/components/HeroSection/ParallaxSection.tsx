'use client';

import { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxSection({ children, index }: { children: ReactNode; index: number }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * index]);

  return (
    <motion.section style={{ y }} className="h-screen flex items-center justify-center">
      {children}
    </motion.section>
  );
}
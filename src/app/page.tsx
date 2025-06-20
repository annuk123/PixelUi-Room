'use client';

import { useState } from 'react';
import Loader from '@/components/ Loader/Loader';
import HeroSection from '@/components/HeroSection/HeroSection';

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a23]">
      {!loadingComplete && (
        <Loader onComplete={() => setLoadingComplete(true)} />
      )}

      <main>
        <HeroSection />
      </main>
    </div>
  );
}

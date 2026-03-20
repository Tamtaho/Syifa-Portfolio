'use client';

import { useState, useEffect } from 'react';

export default function IntroScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="intro-screen fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#11009E] via-[#6366f1] to-[#E6B9DE] bg-clip-text text-transparent">
          Nice to e-meet you,
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-[#11009E] mt-4">
          my name is Syifa!
        </h2>
      </div>
    </div>
  );
}

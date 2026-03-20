'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0s';
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full items-center">
        {/* Left Side - Text */}
        <div ref={titleRef} className="flex flex-col gap-6">
          <div>
            <p className="text-lg font-medium text-gray-600 mb-2">Nice to meet you!</p>
            <h1 className="text-6xl md:text-7xl font-bold text-[#11009E] leading-tight">
              My name is <span className="bg-gradient-to-r from-[#11009E] via-[#6366f1] to-[#E6B9DE] bg-clip-text text-transparent">Syifa</span>
            </h1>
          </div>
        </div>

        {/* Right Side - Photo Placeholder */}
        <div className="flex justify-center md:justify-end">
          <div className="w-80 h-96 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#E6B9DE] opacity-20 flex items-center justify-center border-2 border-[#11009E] border-dashed">
            <span className="text-gray-500 text-center px-6">
              Your photo here<br />
              <span className="text-sm">(transparent background)</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useRef } from 'react';

export default function CTAButtons() {
  const containerRef = useRef(null);

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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-20">
      <div
        ref={containerRef}
        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
      >
        {/* Primary Button - See My Works */}
        <button className="px-10 py-4 bg-[#11009E] text-white font-semibold rounded-lg text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto">
          See My Works
        </button>

        {/* Secondary Button - My Resume */}
        <button className="px-10 py-4 border-2 border-[#11009E] text-[#11009E] font-semibold rounded-lg text-lg hover:bg-[#11009E] hover:text-white transition-all duration-300 w-full sm:w-auto">
          My Resume
        </button>
      </div>
    </section>
  );
}

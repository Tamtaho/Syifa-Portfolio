'use client';

import { useEffect, useRef } from 'react';

export default function ProfessionSection() {
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-20">
      <div ref={sectionRef} className="text-center max-w-3xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-[#11009E]">
          Marketing & Design Expert
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          I'm a versatile professional who combines <span className="font-semibold text-[#11009E]">marketing strategy</span>, <span className="font-semibold text-[#11009E]">digital design</span>, and <span className="font-semibold text-[#11009E]">frontend development</span> to create compelling digital experiences.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Whether it's building brand identities, crafting engaging campaigns, or bringing designs to life with code, I'm passionate about creating meaningful solutions that connect with people.
        </p>
      </div>
    </section>
  );
}

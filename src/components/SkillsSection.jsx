'use client';

import { useEffect, useRef } from 'react';

const SkillCard = ({ title, skills, delay }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationDelay = delay;
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="p-8 rounded-xl bg-white border-2 border-transparent bg-gradient-to-br from-white to-white hover:shadow-lg transition-shadow duration-300"
      style={{
        backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #6366f1, #E6B9DE)',
        backgroundOrigin: 'padding-box, border-box',
        backgroundClip: 'padding-box, border-box',
      }}
    >
      <h3 className="text-2xl font-bold text-[#11009E] mb-4">{title}</h3>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-[#E6B9DE] font-bold mt-1">•</span>
            <span className="text-gray-700">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function SkillsSection() {
  const skillsData = [
    {
      title: 'Marketing',
      skills: [
        'Marketing Strategy',
        'Digital Marketing',
        'Social Media Management',
        'Brand Strategy',
        'Campaign Analysis',
      ],
    },
    {
      title: 'Design',
      skills: [
        'Campaign Design',
        'Branding & Identity',
        'UX/UI Design',
        'Visual Design',
        'Design Systems',
      ],
    },
    {
      title: 'Frontend Development',
      skills: [
        'React & Next.js',
        'Tailwind CSS',
        'JavaScript/TypeScript',
        'Web Animation',
        'Responsive Design',
      ],
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#11009E]">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              skills={skill.skills}
              delay={`${index * 0.2}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

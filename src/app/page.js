import IntroScreen from '@/components/IntroScreen';
import Hero from '@/components/Hero';
import ProfessionSection from '@/components/ProfessionSection';
import SkillsSection from '@/components/SkillsSection';
import CTAButtons from '@/components/CTAButtons';

export default function Home() {
  return (
    <main className="bg-white">
      <IntroScreen />
      <Hero />
      <ProfessionSection />
      <SkillsSection />
      <CTAButtons />
    </main>
  );
}

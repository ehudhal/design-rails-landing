import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import HowItWorks from '@/components/sections/HowItWorks';
import Benefits from '@/components/sections/Benefits';
import TechnicalFeatures from '@/components/sections/TechnicalFeatures';
import SocialProof from '@/components/sections/SocialProof';
import Comparison from '@/components/sections/Comparison';
import UseCases from '@/components/sections/UseCases';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Benefits />
      <TechnicalFeatures />
      <SocialProof />
      <Comparison />
      <UseCases />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

import Navigation from '@/components/Navigation';
import MinimalHero from '@/components/minimal/MinimalHero';
import MinimalProblem from '@/components/minimal/MinimalProblem';
import MinimalSolution from '@/components/minimal/MinimalSolution';
import MinimalHowItWorks from '@/components/minimal/MinimalHowItWorks';
import MinimalBenefits from '@/components/minimal/MinimalBenefits';
import MinimalSocialProof from '@/components/minimal/MinimalSocialProof';
import MinimalFAQ from '@/components/minimal/MinimalFAQ';
import MinimalFinalCTA from '@/components/minimal/MinimalFinalCTA';
import Footer from '@/components/Footer';

export default function MinimalPage() {
  return (
    <div className="min-h-screen bg-[#F5F3EF]" data-theme="minimal">
      <Navigation variant="minimal" />
      <MinimalHero />
      <MinimalProblem />
      <MinimalSolution />
      <MinimalHowItWorks />
      <MinimalBenefits />
      <MinimalSocialProof />
      <MinimalFAQ />
      <MinimalFinalCTA />
      <Footer variant="minimal" />
    </div>
  );
}

import React, { useMemo, useState } from 'react';
import { Hero } from './components/Hero';
import { ProblemSplit } from './components/ProblemSplit';
import { PainTimeline } from './components/PainTimeline';
import { HowItWorks } from './components/HowItWorks';
import { RiskDetection } from './components/RiskDetection';
import { Integrations } from './components/Integrations';
import { Footer } from './components/Footer';
import { EmailPopup } from './components/EmailPopup';
import { getIcpKeyFromPath, ICP_CONTENT } from './icpContent';

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const icpKey = useMemo(() => getIcpKeyFromPath(window.location.pathname), []);
  const content = ICP_CONTENT[icpKey];

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <div className="w-full overflow-x-hidden bg-cream text-charcoal font-sans selection:bg-high-vis-orange selection:text-white">
      {/* Navigation / Header Placeholder */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-cream/90 backdrop-blur-sm border-b border-gray-200">
        <div className="font-mono font-bold text-xl tracking-widest border-2 border-charcoal px-2">SOOTS</div>
        <button
          onClick={togglePopup}
          className="font-mono text-xs uppercase tracking-wider hover:text-blueprint-blue transition-colors"
        >
          Login
        </button>
      </nav>

      <main>
        <Hero content={content.hero} onOpenPopup={togglePopup} />
        <ProblemSplit content={content.problemSplit} />
        <PainTimeline content={content.painTimeline} />
        <RiskDetection content={content.riskDetection} />
        <HowItWorks content={content.howItWorks} />
        <Integrations content={content.integrations} />
      </main>

      <EmailPopup
        content={content.emailPopup}
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />

      <Footer content={content.footer} onOpenPopup={togglePopup} />
    </div>
  );
}
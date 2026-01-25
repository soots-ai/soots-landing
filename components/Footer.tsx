import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

interface FooterProps {
  onOpenPopup: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPopup }) => {
  return (
    <Section className="text-center pt-32 pb-32">
      <h2 className="text-4xl md:text-5xl font-sans font-bold text-charcoal mb-12 max-w-3xl mx-auto leading-tight">
        When Context carries forward, Delivery starts smarter and Renewals are earned earlier<br /> <span className="text-high-vis-orange underline decoration-4 underline-offset-4">Not rescued later</span>
      </h2>

      <div className="flex flex-col items-center gap-6">
        <Button variant="ghost" onClick={onOpenPopup}>Let's Prove the Value</Button>
        <p className="font-mono text-gray-500 text-sm mt-4">
          [ STATUS: ACCEPTING PILOT PARTNERS FOR Q1 ]
        </p>
      </div>

      <div className="mt-24 border-t border-gray-300 pt-8 flex justify-between items-center text-xs text-gray-400 font-mono">
        <span>© 2026 SOOTS</span>
        <span>ENGINEERED IN NL</span>
      </div>
    </Section>
  );
};

import React from 'react';
import { Section } from './ui/Section';
import { Filter, Network, FileText, ArrowRight } from 'lucide-react';
import type { IcpContent } from '../icpContent';

interface HowItWorksProps {
  content: IcpContent['howItWorks'];
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ content }) => {
  return (
    <Section>
      <div className="text-center mb-24">
        <h2 className="text-4xl font-bold font-sans text-charcoal">{content.title}</h2>
        <p className="text-blueprint-blue mt-2 font-mono">{content.subtitle}</p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 md:gap-0">

        {/* Step 1: Ingest */}
        <div className="flex-1 flex flex-col items-center text-center relative px-4 w-full md:w-auto">
          {/* Data Inputs */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 flex flex-col items-center z-20">
            <div className="flex flex-wrap justify-center gap-2 mb-1">
              {content.ingestTags.map((tag, i) => (
                <span key={i} className="bg-white border-2 border-charcoal text-charcoal text-xs font-bold px-2 py-1 font-mono shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
            {/* Connector Line */}
            <div className="w-px h-4 bg-charcoal/50"></div>
          </div>

          <div className="w-24 h-24 rounded-full border-2 border-charcoal bg-white flex items-center justify-center mb-6 z-10 relative">
            <Filter size={40} className="text-charcoal" />
            <div className="absolute -inset-2 border border-dashed border-gray-400 rounded-full animate-spin-slow"></div>
          </div>
          <h3 className="font-sans font-bold text-xl mb-2">{content.steps[0]?.title ?? '1. Ingest'}</h3>
          <p className="text-gray-600 text-sm max-w-xs">{content.steps[0]?.description}</p>
        </div>

        {/* Arrow 1 */}
        <div className="hidden md:flex items-center justify-center h-24 w-24 self-start mt-8">
          <ArrowRight size={40} className="text-blueprint-blue" />
        </div>

        {/* Arrow 1 (Mobile) */}
        <div className="flex md:hidden items-center justify-center text-blueprint-blue rotate-90 -my-4">
          <ArrowRight size={32} />
        </div>

        {/* Step 2: Map */}
        <div className="flex-1 flex flex-col items-center text-center relative px-4 w-full md:w-auto">
          <div className="w-24 h-24 rounded-full border-2 border-blueprint-blue bg-white flex items-center justify-center mb-6 z-10 shadow-[0_0_20px_rgba(41,98,255,0.2)]">
            <Network size={40} className="text-blueprint-blue" />
          </div>
          <h3 className="font-sans font-bold text-xl mb-2 text-blueprint-blue">{content.steps[1]?.title ?? '2. Map'}</h3>
          <p className="text-gray-600 text-sm max-w-xs">{content.steps[1]?.description}</p>
        </div>

        {/* Arrow 2 */}
        <div className="hidden md:flex items-center justify-center h-24 w-24 self-start mt-8">
          <ArrowRight size={40} className="text-blueprint-blue" />
        </div>

        {/* Arrow 2 (Mobile) */}
        <div className="flex md:hidden items-center justify-center text-blueprint-blue rotate-90 -my-4">
          <ArrowRight size={32} />
        </div>

        {/* Step 3: Use */}
        <div className="flex-1 flex flex-col items-center text-center relative px-4 w-full md:w-auto">
          <div className="w-24 h-24 rounded-full border-2 border-high-vis-orange bg-white flex items-center justify-center mb-6 z-10">
            <FileText size={40} className="text-high-vis-orange" />
          </div>
          <div className="absolute -top-4 -right-4 bg-high-vis-orange text-white text-xs font-bold px-2 py-1 font-mono">READY</div>
          <h3 className="font-sans font-bold text-xl mb-2">{content.steps[2]?.title ?? '3. Execute'}</h3>
          <p className="text-gray-600 text-sm max-w-xs">{content.steps[2]?.description}</p>
        </div>

      </div>
    </Section>
  );
};
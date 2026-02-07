import React from 'react';
import { Section } from './ui/Section';
import { TrendingDown, Clock, MessageSquareWarning } from 'lucide-react';
import type { IcpContent } from '../icpContent';

interface PainTimelineProps {
  content: IcpContent['painTimeline'];
}

const IMPACT_ICONS = [TrendingDown, Clock, MessageSquareWarning];

export const PainTimeline: React.FC<PainTimelineProps> = ({ content }) => {
  return (
    <Section className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-sans text-charcoal">{content.title}</h2>
        <p className="text-gray-500 mt-2 font-mono">{content.subtitle}</p>
      </div>

      <div className="max-w-6xl mx-auto px-2 md:px-4">
        
        {/* --- Middle Section: The Timeline --- */}
        {/* Added margin-top to account for the bracket which is now absolutely positioned upwards */}
        <div className="relative flex items-center justify-between py-6 md:py-8 mt-8 md:mt-0">
            
            {/* The Main Horizontal Line (Centered via Flex Parent) */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -translate-y-1/2 -z-10" />

            {/* Start Node */}
            <div className="relative flex flex-col items-center flex-shrink-0 bg-white px-2">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-charcoal rounded-full ring-4 ring-white z-10" />
                <span className="absolute top-10 md:top-12 font-mono text-[10px] md:text-xs font-bold text-gray-500 whitespace-nowrap">
                    {content.startLabel}
                </span>
            </div>

            {/* The Hazard Bar (Flex Grow) */}
            <div className="flex-grow mx-2 md:mx-6 relative">
                 
                 {/* --- BRACKET & LABEL (Moved Inside) --- */}
                 {/* Positioned absolutely relative to this bar so widths match 100% */}
                 <div className="absolute -top-10 md:-top-14 left-0 w-full flex flex-col items-center">
                    <span className="font-mono text-high-vis-orange font-bold text-[10px] md:text-base mb-1 text-center bg-white px-2 relative z-10 whitespace-nowrap">
                        {content.bracketLabel}
                    </span>
                    <div className="w-full h-3 md:h-4 border-x-2 border-t-2 border-high-vis-orange"></div>
                 </div>

                 {/* Vertical Dashed Lines Dropping Down (Decorative) */}
                 <div className="absolute top-1/2 left-[16.6%] h-24 md:h-32 border-l-2 border-dashed border-gray-200 -z-20 hidden md:block" />
                 <div className="absolute top-1/2 left-[50%] h-24 md:h-32 border-l-2 border-dashed border-gray-200 -z-20 hidden md:block" />
                 <div className="absolute top-1/2 left-[83.3%] h-24 md:h-32 border-l-2 border-dashed border-gray-200 -z-20 hidden md:block" />

                 <div className="h-12 md:h-16 w-full hazard-stripe border-2 border-high-vis-orange flex items-center justify-center shadow-md relative z-0">
                    <span className="bg-white px-2 py-1 md:px-4 md:py-1.5 font-bold font-sans text-charcoal border-2 border-charcoal uppercase tracking-wider text-[10px] md:text-sm whitespace-nowrap shadow-sm">
                        {content.hazardLabel}
                    </span>
                 </div>
            </div>

            {/* End Node */}
            <div className="relative flex flex-col items-center flex-shrink-0 bg-white px-2">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-blueprint-blue rounded-full ring-4 ring-white z-10" />
                <span className="absolute top-10 md:top-12 font-mono text-[10px] md:text-xs font-bold text-blueprint-blue whitespace-nowrap">
                    {content.endLabel}
                </span>
            </div>
        </div>

        {/* --- Bottom Section: The 3 Impacts --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-20">
          {content.impacts.map((impact, index) => {
            const Icon = IMPACT_ICONS[index] || TrendingDown;
            const iconClass =
              index === 0 ? 'text-red-500' : index === 1 ? 'text-high-vis-orange' : 'text-charcoal';
            const shadowClass =
              index === 0
                ? 'shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]'
                : index === 1
                ? 'shadow-[4px_4px_0px_0px_rgba(255,109,0,0.2)]'
                : 'shadow-[4px_4px_0px_0px_rgba(41,98,255,0.2)]';

            return (
              <div
                key={impact.title}
                className="flex flex-row md:flex-col items-start gap-4 p-4 border border-transparent hover:border-gray-200 transition-colors rounded-sm group"
              >
                <div className={`flex-shrink-0 w-12 h-12 border-2 border-charcoal bg-white flex items-center justify-center ${shadowClass} group-hover:shadow-none group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all`}>
                  <Icon size={24} className={iconClass} />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-bold text-charcoal mb-1 uppercase">{impact.title}</h3>
                  <p className="font-sans text-xs md:text-sm text-gray-600 leading-relaxed">
                    {impact.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </Section>
  );
};
import React from 'react';
import { Section } from './ui/Section';

export const ProblemSplit: React.FC = () => {
  return (
    <Section className="bg-white" noGrid>
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 pt-12">
        <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">The Information Cliff</h2>
        <p className="font-mono text-gray-500 text-xs md:text-base border-b border-gray-200 inline-block pb-1">
          FIG 2.0: KNOWLEDGE FIDELITY OVER TIME
        </p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] mb-20 px-2 md:px-4">
        
        {/* GRAPH CONTAINER */}
        <div className="w-full h-full relative border-l-2 border-b-2 border-charcoal">
            
            {/* Y-Axis Label */}
            <div className="absolute -left-8 md:-left-12 bottom-1/2 -rotate-90 origin-center whitespace-nowrap font-mono text-[10px] md:text-xs font-bold text-gray-400">
                CONTEXT COMPLETENESS (%)
            </div>

            {/* X-Axis Labels */}
            <div className="absolute bottom-[-30px] md:bottom-[-40px] left-0 w-full flex justify-between font-mono text-[9px] md:text-xs font-bold text-charcoal px-1">
                <span className="w-1/4 text-left">SALES DISCOVERY</span>
                <span className="w-1/4 text-center">DEAL SIGNED</span>
                <span className="w-1/4 text-center text-high-vis-orange">HANDOVER</span>
                <span className="w-1/4 text-right">KICKOFF</span>
            </div>

            {/* HTML OVERLAYS for Text Readability */}
            
            {/* 100% Fidelity Label */}
            <div className="absolute top-[8%] left-[30%] md:left-[32.5%] -translate-x-1/2">
               <span className="font-mono text-[10px] md:text-xs font-bold text-charcoal bg-white/80 px-1">100% FIDELITY</span>
            </div>

            {/* The Void Box & Label */}
            <div className="absolute top-[37.5%] left-[50%] md:left-[60%] -translate-x-1/2 w-[35%] md:w-[20%] h-[10%] bg-high-vis-orange flex items-center justify-center shadow-sm z-10">
               <span className="font-sans font-bold text-[10px] md:text-sm text-white whitespace-nowrap">THE VOID</span>
            </div>

            {/* Context Lost Annotation */}
            <div className="absolute top-[65%] left-[55%] md:left-[54%] transform">
               <div className="font-handwriting text-sm md:text-lg text-[#CC0000] rotate-[-5deg] whitespace-nowrap">Context Lost!</div>
            </div>

            {/* Starting From Scratch */}
            <div className="absolute top-[85%] left-[75%] md:left-[85%] -translate-x-1/2 w-32 md:w-auto text-center">
               <span className="font-mono text-[9px] md:text-[10px] text-gray-500 bg-white/50 px-1">STARTING FROM SCRATCH</span>
            </div>


            {/* The Graph SVG - Visuals Only */}
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 400">
                <defs>
                    <pattern id="hazardPattern" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
                        <rect width="5" height="10" fill="#FF6D00" opacity="0.2"/>
                    </pattern>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="#CC0000" />
                    </marker>
                </defs>

                {/* Grid Lines */}
                <line x1="0" y1="100" x2="800" y2="100" stroke="#f0f0f0" strokeDasharray="4"/>
                <line x1="0" y1="200" x2="800" y2="200" stroke="#f0f0f0" strokeDasharray="4"/>
                <line x1="0" y1="300" x2="800" y2="300" stroke="#f0f0f0" strokeDasharray="4"/>

                {/* Phase 1: Growth (Sales) */}
                <path d="M0,350 C100,300 200,100 300,50" fill="none" stroke="#333" strokeWidth="3" />
                <circle cx="300" cy="50" r="6" fill="#333" />
                
                {/* Phase 2: The Cliff (Handover) */}
                {/* The Drop */}
                <path d="M300,50 L350,50 L360,300 L800,300" fill="none" stroke="#FF6D00" strokeWidth="4" strokeDasharray="8 4" />
                
                {/* Hazard Area (The Gap) */}
                <path d="M350,50 L360,300 L800,300 L800,400 L350,400 Z" fill="url(#hazardPattern)" opacity="0.5" />
                
                {/* Annotations Arrow */}
                <g transform="translate(420, 260)">
                    <path d="M0,0 L-20,20" stroke="#CC0000" strokeWidth="2" markerEnd="url(#arrow)" />
                </g>

            </svg>

            {/* Floating Detail Cards (Absolute HTML on top of SVG) - Hidden on mobile to save space */}
            <div className="absolute top-[10%] left-[10%] md:left-[20%] w-32 md:w-48 bg-white border border-charcoal p-2 md:p-3 shadow-lg hidden sm:block rotate-[-2deg]">
                <div className="font-mono text-[8px] md:text-[10px] text-gray-500 mb-1">SALES REP</div>
                <div className="font-sans text-[10px] md:text-xs font-bold text-charcoal">"Deal closed!"</div>
            </div>

            <div className="absolute bottom-[20%] right-[5%] w-32 md:w-48 bg-white border border-gray-300 p-2 md:p-3 shadow-sm hidden sm:block">
                <div className="font-mono text-[8px] md:text-[10px] text-gray-500 mb-1">DELIVERY LEAD</div>
                <div className="font-sans text-[10px] md:text-xs text-gray-400">"Is that in the SOW?"</div>
            </div>

        </div>
      </div>
      
      {/* Stats Footer */}
      <div className="grid grid-cols-3 gap-0 max-w-5xl mx-auto border-t-2 border-charcoal bg-[#F9F9F9]">
         <div className="p-3 md:p-8 text-center border-r border-gray-300">
            <div className="text-2xl md:text-4xl font-bold font-mono text-charcoal mb-1 md:mb-2">30%</div>
            <div className="text-[9px] md:text-xs font-sans uppercase tracking-widest text-gray-500 leading-tight">Margin Erosion</div>
         </div>
         <div className="p-3 md:p-8 text-center border-r border-gray-300 bg-orange-50">
            <div className="text-2xl md:text-4xl font-bold font-mono text-high-vis-orange mb-1 md:mb-2">60h</div>
            <div className="text-[9px] md:text-xs font-sans uppercase tracking-widest text-gray-500 leading-tight">Lost per Project</div>
         </div>
         <div className="p-3 md:p-8 text-center">
            <div className="text-2xl md:text-4xl font-bold font-mono text-charcoal mb-1 md:mb-2">2x</div>
            <div className="text-[9px] md:text-xs font-sans uppercase tracking-widest text-gray-500 leading-tight">Churn Risk</div>
         </div>
      </div>

    </Section>
  );
};
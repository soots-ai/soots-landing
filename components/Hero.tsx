import React from 'react';
import { Button } from './ui/Button';
import { Mail, Mic, ArrowDown, CheckSquare, Layers } from 'lucide-react';

interface HeroProps {
  onOpenPopup: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPopup }) => {
  return (
    <div className="relative w-full min-h-screen flex flex-col md:flex-row items-center bg-cream grid-bg pt-24 pb-12 px-6 overflow-hidden">

      {/* LEFT: Copy & CTA */}
      <div className="w-full md:w-1/2 flex flex-col justify-center relative z-20 md:pl-16 lg:pl-24 mb-12 md:mb-0">
        <div className="inline-block border border-blueprint-blue/30 bg-blueprint-blue/5 px-3 py-1 mb-6 w-max">
          <span className="font-mono text-xs font-bold text-blueprint-blue tracking-widest uppercase">
            STATUS: ACCEPTING PILOT PARTNERS FOR Q1 2026
          </span>
        </div>

        <h1 className="text-5xl lg:text-7xl font-sans font-extrabold text-charcoal mb-8 leading-[1.1]">
          Don’t Start <br />
          <span className="relative">
            From Scratch.
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-high-vis-orange" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.00025 7.00005C50.6015 3.7381 120.306 -1.26875 198.003 3.50005" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        <p className="text-lg md:text-xl font-sans text-gray-600 mb-10 max-w-lg leading-relaxed border-l-4 border-gray-200 pl-6">
          The operational intelligence layer that bridges the gap between <span className="font-bold text-charcoal">Sales Teams</span> and <span className="font-bold text-charcoal">Delivery Teams</span>.
          <span className="block mt-4 font-mono text-sm text-blueprint-blue">
            // Sales Data to Operational Plan
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={onOpenPopup}>REQUEST EARLY ACCESS</Button>
          <div className="flex items-center gap-2 px-4 py-2 opacity-60">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-mono text-xs">Pilot slots available</span>
          </div>
        </div>
      </div>

      {/* RIGHT: The "Rectification Engine" Visual */}
      <div className="w-full md:w-1/2 h-[420px] md:h-[520px] relative flex justify-center items-center">
        {/* Container Frame */}
        <div className="relative w-full max-w-md h-full border-x-2 border-dashed border-gray-300 bg-white/50 backdrop-blur-sm overflow-hidden flex flex-col items-center">

          {/* Top: The "Messy" Input Zone */}
          <div className="h-[38%] w-full relative p-4 flex-shrink-0">
            <div className="absolute top-2 right-2 font-mono text-[10px] text-gray-400 border border-gray-200 px-2 py-0.5 rounded-full bg-white z-30">
              INPUT: UNSTRUCTURED DATA
            </div>

            {/* 1. The Email (Relatable Business Object) */}
            <div className="absolute top-12 left-6 animate-float z-20">
              <div className="bg-white p-3 shadow-md border border-gray-200 w-44 rotate-[-2deg]">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-1">
                  <Mail size={12} className="text-gray-400" />
                  <span className="font-sans text-[10px] font-bold text-gray-600">Re: Project Scope</span>
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 bg-gray-100 rounded w-3/4"></div>
                  <div className="h-1.5 bg-gray-100 rounded w-full"></div>
                </div>
              </div>
            </div>

            {/* 2. The Sticky Note (Human Element) */}
            <div className="absolute top-16 right-8 animate-float-delayed z-30">
              <div className="bg-yellow-100 p-3 shadow-md rotate-[3deg] w-36 border border-yellow-200/50">
                <div className="font-handwriting text-charcoal text-xs leading-tight">"Client needs the SSO integration by Q3!"</div>
              </div>
            </div>

            {/* 3. The Audio File (Verbal Promises) */}
            <div className="absolute bottom-4 left-16 animate-float-slow z-10">
              <div className="bg-white border border-gray-200 p-2 shadow-sm rotate-[-1deg] flex items-center gap-2 rounded-full px-3">
                <Mic size={14} className="text-red-500" />
                <div className="flex gap-0.5 items-end h-3">
                  <div className="w-0.5 h-2 bg-gray-300"></div>
                  <div className="w-0.5 h-3 bg-gray-400"></div>
                  <div className="w-0.5 h-1.5 bg-gray-300"></div>
                  <div className="w-0.5 h-3 bg-gray-400"></div>
                </div>
                <span className="font-mono text-[9px] text-gray-400">Sales_Call_Rec.mp3</span>
              </div>
            </div>
          </div>

          {/* Middle: The Scanner (The Transformation) */}
          <div className="h-20 w-[120%] bg-blueprint-blue/10 border-y-2 border-blueprint-blue relative flex flex-shrink-0 items-center justify-center shadow-[0_0_30px_rgba(41,98,255,0.2)] z-10 my-2 backdrop-blur-md">
            <div className="absolute w-full h-[2px] bg-blueprint-blue top-0 animate-scan box-content shadow-[0_0_10px_#2962FF]"></div>
            <div className="font-mono text-xs font-bold text-blueprint-blue bg-white px-2 py-1 border border-blueprint-blue z-20">
              SOOTS INTELLIGENCE
            </div>
            {/* Down arrows showing flow */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-blueprint-blue animate-bounce">
              <ArrowDown size={20} />
            </div>
          </div>

          {/* Bottom: The "Structured" Output Zone */}
          <div className="flex-grow w-full relative p-6 flex flex-col gap-3 overflow-hidden">
            <div className="absolute bottom-2 right-2 font-mono text-blueprint-blue text-[10px] opacity-50">OUTPUT: DELIVERABLES</div>

            {/* Generated Item 1 */}
            <div className="w-full bg-white border-l-4 border-blueprint-blue shadow-sm p-3 flex justify-between items-center opacity-0 animate-fade-in-up-delay-1">
              <div className="flex items-center gap-3">
                <CheckSquare size={16} className="text-blueprint-blue" />
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-xs text-charcoal">Task: SSO Config</span>
                  <span className="font-mono text-[9px] text-gray-400">Source: Sticky Note</span>
                </div>
              </div>
              <span className="font-mono text-[9px] bg-gray-100 px-1 text-gray-500">PRIORITY</span>
            </div>

            {/* Generated Item 2 */}
            <div className="w-full bg-white border-l-4 border-high-vis-orange shadow-sm p-3 flex justify-between items-center opacity-0 animate-fade-in-up-delay-2">
              <div className="flex items-center gap-3">
                <Layers size={16} className="text-high-vis-orange" />
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-xs text-charcoal">Scope: Custom API</span>
                  <span className="font-mono text-[9px] text-gray-400">Source: Email Thread</span>
                </div>
              </div>
              <span className="font-mono text-[9px] bg-gray-100 px-1 text-gray-500">TECH_SPEC</span>
            </div>

            {/* Grid Overlay for technical feel */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: 'linear-gradient(to right, rgba(41,98,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(41,98,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>
          </div>

        </div>

        {/* Decorative Background Elements */}
        <div className="absolute right-10 bottom-10 w-64 h-64 border border-gray-200 rounded-full opacity-20 animate-spin-slow"></div>
        <div className="absolute left-0 top-20 w-32 h-32 border-2 border-gray-100 rotate-45"></div>

      </div>
    </div>
  );
};
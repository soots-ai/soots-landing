import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Mail, Mic, ArrowDown, CheckSquare, Layers } from 'lucide-react';
import type { IcpContent } from '../icpContent';

interface HeroProps {
  onOpenPopup: () => void;
  content: IcpContent['hero'];
}

export const Hero: React.FC<HeroProps> = ({ onOpenPopup, content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const rotatingTerms = content.rotatingTerms.length > 0 ? content.rotatingTerms : ['Teams'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      // Wait for animation to finish before swapping state
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex((prev) => (prev + 1) % rotatingTerms.length);
      }, 800); // Matches animation duration

    }, 3000); // Cycle every 3 seconds

    return () => clearInterval(interval);
  }, [rotatingTerms.length]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [rotatingTerms]);

  const currentTerm = rotatingTerms[currentIndex];
  // Calculate next term safely
  const nextTerm = rotatingTerms[(currentIndex + 1) % rotatingTerms.length];

  return (
    <div className="relative w-full min-h-screen flex items-center bg-cream grid-bg pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center">

        {/* LEFT: Copy & CTA */}
        <div className="w-full md:w-1/2 flex flex-col justify-center relative z-20 md:pr-12 lg:pr-16 mb-12 md:mb-0">
          <div className="inline-block border border-blueprint-blue/30 bg-blueprint-blue/5 px-3 py-1 mb-6 w-max">
            <span className="font-mono text-xs font-bold text-blueprint-blue tracking-widest uppercase">
              {content.status}
            </span>
          </div>

          <h1 className="text-[clamp(1.9rem,3.4vw,3.1rem)] lg:text-[clamp(2.2rem,2.6vw,3.2rem)] font-sans font-extrabold text-charcoal mb-8 leading-[1.2] max-w-lg">
            <span className="whitespace-nowrap">
              {content.headline.line1} {content.headline.line2}
            </span>
            <br />
            <span className="relative inline-block group mt-2">
              {/* Corner brackets */}
              <span className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-high-vis-orange"></span>
              <span className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-high-vis-orange"></span>
              <span className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-high-vis-orange"></span>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-high-vis-orange"></span>
              
              {/* Text */}
              <span className="relative px-3 py-0.5 text-high-vis-orange font-black border-2 border-high-vis-orange/20 bg-high-vis-orange/5 whitespace-nowrap">
                {content.headline.highlight}
              </span>
            </span>
          </h1>

          <div className="text-lg font-sans text-gray-600 mb-10 max-w-2xl leading-relaxed border-l-4 border-gray-200 pl-6 block">
            <span>
              {content.subheadLead}{' '}
              <span className="font-bold text-charcoal">{content.subheadHighlight}</span>{' '}
              {content.subheadConnector}
            </span>

            {/* Sticky Note Stack Container */}
            <div className="relative inline-block w-[240px] h-[40px] align-middle ml-2">

              {/* Bottom Note (Next Item) - Animates to become the new "Top" */}
              <div className={`absolute inset-0 border flex items-center justify-center p-1 z-10 transition-all duration-500 ease-in-out ${isAnimating
                  ? 'bg-[#fefce8] border-yellow-300 shadow-md rotate-[1deg]'
                  : 'bg-yellow-100 border-yellow-200 shadow-sm rotate-[-2deg]'
                }`}>
                <span className={`font-handwriting text-xl text-charcoal whitespace-nowrap transition-transform duration-500 ${isAnimating ? 'rotate-[0deg]' : 'rotate-[-1deg]'
                  }`}>
                  {nextTerm}
                </span>
              </div>

              {/* Top Note (Current Item) - Animates away */}
              {/* Key hack: When not animating, show current. When animating, this is the 'old' current falling away. */}
              <div className={`absolute inset-0 bg-[#fefce8] border border-yellow-300 shadow-md rotate-[1deg] flex items-center justify-center p-1 z-20 ${isAnimating ? 'animate-note-fall pointer-events-none' : ''}`}>
                <span className="font-handwriting text-xl text-charcoal rotate-[0deg] whitespace-nowrap">
                  {currentTerm}
                </span>
              </div>

              {/* Hint of a third note for stack depth */}
              <div className="absolute inset-0 top-1 left-1 bg-yellow-50 border border-yellow-100 shadow-sm rotate-[3deg] -z-10"></div>
            </div>


            <span className="block mt-4 font-mono text-sm text-blueprint-blue w-full">
              {content.subheadTail}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={onOpenPopup}>{content.ctaLabel}</Button>
            <div className="flex items-center gap-2 px-4 py-2 opacity-60">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-mono text-xs">{content.ctaNote}</span>
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

        </div>
      </div>
    </div>
  );
};
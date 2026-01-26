import React from 'react';
import { Section } from './ui/Section';
import { AlertTriangle } from 'lucide-react';

export const RiskDetection: React.FC = () => {
  return (
    <Section className="bg-charcoal text-white">
      <div className="mb-12 border-l-4 border-high-vis-orange pl-6">
        <h2 className="text-3xl md:text-4xl font-bold font-sans text-white">Risk Detection & Governance Layer</h2>
        <p className="text-gray-400 mt-2 font-mono uppercase tracking-widest">Semantic Analysis of Commitments & Scope</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Transcript UI */}
        <div className="bg-white rounded-sm p-6 text-charcoal font-mono text-sm shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-8 bg-gray-100 border-b border-gray-200 flex items-center px-4 space-x-2">
             <div className="w-3 h-3 rounded-full bg-red-400"></div>
             <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
             <div className="w-3 h-3 rounded-full bg-green-400"></div>
             <span className="ml-4 text-xs text-gray-400">zoom_transcript_final.txt</span>
           </div>
           
           <div className="mt-6 space-y-4 opacity-100">
             <p className="text-gray-400"><span className="font-bold text-gray-500">Sales Rep:</span> Great to meet everyone. Let's dive in.</p>
             <p className="text-gray-400"><span className="font-bold text-gray-500">Client:</span> We need the SSO to work with Okta out of the box.</p>
             <p className="text-gray-400"><span className="font-bold text-gray-500">Sales Rep:</span> That's standard, no problem.</p>
             <p className="text-gray-400"><span className="font-bold text-gray-500">Client:</span> What about the custom API for legacy inventory?</p>
             
             {/* The Highlighted Risk */}
             <div className="relative group cursor-pointer">
               <p className="relative z-10 text-charcoal">
                 <span className="font-bold">Sales Rep:</span> <span className="bg-yellow-200 font-bold border-b-2 border-high-vis-orange">Yes, we can definitely include the custom API integration in the pilot phase.</span>
               </p>
               {/* Connecting Line (Visual only, simplified for web) */}
               <div className="hidden lg:block absolute top-1/2 right-[-100px] w-[100px] h-[2px] bg-high-vis-orange"></div>
               <div className="hidden lg:block absolute top-1/2 right-[-105px] w-3 h-3 bg-high-vis-orange rounded-full"></div>
             </div>
             
             <p className="text-gray-400"><span className="font-bold text-gray-500">Client:</span> Perfect, that seals the deal.</p>
           </div>
        </div>

        {/* Right: Alert Card */}
        <div className="relative">
          <div className="bg-white border-4 border-high-vis-orange p-6 shadow-2xl relative">
            <div className="absolute -top-5 -left-5 bg-high-vis-orange text-white p-3 shadow-lg">
              <AlertTriangle size={32} />
            </div>
            
            <div className="mt-4">
              <h3 className="font-sans font-bold text-2xl text-charcoal mb-2">RISK DETECTED: <br/>Scope Discrepancy</h3>
              <div className="w-full h-px bg-gray-200 my-4"></div>
              <p className="font-mono text-sm text-gray-600 mb-4">
                <span className="font-bold text-red-600">INSIGHT:</span> This verbal promise contradicts standard SOW terms for "Pilot" engagements.
              </p>
              
              <div className="bg-gray-100 p-3 border-l-4 border-blueprint-blue">
                <p className="text-xs text-gray-500 font-mono mb-1">RECOMMENDED ACTION:</p>
                <p className="text-sm font-sans font-semibold text-blueprint-blue">Add "Custom API Integration" line item to SOW or flag for Sales Director review.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};
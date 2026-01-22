import React, { useEffect, useState } from 'react';
import { Section } from './ui/Section';
import { Database, Server, Globe, Cpu, ArrowUpRight } from 'lucide-react';

// --- SVG LOGO COMPONENTS ---

const SalesforceLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.132 20.177 10.244 17.8 10.05C17.6 6.6 14.75 4 11.25 4C8.3 4 5.7 5.85 4.6 8.5C2 8.9 0 11.2 0 14C0 16.76 2.24 19 5 19H17.5Z" fill="#00A1E0"/>
  </svg>
);

const HubSpotLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10.5 16.5L8 14L10.5 11.5L13 14L10.5 16.5ZM12 9.5C11.17 9.5 10.5 8.83 10.5 8C10.5 7.17 11.17 6.5 12 6.5C12.83 6.5 13.5 7.17 13.5 8C13.5 8.83 12.83 9.5 12 9.5ZM15.5 15.5C14.67 15.5 14 14.83 14 14C14 13.17 14.67 12.5 15.5 12.5C16.33 12.5 17 13.17 17 14C17 14.83 16.33 15.5 15.5 15.5Z" fill="#FF7A59"/>
  </svg>
);

const SlackLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 11.5C3.57 11.5 2 13.07 2 15C2 16.93 3.57 18.5 5.5 18.5H9V15C9 13.07 7.43 11.5 5.5 11.5ZM5.5 2C3.57 2 2 3.57 2 5.5C2 7.43 3.57 9 5.5 9H9V5.5C9 3.57 7.43 2 5.5 2ZM11.5 5.5C11.5 7.43 13.07 9 15 9C16.93 9 18.5 7.43 18.5 5.5C18.5 3.57 16.93 2 15 2H11.5V5.5ZM18.5 11.5C20.43 11.5 22 9.93 22 8C22 6.07 20.43 4.5 18.5 4.5H15V8C15 9.93 16.57 11.5 18.5 11.5ZM15 11.5H18.5C20.43 11.5 22 13.07 22 15C22 16.93 20.43 18.5 18.5 18.5H15V15C15 13.07 13.43 11.5 11.5 11.5Z" fill="#E01E5A"/>
    <path d="M5.5 11.5C7.43 11.5 9 13.07 9 15V18.5H5.5C3.57 18.5 2 16.93 2 15C2 13.07 3.57 11.5 5.5 11.5Z" fill="#36C5F0"/>
    <path d="M9 5.5C9 3.57 7.43 2 5.5 2C3.57 2 2 3.57 2 5.5V9H5.5C7.43 9 9 7.43 9 5.5Z" fill="#2EB67D"/>
    <path d="M15 9H18.5C20.43 9 22 7.43 22 5.5C22 3.57 20.43 2 18.5 2C16.57 2 15 3.57 15 5.5V9Z" fill="#ECB22E"/>
    <path d="M15 15V22H11.5C9.57 22 8 20.43 8 18.5C8 16.57 9.57 15 11.5 15H15Z" fill="#E01E5A"/>
  </svg>
);

const GmailLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#EA4335"/>
  </svg>
);

const GongLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#8B5CF6" />
    <path d="M12 6V18M8 9V15M16 9V15M4 11V13M20 11V13" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ZendeskLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#03363D"/>
    <path d="M8 8H11V16H8V8Z" fill="white"/>
    <path d="M13 8H16V16H13V8Z" fill="white"/>
    <path d="M8 16L16 8" stroke="white" strokeWidth="3"/>
  </svg>
);

const IntercomLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#1F8CEB"/>
    <path d="M7 17L12 7L17 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 17V13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6 12C6 12 8 10 12 10C16 10 18 12 18 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// --- DYNAMIC COMPONENT FOR "ANY API" ---

const WildcardApiNode = () => {
  const [label, setLabel] = useState("REST_API");
  const options = ["REST_API", "GRAPHQL", "SNOWFLAKE", "ASANA", "JIRA", "POSTGRES"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLabel(prev => {
        const idx = options.indexOf(prev);
        return options[(idx + 1) % options.length];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-2">
       <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-charcoal flex items-center justify-center border border-gray-500 shadow-inner">
          <Database size={18} className="text-high-vis-orange animate-pulse" />
       </div>
       <div className="font-mono text-[10px] bg-charcoal text-white px-1.5 py-0.5 rounded animate-fade-in-up">
         {label}
       </div>
    </div>
  );
};

// --- DATA CONFIG ---

const INTEGRATION_TOOLS = [
  { id: 'salesforce', label: 'CRM', icon: <SalesforceLogo />, angle: 270 }, // Top
  { id: 'hubspot', label: 'CRM', icon: <HubSpotLogo />, angle: 315 },      // Top Right
  { id: 'slack', label: 'CHAT', icon: <SlackLogo />, angle: 0 },           // Right
  { id: 'gmail', label: 'EMAIL', icon: <GmailLogo />, angle: 45 },         // Bottom Right
  { id: 'gong', label: 'VOICE', icon: <GongLogo />, angle: 90 },           // Bottom
  { id: 'zendesk', label: 'SUPPORT', icon: <ZendeskLogo />, angle: 135 },  // Bottom Left
  { id: 'intercom', label: 'TICKET', icon: <IntercomLogo />, angle: 180 }, // Left
  { id: 'wildcard', component: <WildcardApiNode />, angle: 225 },          // Top Left
];

// Helper to convert polar to cartesian for CSS (0-100% space)
const getPosition = (angleInDegrees: number, radiusPercent: number) => {
  const angleInRadians = (angleInDegrees * Math.PI) / 180;
  // Center is 50%, 50%
  const x = 50 + radiusPercent * Math.cos(angleInRadians);
  const y = 50 + radiusPercent * Math.sin(angleInRadians);
  return { left: `${x}%`, top: `${y}%` };
};

// Helper for SVG coords (in a 1000x1000 coordinate space to match scale)
const getSvgCoords = (angleInDegrees: number, radius: number) => {
  const angleInRadians = (angleInDegrees * Math.PI) / 180;
  const centerX = 500;
  const centerY = 500;
  const x = centerX + radius * Math.cos(angleInRadians);
  const y = centerY + radius * Math.sin(angleInRadians);
  return { x, y };
};

// --- MAIN COMPONENT ---

export const Integrations: React.FC = () => {
  
  // Radius settings
  const ORBIT_RADIUS_PERCENT = 38; 
  // Map the 38% radius to the 1000x1000 SVG coordinate space
  // 38% of width means 380 units from center in a 1000 unit wide box
  const SVG_RADIUS = 380; 

  return (
    <Section className="py-24 bg-cream overflow-hidden">
      
      {/* Header */}
      <div className="text-center mb-16 relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-sans font-bold text-charcoal mb-6">
          The Intelligence Layer that <br/>Sits On Top.
        </h2>
        <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto leading-relaxed">
          Soots acts as an ever-growing brain of your customer. We ingest unstructured data from your entire ecosystem, without replacing a single tool.
        </p>
      </div>

      {/* THE BRAIN VISUALIZATION */}
      <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center max-w-6xl mx-auto">
         
         {/* Background Grid Distortion (Gravity Well Effect) */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(41,98,255,0.05)_0%,rgba(0,0,0,0)_70%)] pointer-events-none"></div>

         {/* --- CENTRAL BRAIN CORE --- */}
         <div className="relative z-20 w-32 h-32 md:w-64 md:h-64">
            
            {/* The Orb Geometry */}
            <div className="absolute inset-0 rounded-full border border-blueprint-blue/30 animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-dashed border-charcoal/50 animate-[spin_15s_linear_infinite_reverse]"></div>
            
            {/* Core Glow */}
            <div className="absolute inset-0 rounded-full bg-blueprint-blue/5 blur-2xl animate-pulse"></div>

            {/* The "Brain" Network */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-20 h-20 md:w-32 md:h-32 bg-white border-2 border-charcoal rounded-full shadow-2xl flex flex-col items-center justify-center overflow-hidden z-30">
                    <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                    <Cpu size={32} className="md:w-12 md:h-12 text-charcoal mb-1 md:mb-2 relative z-10" />
                    <span className="font-sans font-bold text-xs md:text-2xl text-charcoal relative z-10">SOOTS</span>

                    {/* Scanning Line */}
                    <div className="absolute top-0 w-full h-1 bg-high-vis-orange/50 shadow-[0_0_10px_#FF6D00] animate-scan"></div>
                </div>
            </div>

            {/* Radiant Lines (The Tentacles) */}
            {/* 
                CRITICAL FIX: 
                - w-full h-full ensures SVG matches the container size exactly.
                - viewBox="0 0 1000 1000" creates a normalized coordinate system.
                - preserveAspectRatio="none" forces the SVG coordinate system to stretch 
                  exactly like the CSS percentage system, ensuring lines always meet icons.
            */}
            <svg 
                className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 overflow-visible" 
                viewBox="0 0 1000 1000" 
                preserveAspectRatio="none"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '100%',
                  height: '100%'
                }}
            >
                <defs>
                    <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" stopColor="#2962FF" stopOpacity="1" />
                        <stop offset="100%" stopColor="#2962FF" stopOpacity="0" />
                    </radialGradient>
                </defs>
                
                {INTEGRATION_TOOLS.map((tool, i) => {
                    // Use SVG_RADIUS (380) which corresponds to 38% in the 1000-unit space
                    const { x, y } = getSvgCoords(tool.angle, SVG_RADIUS);
                    return (
                        <g key={i}>
                            <line 
                                x1={x} y1={y} 
                                x2="500" y2="500" 
                                stroke="#2962FF" 
                                strokeWidth="2" 
                                strokeDasharray="8 8" 
                                opacity="0.3" 
                            />
                            {/* Data Particles moving INWARDS (from tool at x,y to center at 500,500) */}
                            <circle r="6" fill="#FF6D00">
                                <animateMotion 
                                    dur={`${3 + i * 0.5}s`} 
                                    repeatCount="indefinite" 
                                    path={`M ${x} ${y} L 500 500`}
                                    keyPoints="0;0.8" // Stop at 0.8 to disappear into brain
                                    keyTimes="0;1"
                                />
                            </circle>
                        </g>
                    );
                })}
            </svg>
         </div>

         {/* --- STATIC SATELLITES (The Tools) --- */}
         <div className="absolute inset-0 w-full h-full pointer-events-none">
             {/* Container taking up full space */}
             <div className="relative w-full h-full">
                {INTEGRATION_TOOLS.map((tool) => {
                    const style = getPosition(tool.angle, ORBIT_RADIUS_PERCENT);
                    return (
                        <div 
                            key={tool.id}
                            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto transition-transform hover:scale-110 z-30"
                            style={style}
                        >
                           <div className="bg-white p-2 md:p-4 rounded-xl shadow-lg border-2 border-gray-100 flex flex-col items-center gap-1 md:gap-2 cursor-default min-w-[60px] md:min-w-[80px]">
                              {tool.component ? tool.component : (
                                  <>
                                    {tool.icon}
                                    {tool.label && <span className="font-bold text-[8px] md:text-[10px] text-gray-500">{tool.label}</span>}
                                  </>
                              )}
                           </div>
                        </div>
                    );
                })}
             </div>
         </div>

      </div>

      {/* Footer / Value Prop */}
      <div className="max-w-4xl mx-auto mt-12 text-center px-4">
         <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-white border border-charcoal px-6 py-4 rounded-xl md:rounded-full shadow-lg">
             <div className="flex items-center gap-2 text-left border-b md:border-b-0 md:border-r border-gray-300 pb-2 md:pb-0 md:pr-4 w-full md:w-auto">
                 <Server size={20} className="text-gray-400" />
                 <div>
                     <div className="font-bold text-xs text-charcoal">ZERO MIGRATION</div>
                     <div className="text-[10px] text-gray-500 font-mono">Keep your database</div>
                 </div>
             </div>
             <div className="flex items-center gap-2 text-left border-b md:border-b-0 md:border-r border-gray-300 pb-2 md:pb-0 md:pr-4 w-full md:w-auto">
                 <Globe size={20} className="text-gray-400" />
                 <div>
                     <div className="font-bold text-xs text-charcoal">ZERO TRAINING</div>
                     <div className="text-[10px] text-gray-500 font-mono">Teams use existing tools</div>
                 </div>
             </div>
             <div className="flex items-center gap-2 text-left w-full md:w-auto">
                 <ArrowUpRight size={20} className="text-high-vis-orange" />
                 <div>
                     <div className="font-bold text-xs text-charcoal">INSTANT VALUE</div>
                     <div className="text-[10px] text-gray-500 font-mono">Day 1 Intelligence</div>
                 </div>
             </div>
         </div>
         <p className="mt-8 font-mono text-sm text-gray-400 uppercase tracking-widest">
            // UNIVERSAL DATA INGESTION 
         </p>
      </div>

    </Section>
  );
};
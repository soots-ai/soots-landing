import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  noGrid?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, noGrid = false }) => {
  return (
    <section id={id} className={`relative w-full py-20 px-4 md:px-8 overflow-hidden ${noGrid ? '' : 'grid-bg'} ${className}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};
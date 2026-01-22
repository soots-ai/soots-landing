import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', onClick }) => {
  const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  // Sharp corners, technical look
  const primaryStyles = "bg-high-vis-orange text-white hover:bg-orange-700 shadow-[4px_4px_0px_0px_rgba(51,51,51,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] border-2 border-charcoal py-4 px-8 text-lg rounded-none";
  
  const ghostStyles = "bg-transparent text-charcoal border-4 border-charcoal hover:bg-charcoal hover:text-white py-4 px-10 text-xl rounded-none";

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variant === 'primary' ? primaryStyles : ghostStyles} ${className}`}
    >
      {children}
    </button>
  );
};
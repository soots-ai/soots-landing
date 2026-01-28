import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button',
  disabled = false
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  // Sharp corners, technical look
  const primaryStyles = "bg-high-vis-orange text-white hover:bg-orange-700 shadow-[4px_4px_0px_0px_rgba(51,51,51,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] border-2 border-charcoal py-4 px-8 text-lg rounded-none";
  
  const ghostStyles = "bg-transparent text-charcoal border-4 border-charcoal hover:bg-charcoal hover:text-white py-4 px-10 text-xl rounded-none";

  const disabledStyles = "opacity-50 cursor-not-allowed hover:bg-high-vis-orange hover:shadow-[4px_4px_0px_0px_rgba(51,51,51,1)] hover:translate-x-0 hover:translate-y-0";

  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variant === 'primary' ? primaryStyles : ghostStyles} ${disabled ? disabledStyles : ''} ${className}`}
    >
      {children}
    </button>
  );
};
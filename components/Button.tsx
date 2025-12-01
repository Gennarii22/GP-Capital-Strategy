import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "font-mono text-sm uppercase tracking-widest px-8 py-4 transition-all duration-300 relative overflow-hidden group border focus:outline-none focus:ring-1 focus:ring-offset-0";
  
  const variants = {
    primary: "bg-white text-black border-white hover:bg-transparent hover:text-white focus:ring-white",
    secondary: "bg-transparent text-gray-400 border-gray-800 hover:border-gray-500 hover:text-white focus:ring-gray-500",
    danger: "bg-infraredRed/10 text-red-500 border-red-900/50 hover:bg-infraredRed/20 hover:border-red-500 focus:ring-red-500"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2 justify-center">
        {children}
      </span>
      {/* Tactical corner markers */}
      <span className="absolute top-0 left-0 w-1 h-1 bg-current opacity-50"></span>
      <span className="absolute bottom-0 right-0 w-1 h-1 bg-current opacity-50"></span>
    </button>
  );
};
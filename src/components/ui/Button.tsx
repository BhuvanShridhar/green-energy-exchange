
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children,
  fullWidth = false,
  ...props 
}: ButtonProps) => {
  // Base styles
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-nexus-green/50 focus:ring-offset-2';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-nexus-green text-white hover:bg-nexus-green/90 shadow-lg shadow-nexus-green/20 hover:shadow-nexus-green/30 active:scale-[0.98]',
    secondary: 'bg-nexus-gray-light text-nexus-gray-dark hover:bg-nexus-gray hover:text-foreground active:scale-[0.98]',
    outline: 'border border-nexus-green/50 text-nexus-green hover:bg-nexus-green/5 active:scale-[0.98]',
    ghost: 'text-nexus-gray-dark hover:bg-nexus-gray-light active:scale-[0.98]',
  };
  
  // Size styles
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };

  // Width styles
  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        widthStyles,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

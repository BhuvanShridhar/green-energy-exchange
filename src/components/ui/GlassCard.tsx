
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: 'light' | 'medium' | 'heavy';
  children: React.ReactNode;
}

const GlassCard = ({ 
  intensity = 'medium', 
  className, 
  children, 
  ...props 
}: GlassCardProps) => {
  // Different blur intensities
  const blurIntensity = {
    light: 'backdrop-blur-sm bg-white/40 border-white/10',
    medium: 'backdrop-blur-md bg-white/60 border-white/20',
    heavy: 'backdrop-blur-lg bg-white/80 border-white/30'
  };

  return (
    <div 
      className={cn(
        'rounded-2xl border shadow-lg transition-all duration-300',
        blurIntensity[intensity],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;

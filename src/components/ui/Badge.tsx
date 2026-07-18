import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'secondary' | 'master' | 'photography' | 'anime' | '3d render' | 'ui / ux' | 'sci-fi' | 'nature' | 'architecture';
}

export const Badge = ({ className = '', variant = 'default', ...props }: BadgeProps) => {
  const baseStyles = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold transition-colors select-none';

  const variants = {
    default: 'bg-[#6366F1] text-white',
    outline: 'border border-[#E2E8F0] text-[#0F172A]',
    secondary: 'bg-[#F1F5F9] text-[#64748B]',
    
    // Category specific
    master: 'bg-[#EEF2FF] text-[#6366F1] border border-[#DDD6FE]',
    photography: 'bg-[#E0F2FE] text-[#0369A1]',
    anime: 'bg-[#FDF2F8] text-[#BE185D]',
    '3d render': 'bg-[#ECFDF5] text-[#047857]',
    'ui / ux': 'bg-[#FAF5FF] text-[#6B21A8]',
    'sci-fi': 'bg-[#ECFEFF] text-[#0891B2]',
    nature: 'bg-[#F0FDF4] text-[#166534]',
    architecture: 'bg-[#FFF7ED] text-[#C2410C]'
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`.trim();

  return (
    <span className={classes} {...props} />
  );
};

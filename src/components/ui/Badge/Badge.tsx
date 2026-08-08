import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'secondary' | 'master' | 'photography' | 'anime' | '3d render' | 'ui / ux' | 'sci-fi' | 'nature' | 'architecture';
}

export const Badge = ({ className = '', variant = 'default', ...props }: BadgeProps) => {
  const baseStyles = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold transition-colors select-none';

  const variants = {
    default: 'bg-primary text-white',
    outline: 'border border-border text-text-primary',
    secondary: 'bg-surface text-text-secondary',

    // Category specific
    master: 'bg-accent-light text-primary border border-secondary-border',
    photography: 'bg-sky-100 text-sky-800',
    anime: 'bg-pink-100 text-pink-800',
    '3d render': 'bg-emerald-100 text-emerald-800',
    'ui / ux': 'bg-purple-100 text-purple-800',
    'sci-fi': 'bg-cyan-100 text-cyan-800',
    nature: 'bg-green-100 text-green-800',
    architecture: 'bg-amber-100 text-amber-800'
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`.trim();

  return (
    <span className={classes} {...props} />
  );
};

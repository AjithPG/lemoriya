import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'success';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'md', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer';
    
    const variants = {
      default: 'bg-primary hover:bg-primary-hover text-white shadow-sm',
      outline: 'bg-card border border-border text-foreground hover:bg-surface hover:border-border-light',
      ghost: 'bg-transparent text-foreground-muted hover:text-foreground hover:bg-surface',
      link: 'bg-transparent text-primary hover:underline border-transparent p-0',
      success: 'bg-success hover:bg-success/90 text-white shadow-sm'
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-xs rounded-md gap-1.5',
      md: 'px-4 py-2.5 text-sm rounded-lg gap-2',
      lg: 'px-6 py-3 text-sm rounded-xl gap-2',
      icon: 'p-0'
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`.trim();

    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

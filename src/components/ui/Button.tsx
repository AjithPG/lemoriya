import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'success';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'md', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer';
    
    const variants = {
      default: 'bg-[#6366F1] hover:bg-[#4F46E5] text-white shadow-sm shadow-[#6366F1]/10',
      outline: 'bg-white border border-[#E2E8F0] text-[#0F172A] hover:bg-slate-50 hover:border-[#CBD5E1]',
      ghost: 'bg-transparent text-[#64748B] hover:text-[#0F172A] hover:bg-slate-50',
      link: 'bg-transparent text-[#6366F1] hover:underline border-transparent p-0',
      success: 'bg-[#10B981] hover:bg-[#059669] text-white shadow-sm shadow-[#10B981]/10'
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

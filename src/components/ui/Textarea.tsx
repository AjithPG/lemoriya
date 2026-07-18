import * as React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`flex w-full bg-white border border-[#E2E8F0] rounded-xl p-3.5 text-xs text-[#0F172A] leading-relaxed focus:outline-none focus:border-[#6366F1] transition-colors resize-none disabled:cursor-not-allowed disabled:opacity-50 ${className}`.trim()}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

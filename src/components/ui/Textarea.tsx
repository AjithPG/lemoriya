import * as React from 'react'

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`flex w-full bg-card border border-border rounded-xl p-3.5 text-xs text-text-primary leading-relaxed focus:outline-none focus:border-primary transition-colors resize-none disabled:cursor-not-allowed disabled:opacity-50 ${className}`.trim()}
        {...props}
      />
    )
  }
)

Textarea.displayName = 'Textarea'

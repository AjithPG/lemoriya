import * as React from 'react'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', type = 'text', ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={`flex w-full px-4 py-2.5 text-sm bg-card border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${className}`.trim()}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

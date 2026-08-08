import * as React from 'react';

export const Tabs = ({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`flex flex-col gap-2 ${className}`.trim()} {...props} />
);

export const TabsList = ({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`flex items-center border-b border-border ${className}`.trim()} {...props} />
);

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

export const TabsTrigger = ({ 
  className = '', 
  isActive = false, 
  children,
  ...props 
}: TabsTriggerProps) => (
  <button
    type="button"
    className={`py-3 text-xs font-bold relative focus:outline-none cursor-pointer transition-colors ${
      isActive ? 'text-primary' : 'text-text-secondary hover:text-text-primary'
    } ${className}`.trim()}
    {...props}
  >
    {children}
    {isActive && (
      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
    )}
  </button>
);

export const TabsContent = ({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={className} {...props} />
);

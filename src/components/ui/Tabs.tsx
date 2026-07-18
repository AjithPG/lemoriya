import * as React from 'react';

export const Tabs = ({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`flex flex-col gap-2 ${className}`.trim()} {...props} />
);

export const TabsList = ({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`flex items-center border-b border-[#E2E8F0] ${className}`.trim()} {...props} />
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
      isActive ? 'text-[#6366F1]' : 'text-[#64748B] hover:text-[#0F172A]'
    } ${className}`.trim()}
    {...props}
  >
    {children}
    {isActive && (
      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#6366F1]" />
    )}
  </button>
);

export const TabsContent = ({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={className} {...props} />
);

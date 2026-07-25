import { Button } from '@/components/ui/Button';

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const EmptyState = ({ title, description, actionLabel, onAction }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center border-t border-[#E2E8F0] bg-[#FFFFFF] min-h-[50vh] select-none">
      <div className="w-16 h-16 border border-[#E2E8F0] flex items-center justify-center rounded-full mb-6 bg-slate-50">
        <svg
          className="w-6 h-6 text-[#64748B]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h3 className="text-2xl font-extrabold text-[#0F172A] mb-2">{title}</h3>
      <p className="text-sm text-[#64748B] max-w-sm mb-6 leading-relaxed font-medium">{description}</p>
      {actionLabel && onAction && (
        <Button
          onClick={onAction}
          variant="default"
          className="cursor-pointer"
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

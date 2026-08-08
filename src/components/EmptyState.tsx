import { Button } from '@/components/ui/Button/Button'

interface EmptyStateProps {
  title: string
  description: string
  actionLabel?: string
  onAction?: () => void
}

export const EmptyState = ({ title, description, actionLabel, onAction }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center border-t border-border bg-card min-h-[50vh] select-none rounded-2xl">
      <div className="w-16 h-16 border border-border flex items-center justify-center rounded-full mb-6 bg-surface">
        <svg
          className="w-6 h-6 text-text-secondary"
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
      <h3 className="text-2xl font-extrabold text-text-primary mb-2">{title}</h3>
      <p className="text-sm text-text-secondary max-w-sm mb-6 leading-relaxed font-medium">
        {description}
      </p>
      {actionLabel && onAction && (
        <Button onClick={onAction} variant="default" className="cursor-pointer">
          {actionLabel}
        </Button>
      )}
    </div>
  )
}

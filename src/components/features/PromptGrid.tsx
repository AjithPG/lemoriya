import { PromptItem } from './promptsData'
import { PromptCard } from './PromptCard'

interface PromptGridProps {
  prompts: PromptItem[]
  onCardClick: (id: string) => void
}

export const PromptGrid = ({ prompts, onCardClick }: PromptGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 pb-8 bg-transparent">
      {prompts.map((prompt) => (
        <PromptCard key={prompt.id} promptItem={prompt} onClick={() => onCardClick(prompt.id)} />
      ))}
    </div>
  )
}

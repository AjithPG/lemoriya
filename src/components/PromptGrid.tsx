'use client'

import { PromptItem } from '@/data/promptsData'
import { PromptCard } from './PromptCard'
import { slugify } from '@/lib/slugify'
import { useRouter } from 'next/navigation'

interface PromptGridProps {
  prompts: PromptItem[]
}

export const PromptGrid = ({ prompts }: PromptGridProps) => {
  const router = useRouter()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 pb-8 bg-transparent">
      {prompts.map((prompt) => (
        <PromptCard
          key={prompt.id}
          promptItem={prompt}
          onClick={() => router.push(`/prompt/${slugify(prompt.title)}`)}
        />
      ))}
    </div>
  )
}

'use client'

import DashboardLayout from '@/app/(dashboard)/layout'

import * as React from 'react'
import { useRouter, useParams } from 'next/navigation'
import { PromptDetail } from '@/components/PromptDetail'
import { MOCK_PROMPTS, PromptItem } from '@/data/promptsData'
import { slugify } from '@/lib/slugify'

// Find a prompt by its slug (using the prompt's title slug)
const findPrompt = (slug: string): PromptItem | undefined => {
  return MOCK_PROMPTS.find((p) => slugify(p.title) === slug)
}

export default function PromptPage() {
  const params = useParams<{ slug: string }>()
  const router = useRouter()
  const prompt = React.useMemo(() => findPrompt(params.slug), [params.slug])

  if (!prompt) {
    return (
      <DashboardLayout>
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-xl font-bold text-[#0F172A]">Prompt not found</h2>
          <button
            onClick={() => router.back()}
            className="mt-4 px-4 py-2 bg-[#6366F1] text-white rounded"
          >
            Go Back
          </button>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <PromptDetail
        promptItem={prompt}
        onBack={() => router.back()}
        allPrompts={MOCK_PROMPTS}
        onSelectPrompt={(id) => {
          const p = MOCK_PROMPTS.find((p) => p.id === id)
          return router.push(`/prompt/${p ? slugify(p.title) : ''}`)
        }}
      />
    </DashboardLayout>
  )
}

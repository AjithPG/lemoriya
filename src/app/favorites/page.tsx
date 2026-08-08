'use client'

import * as React from 'react'
import DashboardLayout from '../(dashboard)/layout'
import { Header } from '@/components/layout/Header'
import { PromptGrid } from '@/components/PromptGrid'
import { EmptyState } from '@/components/EmptyState'
import { useDashboard } from '@/context/DashboardContext'
import { MOCK_PROMPTS } from '@/data/promptsData'

function FavoritesContent() {
  const { favorites, searchQuery } = useDashboard()

  const favoritePrompts = React.useMemo(() => {
    let result = MOCK_PROMPTS.filter((p) => favorites.includes(p.id))

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.prompt.toLowerCase().includes(q)
      )
    }

    return result
  }, [favorites, searchQuery])

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex-1 overflow-y-auto bg-background p-6">
        {favoritePrompts.length === 0 ? (
          <EmptyState
            title="No Favorites Yet"
            description="Build your collection by browsing prompt cards and saving your favorites."
            actionLabel="Browse Prompts"
            onAction={() => (window.location.href = '/')}
          />
        ) : (
          <PromptGrid prompts={favoritePrompts} />
        )}
      </div>
    </div>
  )
}
export default function FavoritesPage() {
  return (
    <DashboardLayout>
      <FavoritesContent />
    </DashboardLayout>
  )
}

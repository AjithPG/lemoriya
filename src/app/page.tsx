'use client'

import * as React from 'react'

import { ContributeForm } from '@/components/ContributeForm'
import { EmptyState } from '@/components/EmptyState'
import { AnnouncementBanner } from '@/components/layout/AnnouncementBanner'
import { Header } from '@/components/layout/Header'

import { PromptGrid } from '@/components/PromptGrid'
import { useDashboard } from '@/context/DashboardContext'
import { MOCK_PROMPTS, PromptItem } from '@/data/promptsData'

import DashboardLayout from './(dashboard)/layout'
import { HeroSection } from '@/components/HeroSection'
import { CategoriesSection } from '@/components/CategoriesSection'
import { TrendingPostersSection } from '@/components/TrendingPostersSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { Footer } from '@/components/layout/Footer'

export function HomeContent() {
  const {
    currentCategory,
    currentView,
    setCurrentView,
    searchQuery,
    setSearchQuery,
    setCurrentCategory,
    favorites,
  } = useDashboard()

  // Local state for prompts (initialized with mock data, supports adding new ones)
  const [prompts, setPrompts] = React.useState<PromptItem[]>(MOCK_PROMPTS)
  const [showBanner, setShowBanner] = React.useState<boolean>(true)

  // Filter prompts based on current category, search query, and view
  const filteredPrompts = React.useMemo(() => {
    let result = [...prompts]

    // 1. Filter by category (if in browse view)
    if (currentView === 'browse' && currentCategory) {
      result = result.filter((p) => p.category.toLowerCase() === currentCategory.toLowerCase())
    }

    // 2. Filter by search query (case-insensitive match on title, description, or prompt)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.prompt.toLowerCase().includes(q)
      )
    }

    // 3. Filter/Sort by specialized view
    if (currentView === 'favorites') {
      result = result.filter((p) => favorites.includes(p.id))
    } else if (currentView === 'trending') {
      // Sort descending by views (e.g. "12.4k" -> 12400)
      const parseViews = (str: string) => {
        let clean = str.toLowerCase().trim()
        let mult = 1
        if (clean.endsWith('k')) {
          mult = 1000
          clean = clean.slice(0, -1)
        }
        return (parseFloat(clean.replace(/,/g, '')) || 0) * mult
      }
      result = result.sort((a, b) => parseViews(b.views || '0') - parseViews(a.views || '0'))
    }

    return result
  }, [prompts, currentCategory, currentView, searchQuery, favorites])

  // Handle addition of new user prompt
  const handleAddPrompt = (newPrompt: PromptItem) => {
    setPrompts((prev) => [newPrompt, ...prev])
  }

  // Determine what body component to render
  const renderContent = () => {
    // If contribute page is active
    if (currentView === 'contribute') {
      return (
        <ContributeForm
          onSubmitSuccess={(newPrompt) => {
            handleAddPrompt(newPrompt)
            setCurrentView('browse')
          }}
        />
      )
    }

    // If favorites list is empty
    if (currentView === 'favorites' && filteredPrompts.length === 0) {
      return (
        <EmptyState
          title="No Favorites Yet"
          description="Build your collection by browsing prompt cards and saving your favorites to access them instantly."
          actionLabel="Browse Prompts"
          onAction={() => {
            setCurrentView('browse')
            setCurrentCategory(null)
          }}
        />
      )
    }

    // If search/filter returns empty list
    if (filteredPrompts.length === 0) {
      return (
        <EmptyState
          title="No Prompts Found"
          description="We couldn't find any prompts matching your criteria. Try refining your search query or choosing another category."
          actionLabel="Clear Filters"
          onAction={() => {
            setSearchQuery('')
            setCurrentCategory(null)
          }}
        />
      )
    }

    // Normal grid feed view
    return (
      <div id="prompts-feed" className="flex-grow flex flex-col">
        {/* Render Banner above prompt grid */}
        {/* {showBanner && currentView === 'browse' && (
          <AnnouncementBanner onClose={() => setShowBanner(false)} />
        )} */}

        {currentView === 'trending' && (
          <div className="px-8 pt-2 pb-4">
            <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider font-bold">
              Sorted by view count (Highest to Lowest)
            </span>
          </div>
        )}

        <PromptGrid prompts={filteredPrompts} />
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      {/* Top Header Navigation */}
      <Header />
      <div className="flex-1 overflow-y-scroll bg-background">
        <HeroSection />
        <CategoriesSection />
        <TrendingPostersSection />
        <FeaturesSection />

        <Footer />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <DashboardLayout>
      <HomeContent />
    </DashboardLayout>
  )
}

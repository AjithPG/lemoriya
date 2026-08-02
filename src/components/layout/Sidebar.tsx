'use client'

import { useDashboard } from '@/context/DashboardContext'
import { Button } from '@/components/ui/Button'
import { Sparkles, LayoutGrid, TrendingUp, Star, FolderTree } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { CATEGORIES_WITH_COUNTS } from '@/data/promptsData'

export const Sidebar = () => {
  const { currentCategory, setCurrentCategory, currentView, setCurrentView, setSelectedPromptId } =
    useDashboard()
  const router = useRouter()

  const navItems = [
    {
      id: 'browse',
      label: 'All Prompts',
      icon: <LayoutGrid className="w-4 h-4" />,
    },
    {
      id: 'trending',
      label: 'Trending',
      icon: <TrendingUp className="w-4 h-4" />,
    },
    {
      id: 'favorites',
      label: 'Favorites',
      icon: <Star className="w-4 h-4" />,
    },
    {
      id: 'categories',
      label: 'Categories',
      icon: <FolderTree className="w-4 h-4" />,
    },
  ]

  return (
    <div className="flex flex-col h-full bg-card border-r border-border text-text-primary select-none">
      {/* Brand Header */}
      <div className="p-5 border-b border-border flex flex-col gap-1.5 bg-card">
        <div
          className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => {
            setCurrentView('browse')
            setCurrentCategory(null)
            setSelectedPromptId(null)
          }}
        >
          {/* Brand Logo Icon */}
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white shadow-sm shadow-primary/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-sans text-lg font-bold tracking-tight leading-none text-text-primary">
              Lemoriya
            </h1>
            <p className="text-[11px] font-sans tracking-wide text-text-secondary mt-1 font-medium">
              The lost Prompts
            </p>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="px-3 py-4 border-b border-border">
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = currentView === item.id && currentCategory === null
            return (
              <Button
                key={item.id}
                onClick={() => {
                  const routeMap: Record<string, string> = {
                    browse: '/',
                    trending: '/trending',
                    favorites: '/favorites',
                    categories: '/categories',
                  }
                  const path = routeMap[item.id]
                  if (path) {
                    router.push(path)
                  } else {
                    setCurrentView(item.id)
                    setCurrentCategory(null)
                    setSelectedPromptId(null)
                  }
                }}
                variant="ghost"
                className={`w-full flex items-center justify-start gap-3 px-3 py-2.5 text-sm font-semibold rounded-xl transition-all duration-150 ${
                  isActive
                    ? 'bg-accent-light text-primary hover:bg-accent-light hover:text-primary font-bold'
                    : 'bg-transparent text-text-secondary hover:bg-surface hover:text-text-primary'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Button>
            )
          })}
        </nav>
      </div>

      {/* Categories Section */}
      <div className="px-3 py-4 flex-1 overflow-y-auto bg-card">
        <h2 className="text-[10px] font-sans font-bold tracking-widest text-text-muted uppercase mb-3 px-3">
          Categories
        </h2>
        <div className="flex flex-col gap-1">
          {CATEGORIES_WITH_COUNTS.map((cat) => {
            const isActive = currentCategory === cat.name
            return (
              <Button
                key={cat.name}
                onClick={() => {
                  setCurrentCategory(cat.name)
                  setCurrentView('browse')
                  setSelectedPromptId(null)
                }}
                variant="ghost"
                className={`flex items-center justify-between w-full px-3 py-2 text-sm font-medium transition-all duration-150 rounded-xl ${
                  isActive
                    ? 'bg-accent-light text-primary hover:bg-accent-light hover:text-primary font-semibold'
                    : 'bg-transparent text-text-secondary hover:bg-surface hover:text-text-primary'
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-xs font-mono text-text-muted font-medium">{cat.count}</span>
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

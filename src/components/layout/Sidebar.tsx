'use client'

import { useDashboard } from '@/context/DashboardContext'
import { Button } from '@/components/ui/Button'
import { Sparkles, LayoutGrid, TrendingUp, Star, FolderTree } from 'lucide-react'
import { useRouter } from 'next/navigation'

export const Sidebar = () => {
  const { currentCategory, setCurrentCategory, currentView, setCurrentView, setSelectedPromptId } =
    useDashboard()
  const router = useRouter()

  return (
    <div className="flex flex-col h-full bg-[#FFFFFF] border-r border-[#E2E8F0] text-[#0F172A] select-none">
      {/* Brand Header */}
      <div className="p-6 border-b border-[#E2E8F0] flex flex-col gap-1.5 bg-[#FFFFFF]">
        <div
          className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => {
            setCurrentView('browse')
            setCurrentCategory(null)
            setSelectedPromptId(null)
          }}
        >
          {/* Lightning Bolt Logo Icon */}
          <div className="w-8 h-8 bg-[#6366F1] rounded-lg flex items-center justify-center text-white shadow-sm shadow-[#6366F1]/10">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-sans text-lg font-bold tracking-tight leading-none text-[#0F172A]">
              <span>Lemoriya</span>
            </h1>
            <p className="text-[10px] font-sans tracking-wide text-[#64748B] mt-0.5 font-medium">
              The lost Prompts
            </p>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="px-4 py-6 border-b border-[#E2E8F0]">
        <nav className="flex flex-col gap-1">
          {[
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
          ].map((item) => {
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
                className={`w-full flex items-center justify-start gap-3 px-3 py-2.5 text-sm font-semibold rounded-lg transition-all duration-150 ${
                  isActive
                    ? 'bg-[#EEF2FF] text-[#6366F1] hover:bg-[#EEF2FF] hover:text-[#6366F1]'
                    : 'bg-transparent text-[#64748B] hover:bg-slate-50 hover:text-[#0F172A]'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Button>
            )
          })}
        </nav>
      </div>

      {/* Categories List Section */}
      {/* <div className="px-4 py-6 flex-1 overflow-y-auto bg-[#FFFFFF]">
        <h2 className="text-[10px] font-sans font-bold tracking-widest text-[#94A3B8] uppercase mb-3 px-3">
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
                className={`flex items-center justify-between w-full px-3 py-2 text-sm font-semibold transition-all duration-150 rounded-lg ${
                  isActive
                    ? 'bg-[#EEF2FF] text-[#6366F1] hover:bg-[#EEF2FF] hover:text-[#6366F1]'
                    : 'bg-transparent text-[#64748B] hover:bg-slate-50 hover:text-[#0F172A]'
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-xs font-mono text-[#94A3B8] font-medium">{cat.count}</span>
              </Button>
            )
          })}
        </div>
      </div> */}

      {/* Contribute a Prompt Box & Footer */}
      {/* <div className="p-4 border-t border-[#E2E8F0] bg-[#FFFFFF] flex flex-col gap-4">
        <div className="bg-[#F8F9FC] border border-[#E2E8F0] rounded-2xl p-4 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#EEF2FF] text-[#6366F1] rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h4 className="text-xs font-extrabold text-[#0F172A]">Contribute a Prompt</h4>
          </div>
          <p className="text-[11px] text-[#64748B] leading-relaxed">
            Share your best prompts with the community.
          </p>
          <Button
            onClick={() => {
              setCurrentView('contribute')
              setCurrentCategory(null)
              setSelectedPromptId(null)
            }}
            variant="default"
            className="w-full py-2 text-xs font-bold rounded-lg cursor-pointer"
          >
            Submit Prompt
          </Button>
        </div>
      </div> */}
    </div>
  )
}

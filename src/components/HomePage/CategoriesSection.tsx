'use client'
import * as React from 'react'
import {
  Utensils,
  Shirt,
  Building2,
  Dumbbell,
  Tag,
  GraduationCap,
  Calendar,
  ArrowRight,
} from 'lucide-react'
import { useDashboard } from '@/context/DashboardContext'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button/Button'

export interface CategoryCardItem {
  id: string
  name: string
  count: string
  icon: React.ElementType
  color: string // Icon accent color
  bgGlow: string // Icon background pill/glow
}

export const CATEGORIES_DATA: CategoryCardItem[] = [
  {
    id: 'restaurant',
    name: 'Restaurant',
    count: '1,250+ Prompts',
    icon: Utensils,
    color: 'text-orange-500',
    bgGlow: 'bg-orange-500/10 border-orange-500/20 group-hover:bg-orange-500/20',
  },
  {
    id: 'fashion',
    name: 'Fashion',
    count: '1,080+ Prompts',
    icon: Shirt,
    color: 'text-pink-500',
    bgGlow: 'bg-pink-500/10 border-pink-500/20 group-hover:bg-pink-500/20',
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    count: '980+ Prompts',
    icon: Building2,
    color: 'text-blue-500',
    bgGlow: 'bg-blue-500/10 border-blue-500/20 group-hover:bg-blue-500/20',
  },
  {
    id: 'fitness',
    name: 'Fitness',
    count: '920+ Prompts',
    icon: Dumbbell,
    color: 'text-emerald-500',
    bgGlow: 'bg-emerald-500/10 border-emerald-500/20 group-hover:bg-emerald-500/20',
  },
  {
    id: 'sale-offers',
    name: 'Sale & Offers',
    count: '1,560+ Prompts',
    icon: Tag,
    color: 'text-amber-500',
    bgGlow: 'bg-amber-500/10 border-amber-500/20 group-hover:bg-amber-500/20',
  },
  {
    id: 'education',
    name: 'Education',
    count: '870+ Prompts',
    icon: GraduationCap,
    color: 'text-purple-500',
    bgGlow: 'bg-purple-500/10 border-purple-500/20 group-hover:bg-purple-500/20',
  },
  {
    id: 'events',
    name: 'Events',
    count: '1,230+ Prompts',
    icon: Calendar,
    color: 'text-yellow-500',
    bgGlow: 'bg-yellow-500/10 border-yellow-500/20 group-hover:bg-yellow-500/20',
  },
]

export const CategoriesSection = () => {
  const { setCurrentCategory, currentCategory } = useDashboard()
  const router = useRouter()
  const handleCategoryClick = (categoryName: string) => {
    setCurrentCategory(categoryName)
    // const feedEl = document.getElementById('prompts-feed')
    // if (feedEl) {
    //   feedEl.scrollIntoView({ behavior: 'smooth' })
    // }
  }

  return (
    <section className="my-8 px-4 sm:px-6">
      <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl transition-colors duration-200">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl tracking-wide uppercase text-text-primary">
              EXPLORE BY <span className="text-primary">CATEGORIES</span>
            </h2>
            <p className="text-text-secondary text-sm font-medium mt-1">
              Find the perfect prompt for your poster needs
            </p>
          </div>

          <Button
            onClick={() => router.push('/categories')}
            variant="outline"
            size="sm"
            className="self-start sm:self-auto flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border-border hover:bg-card-hover text-text-primary text-xs font-semibold cursor-pointer transition-all duration-200"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-3.5 h-3.5 text-text-secondary" />
          </Button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {CATEGORIES_DATA.map((cat) => {
            const IconComponent = cat.icon
            const isSelected = currentCategory === cat.name

            return (
              <div
                key={cat.id}
                onClick={() => handleCategoryClick(cat.name)}
                className={`group relative flex flex-col items-center justify-center p-5 rounded-2xl border transition-all duration-200 cursor-pointer select-none ${
                  isSelected
                    ? 'bg-accent-light border-primary shadow-md shadow-primary/10 scale-[1.02]'
                    : 'bg-surface hover:bg-card-hover border-border hover:border-primary/40 hover:-translate-y-1'
                }`}
              >
                {/* Icon Circle */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-3 transition-colors ${cat.bgGlow}`}
                >
                  <IconComponent className={`w-6 h-6 ${cat.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-text-primary tracking-tight text-center">
                  {cat.name}
                </h3>

                {/* Prompts Count */}
                <span className="text-[11px] font-medium text-text-muted mt-1 text-center">
                  {cat.count}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

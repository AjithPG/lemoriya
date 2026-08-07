'use client'

import * as React from 'react'
import Image from 'next/image'
import { ArrowRight, Eye, Copy, Check, Sparkles } from 'lucide-react'
import { useDashboard } from '@/context/DashboardContext'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'

export interface TrendingPosterItem {
  id: string
  title: string
  category: string
  badgeColor: string
  imageUrl: string
  prompt: string
  views: string
  headline: string
  subheadline: string
  discountBadge?: string
}

export const TRENDING_POSTERS_DATA: TrendingPosterItem[] = [
  {
    id: 'trending-1',
    title: 'Delicious Pizza Restaurant Poster',
    category: 'Restaurant',
    badgeColor: 'bg-red-500/90 text-white border-red-400/30',
    imageUrl:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    prompt:
      'Commercial pizza restaurant advertisement poster, delicious wood-fired pepperoni pizza, steaming hot cheese pull, dark moody studio lighting, bold golden typography "Delicious PIZZA Hot & Fresh", 30% OFF offer badge, high resolution food photography --ar 3:4',
    views: '24.8k',
    headline: 'Delicious PIZZA',
    subheadline: 'Hot & Fresh',
    discountBadge: '30% OFF',
  },
  {
    id: 'trending-2',
    title: 'Build Your Strength Gym Poster',
    category: 'Fitness',
    badgeColor: 'bg-emerald-500/90 text-white border-emerald-400/30',
    imageUrl:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
    prompt:
      'High-impact fitness gym poster, muscular athletic bodybuilder, dark dramatic spotlighting, sweat droplets, bold metallic 3D typography "BUILD YOUR STRENGTH", "NO PAIN NO GAIN" motto at bottom, energetic cinematic atmosphere --ar 3:4',
    views: '19.4k',
    headline: 'BUILD YOUR STRENGTH',
    subheadline: 'NO PAIN NO GAIN',
  },
  {
    id: 'trending-3',
    title: 'Summer Sale Fashion Poster',
    category: 'Fashion',
    badgeColor: 'bg-purple-500/90 text-white border-purple-400/30',
    imageUrl:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80',
    prompt:
      'Trendy summer fashion collection poster, stylish female model in chic streetwear, pastel purple neon aesthetic background, modern typography "SUMMER SALE 50% OFF", "SHOP NOW" call to action button, editorial magazine style --ar 3:4',
    views: '21.2k',
    headline: 'SUMMER SALE',
    subheadline: '50% OFF',
  },
  {
    id: 'trending-4',
    title: 'Modern Home Real Estate Poster',
    category: 'Real Estate',
    badgeColor: 'bg-amber-500/90 text-white border-amber-400/30',
    imageUrl:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
    prompt:
      'Luxury real estate promotional poster, modern architectural villa exterior at dusk, warm interior glow, polished glass and concrete design, elegant gold serif text "MODERN HOME FOR SALE", high-end architectural rendering --ar 3:4',
    views: '16.9k',
    headline: 'MODERN HOME',
    subheadline: 'FOR SALE',
  },
  {
    id: 'trending-5',
    title: 'Shape Your Future Education Poster',
    category: 'Education',
    badgeColor: 'bg-blue-500/90 text-white border-blue-400/30',
    imageUrl:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
    prompt:
      'University academy admission open poster, smiling confident female student with notebook, modern dark teal geometric background, crisp white typography "SHAPE YOUR FUTURE", "ADMISSION OPEN 2024", professional education flyer --ar 3:4',
    views: '14.3k',
    headline: 'SHAPE YOUR FUTURE',
    subheadline: 'ADMISSION OPEN 2024',
  },
  {
    id: 'trending-6',
    title: 'Music Fest 2024 Event Poster',
    category: 'Events',
    badgeColor: 'bg-pink-500/90 text-white border-pink-400/30',
    imageUrl:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80',
    prompt:
      'Vibrant EDM music festival poster, laser light show, crowd with raised hands, glowing neon purple-pink title "MUSIC FEST 2024", "LIVE MUSIC FOOD & DRINKS", high energy concert poster design --ar 3:4',
    views: '28.5k',
    headline: 'MUSIC FEST 2024',
    subheadline: 'LIVE MUSIC & DRINKS',
  },
]

export const TrendingPostersSection = () => {
  const { setSelectedPromptId } = useDashboard()
  const router = useRouter()
  const [copiedId, setCopiedId] = React.useState<string | null>(null)

  const handleCopyPrompt = (e: React.MouseEvent, item: TrendingPosterItem) => {
    e.stopPropagation()
    navigator.clipboard.writeText(item.prompt)
    setCopiedId(item.id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <section className="my-8 px-4 sm:px-6">
      <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl transition-colors duration-200">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-text-primary">
              Trending{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary-hover bg-clip-text text-transparent">
                Posters
              </span>
            </h2>
            <p className="text-text-secondary text-sm font-medium mt-1">
              Most popular poster prompts this week
            </p>
          </div>

          <Button
            onClick={() => router.push('/trending')}
            variant="outline"
            size="sm"
            className="self-start sm:self-auto flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border-border hover:bg-card-hover text-text-primary text-xs font-semibold cursor-pointer transition-all duration-200"
          >
            <span>View All Posters</span>
            <ArrowRight className="w-3.5 h-3.5 text-text-secondary" />
          </Button>
        </div>

        {/* Posters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {TRENDING_POSTERS_DATA.map((poster) => (
            <div
              key={poster.id}
              onClick={() => setSelectedPromptId(poster.id)}
              className="group relative flex flex-col aspect-[3/4] rounded-2xl overflow-hidden border border-border bg-surface hover:border-primary/50 transition-all duration-300 cursor-pointer shadow-md hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1.5"
            >
              {/* Poster Visual Image */}
              <Image
                src={poster.imageUrl}
                alt={poster.title}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Dark Backdrop Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/30 group-hover:from-slate-950/95 transition-colors" />

              {/* Category Pill Tag */}
              <div className="absolute top-3 left-3 z-10">
                <span
                  className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md border ${poster.badgeColor}`}
                >
                  {poster.category}
                </span>
              </div>

              {/* Poster Main Content Overlay */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end z-10 text-white">
                <h3 className="font-extrabold text-lg sm:text-xl leading-tight uppercase text-white drop-shadow-md tracking-tight group-hover:text-primary-hover transition-colors">
                  {poster.headline}
                </h3>
                <p className="text-xs font-semibold text-slate-300 mt-0.5 drop-shadow">
                  {poster.subheadline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

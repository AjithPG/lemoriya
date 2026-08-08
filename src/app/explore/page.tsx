'use client'

import * as React from 'react'
import Image from 'next/image'
import {
  Search,
  LayoutGrid,
  List,
  Heart,
  Eye,
  Copy,
  Check,
  X,
  Sparkles,
  ChevronDown,
} from 'lucide-react'
import DashboardLayout from '@/app/(dashboard)/layout'
import { useDashboard } from '@/context/DashboardContext'

export interface ExplorePoster {
  id: string
  title: string
  category: string
  badgeColor: string
  imageUrl: string
  prompt: string
  views: string
  likes: string
  headline: string
  subheadline: string
  discountBadge?: string
  author: string
  createdAt: string
  model: string
  aspectRatio: string
}

export const EXPLORE_POSTERS_DATA: ExplorePoster[] = [
  {
    id: 'exp-1',
    title: 'Pizza Restaurant Offer',
    category: 'Restaurant',
    badgeColor: 'bg-amber-500',
    imageUrl:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    prompt:
      'Commercial pizza restaurant advertisement poster, delicious wood-fired pepperoni pizza, steaming hot cheese pull, dark moody studio lighting, bold golden typography "Delicious PIZZA Hot & Fresh", 30% OFF offer badge, high resolution food photography --ar 3:4',
    views: '12.5K',
    likes: '1.2K',
    headline: 'Delicious PIZZA',
    subheadline: 'Hot & Fresh',
    discountBadge: '30% OFF',
    author: 'Chef Prompter',
    createdAt: 'Apr 12, 2026',
    model: 'Midjourney v6',
    aspectRatio: '3:4',
  },
  {
    id: 'exp-2',
    title: 'Gym Motivation',
    category: 'Fitness',
    badgeColor: 'bg-emerald-500',
    imageUrl:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
    prompt:
      'High-impact fitness gym poster, muscular athletic bodybuilder, dark dramatic spotlighting, sweat droplets, bold metallic 3D typography "BUILD YOUR STRENGTH", "NO PAIN NO GAIN" motto at bottom, energetic cinematic atmosphere --ar 3:4',
    views: '8.7K',
    likes: '876',
    headline: 'BUILD YOUR STRENGTH',
    subheadline: 'NO PAIN NO GAIN',
    author: 'IronCraft',
    createdAt: 'Apr 10, 2026',
    model: 'DALL-E 3',
    aspectRatio: '3:4',
  },
  {
    id: 'exp-3',
    title: 'Summer Fashion Sale',
    category: 'Fashion',
    badgeColor: 'bg-purple-500',
    imageUrl:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80',
    prompt:
      'Trendy summer fashion collection poster, stylish female model in chic streetwear, pastel purple neon aesthetic background, modern typography "SUMMER SALE 50% OFF", "SHOP NOW" call to action button, editorial magazine style --ar 3:4',
    views: '15.8K',
    likes: '1.6K',
    headline: 'SUMMER SALE',
    subheadline: '50% OFF',
    author: 'VogueAI',
    createdAt: 'Apr 14, 2026',
    model: 'Midjourney v6',
    aspectRatio: '3:4',
  },
  {
    id: 'exp-4',
    title: 'Modern Home Sale',
    category: 'Real Estate',
    badgeColor: 'bg-blue-500',
    imageUrl:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
    prompt:
      'Luxury real estate promotional poster, modern architectural villa exterior at dusk, warm interior glow, polished glass and concrete design, elegant gold serif text "MODERN HOME FOR SALE", high-end architectural rendering --ar 3:4',
    views: '9.3K',
    likes: '945',
    headline: 'MODERN HOME',
    subheadline: 'FOR SALE',
    author: 'ArchViz',
    createdAt: 'Apr 08, 2026',
    model: 'Stable Diffusion XL',
    aspectRatio: '3:4',
  },
  {
    id: 'exp-5',
    title: 'School Admission 2024',
    category: 'Education',
    badgeColor: 'bg-teal-500',
    imageUrl:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
    prompt:
      'University academy admission open poster, smiling confident female student with notebook, modern dark teal geometric background, crisp white typography "SHAPE YOUR FUTURE", "ADMISSION OPEN 2024", professional education flyer --ar 3:4',
    views: '7.1K',
    likes: '654',
    headline: 'SHAPE YOUR FUTURE',
    subheadline: 'ADMISSION OPEN 2024',
    author: 'EduDesign',
    createdAt: 'Apr 05, 2026',
    model: 'Midjourney v6',
    aspectRatio: '3:4',
  },
  {
    id: 'exp-6',
    title: 'Music Fest 2024',
    category: 'Events',
    badgeColor: 'bg-pink-500',
    imageUrl:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80',
    prompt:
      'Vibrant EDM music festival poster, laser light show, crowd with raised hands, glowing neon purple-pink title "MUSIC FEST 2024", "LIVE MUSIC FOOD & DRINKS", high energy concert poster design --ar 3:4',
    views: '11.2K',
    likes: '1.1K',
    headline: 'MUSIC FEST 2024',
    subheadline: 'LIVE MUSIC & DRINKS',
    author: 'NeonPulse',
    createdAt: 'Apr 11, 2026',
    model: 'Midjourney v6',
    aspectRatio: '3:4',
  },
  {
    id: 'exp-7',
    title: 'Travel Adventure',
    category: 'Travel',
    badgeColor: 'bg-cyan-500',
    imageUrl:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80',
    prompt:
      'Epic nature mountain travel expedition poster, hiker standing on peak overlooking mirror lake, dramatic sunset sky, bold clean typography "EXPLORE THE WORLD", "IT\'S TIME FOR A NEW ADVENTURE", travel agency promotion --ar 3:4',
    views: '6.5K',
    likes: '732',
    headline: 'EXPLORE THE WORLD',
    subheadline: 'TIME FOR ADVENTURE',
    author: 'Wanderlust',
    createdAt: 'Apr 02, 2026',
    model: 'Leonardo.ai',
    aspectRatio: '3:4',
  },
  {
    id: 'exp-8',
    title: 'Flash Sale Offer',
    category: 'Sale & Offers',
    badgeColor: 'bg-red-500',
    imageUrl:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    prompt:
      'High-contrast luxury wristwatch promotional poster, sleek red lighting accents, premium dark metallic watch, bold typography "FLASH SALE UP TO 70% OFF", limited time offer badge, commercial retail design --ar 3:4',
    views: '13.4K',
    likes: '1.3K',
    headline: 'FLASH SALE',
    subheadline: 'UP TO 70% OFF',
    discountBadge: '70% OFF',
    author: 'LuxuryPrompts',
    createdAt: 'Apr 13, 2026',
    model: 'DALL-E 3',
    aspectRatio: '3:4',
  },
]

export const CATEGORIES_LIST = [
  'All',
  'Restaurant',
  'Fitness',
  'Fashion',
  'Real Estate',
  'Education',
  'Events',
  'Travel',
  'Sale & Offers',
]

function ExploreContent() {
  const { favorites, toggleFavorite } = useDashboard()

  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedCategory, setSelectedCategory] = React.useState('All')
  const [sortBy, setSortBy] = React.useState<'popular' | 'newest' | 'views'>('popular')
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid')
  const [selectedPoster, setSelectedPoster] = React.useState<ExplorePoster | null>(null)
  const [copiedPrompt, setCopiedPrompt] = React.useState(false)

  // Filter & Sort Posters
  const filteredPosters = React.useMemo(() => {
    let result = [...EXPLORE_POSTERS_DATA]

    // Filter by Category
    if (selectedCategory !== 'All') {
      result = result.filter(
        (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.prompt.toLowerCase().includes(q) ||
          item.headline.toLowerCase().includes(q)
      )
    }

    // Sort
    if (sortBy === 'views') {
      result.sort((a, b) => parseFloat(b.views) - parseFloat(a.views))
    }

    return result
  }, [selectedCategory, searchQuery, sortBy])

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedPrompt(true)
    setTimeout(() => setCopiedPrompt(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background text-text-primary px-4 sm:px-6 py-12 max-w-7xl mx-auto flex flex-col gap-8">
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border">
        <div>
          <h1 className="font-display text-4xl sm:text-5xl tracking-wide uppercase text-text-primary">
            EXPLORE <span className="text-primary">POSTERS</span>
          </h1>
          <p className="text-text-secondary text-sm sm:text-base font-medium mt-1">
            Prompts for every need. Browse, search, and discover 1,200+ AI poster generation
            prompts.
          </p>
        </div>

        {/* Search Input Bar with ⌘ K */}
        <div className="relative w-full md:w-96 shrink-0">
          <Search className="w-4 h-4 text-text-muted absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search posters, categories, styles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-card border border-border rounded-full pl-11 pr-14 py-3 text-xs sm:text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary shadow-sm transition-all"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-0.5 px-2 py-0.5 rounded-md bg-surface border border-border text-[10px] font-mono text-text-muted font-bold">
            ⌘ K
          </div>
        </div>
      </div>

      {/* Categories Filter Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES_LIST.map((cat) => {
          const isActive = selectedCategory === cat
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'bg-card border border-border text-text-secondary hover:bg-card-hover hover:text-text-primary'
              }`}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* Sub-Header Toolbar Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Posters Count */}
        <div className="text-xs sm:text-sm font-semibold text-text-secondary">
          Showing <span className="font-extrabold text-text-primary">{filteredPosters.length}</span>{' '}
          posters
        </div>

        {/* Controls: Sort Dropdown & Layout View Switcher */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          {/* Sort Selector */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-card border border-border text-text-primary text-xs font-bold rounded-xl px-4 py-2.5 pr-8 appearance-none focus:outline-none focus:border-primary cursor-pointer shadow-sm"
            >
              <option value="popular">Most Popular</option>
              <option value="views">Highest Views</option>
              <option value="newest">Latest Prompts</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-text-secondary absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Layout View Switcher */}
          <div className="flex items-center bg-card border border-border rounded-xl p-1 gap-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
              aria-label="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>

            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'list'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
              aria-label="List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Posters Grid View */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPosters.map((poster) => {
            const isFav = favorites.includes(poster.id)

            return (
              <div
                key={poster.id}
                onClick={() => setSelectedPoster(poster)}
                className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-secondary transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Poster Image Box */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface">
                  <Image
                    src={poster.imageUrl}
                    alt={poster.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white shadow-md ${poster.badgeColor}`}
                    >
                      {poster.category}
                    </span>
                  </div>

                  {/* Floating Heart Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(poster.id)
                    }}
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer"
                    aria-label="Favorite"
                  >
                    <Heart
                      className={`w-4 h-4 ${isFav ? 'text-red-500 fill-red-500' : 'text-white'}`}
                    />
                  </button>
                </div>

                {/* Poster Metadata Footer */}
                <div className="p-4 flex flex-col justify-between flex-1 gap-2 bg-card">
                  <div>
                    <h3 className="font-bold text-sm text-text-primary tracking-tight group-hover:text-primary transition-colors line-clamp-1">
                      {poster.title}
                    </h3>
                    <span className="text-xs text-text-secondary font-medium">
                      {poster.category}
                    </span>
                  </div>

                  {/* Bottom Stats */}
                  <div className="flex items-center justify-between pt-2 border-t border-border/50 text-xs font-semibold text-text-secondary">
                    <div className="flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-text-muted" />
                      <span>{poster.views}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 text-text-muted" />
                      <span>{poster.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        /* List View */
        <div className="flex flex-col gap-4">
          {filteredPosters.map((poster) => {
            const isFav = favorites.includes(poster.id)

            return (
              <div
                key={poster.id}
                onClick={() => setSelectedPoster(poster)}
                className="group bg-card border border-border rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-5 hover:border-secondary shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <div className="relative w-full sm:w-28 aspect-[3/4] rounded-xl overflow-hidden shrink-0 bg-surface">
                  <Image
                    src={poster.imageUrl}
                    alt={poster.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between w-full">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase text-white ${poster.badgeColor}`}
                      >
                        {poster.category}
                      </span>
                      <span className="text-xs text-text-muted font-medium">
                        by {poster.author}
                      </span>
                    </div>
                    <h3 className="font-bold text-base text-text-primary group-hover:text-primary transition-colors">
                      {poster.title}
                    </h3>
                    <p className="text-xs text-text-secondary font-medium line-clamp-2 mt-1">
                      {poster.prompt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-border text-xs font-semibold text-text-secondary">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5 text-text-muted" /> {poster.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5 text-text-muted" /> {poster.likes}
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleFavorite(poster.id)
                      }}
                      className="flex items-center gap-1 px-3 py-1 rounded-full bg-surface border border-border hover:bg-card-hover text-xs font-bold cursor-pointer"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${isFav ? 'text-red-500 fill-red-500' : 'text-text-secondary'}`}
                      />
                      <span>{isFav ? 'Favorited' : 'Favorite'}</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Prompt Detail Modal Popup */}
      {selectedPoster && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative flex flex-col gap-6 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPoster(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-surface hover:bg-card-hover border border-border flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Top Header */}
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-20 rounded-xl overflow-hidden border border-border shrink-0">
                <Image
                  src={selectedPoster.imageUrl}
                  alt={selectedPoster.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase text-white mb-1 ${selectedPoster.badgeColor}`}
                >
                  {selectedPoster.category}
                </span>
                <h2 className="font-bold text-xl text-text-primary leading-tight">
                  {selectedPoster.title}
                </h2>
                <span className="text-xs text-text-secondary font-medium">
                  Model: {selectedPoster.model}
                </span>
              </div>
            </div>

            {/* Prompt Text Box */}
            <div className="bg-secondary-light border border-secondary-border rounded-2xl p-5 relative">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>Exact AI Prompt</span>
                </div>

                <button
                  onClick={() => handleCopy(selectedPoster.prompt)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface hover:bg-card-hover border border-border text-text-primary text-xs font-bold transition-all cursor-pointer"
                >
                  {copiedPrompt ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-success" />
                      <span className="text-success">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-text-secondary" />
                      <span>Copy Prompt</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs sm:text-sm font-mono text-text-primary leading-relaxed">
                {selectedPoster.prompt}
              </p>
            </div>

            {/* Footer Metadata */}
            <div className="flex items-center justify-between text-xs font-semibold text-text-secondary pt-2 border-t border-border">
              <span>Created by {selectedPoster.author}</span>
              <button
                onClick={() => toggleFavorite(selectedPoster.id)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-white font-bold cursor-pointer hover:bg-primary-hover shadow-md shadow-primary/20"
              >
                <Heart
                  className={`w-4 h-4 ${favorites.includes(selectedPoster.id) ? 'fill-white' : ''}`}
                />
                <span>
                  {favorites.includes(selectedPoster.id)
                    ? 'Saved in Favorites'
                    : 'Save to Favorites'}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function ExplorePage() {
  return (
    <DashboardLayout>
      <ExploreContent />
    </DashboardLayout>
  )
}

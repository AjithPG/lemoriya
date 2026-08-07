'use client'

import * as React from 'react'
import Image from 'next/image'
import { Sparkles, Search, Copy, Check, Music, Heart, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useDashboard } from '@/context/DashboardContext'
import { useRouter } from 'next/navigation'

export const HeroSection = () => {
  const [copied, setCopied] = React.useState(false)
  const { setCurrentView } = useDashboard()
  const router = useRouter()

  const promptText =
    'Create a mouth-watering restaurant poster for a weekend burger special offer. Dark background, bold typography, steam effect, appetizing food photography...'

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleExplore = () => {
    const gridEl = document.getElementById('prompts-feed')
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative overflow-hidden bg-card border border-border text-text-primary p-6 sm:p-10 lg:p-14  transition-colors duration-200">
      {/* Background Decorative Radial Glows using token colors */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        {/* Left Column: Headline, Subtitle & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-light border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span>AI-Powered Poster Design Prompts</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-text-primary">
            Create Stunning Posters <br className="hidden sm:inline" />
            with the Perfect{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary-hover bg-clip-text text-transparent">
              AI Prompts
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-text-secondary text-base sm:text-lg font-medium leading-relaxed max-w-xl">
            Save hours of trial and error. Get expertly crafted AI prompts to generate professional
            posters for any purpose in seconds.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              onClick={() => {
                setCurrentView('contribute')
                router.push('/')
              }}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-lg shadow-primary/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-white/20" />
              <span>Generate a Prompt</span>
            </Button>

            <Button
              onClick={handleExplore}
              variant="outline"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface border-border hover:bg-card-hover text-text-primary font-semibold text-sm transition-all duration-200 cursor-pointer"
            >
              <span>Explore Posters</span>
              <Search className="w-4 h-4 text-text-secondary" />
            </Button>
          </div>

          {/* Metrics Footer */}
          <div className="flex items-center gap-6 sm:gap-8 pt-6 border-t border-border w-full text-text-secondary text-xs sm:text-sm font-semibold flex-wrap">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-md bg-accent-light border border-primary/20 text-primary">
                <Music className="w-3.5 h-3.5" />
              </span>
              <span className="text-text-primary">10K+ Posters</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-md bg-accent-light border border-primary/20 text-primary">
                <Heart className="w-3.5 h-3.5" />
              </span>
              <span className="text-text-primary">50+ Categories</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-md bg-accent-light border border-primary/20 text-primary">
                <Star className="w-3.5 h-3.5" />
              </span>
              <span className="text-text-primary">Used by Designers & Marketers</span>
            </div>
          </div>
        </div>

        {/* Right Column: Poster Preview Card & Overlay */}
        <div className="lg:col-span-5 relative flex justify-center items-center lg:justify-end mt-4 lg:mt-0">
          {/* Subtle Ambient Radial Backlight */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-accent/15 to-transparent rounded-full blur-3xl pointer-events-none scale-110" />

          {/* Top Right Annotation Arrow & Text */}
          <div className="absolute -top-6 right-0 sm:right-4 z-20 hidden sm:flex items-center gap-2 text-text-secondary font-sans text-xs font-semibold tracking-wide">
            <svg
              className="w-10 h-6 text-primary stroke-current transform -rotate-12"
              fill="none"
              viewBox="0 0 50 30"
            >
              <path
                d="M 5 5 Q 30 5 40 25 M 40 25 L 32 20 M 40 25 L 42 16"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="italic text-primary drop-shadow-sm font-medium">
              Generated with AI Prompt
            </span>
          </div>

          {/* Main Poster Showcase Frame */}
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-border shadow-2xl group bg-surface">
            <Image
              src="/images/hero_burger_poster.png"
              alt="Special Burger Weekend Poster"
              fill
              priority
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 500px"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src =
                  'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80'
              }}
            />

            {/* Poster Glass Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating AI Prompt Box Overlay */}
          <div className="absolute -bottom-6 -left-2 sm:-left-6 right-2 sm:right-auto max-w-sm sm:max-w-md bg-card/95 backdrop-blur-xl border border-border rounded-2xl p-4 sm:p-5 shadow-2xl z-20">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[11px] font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                AI Prompt
              </span>
            </div>

            <p className="text-text-secondary text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal">
              &quot;{promptText}&quot;
            </p>

            <div className="flex justify-end mt-3">
              <Button
                onClick={handleCopy}
                size="sm"
                variant="outline"
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-surface border-border text-text-primary hover:bg-card-hover rounded-lg transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-success" />
                    <span className="text-success font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-text-muted" />
                    <span>Copy Prompt</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

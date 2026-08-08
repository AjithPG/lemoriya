'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, Wand2, Search, Copy, Check, Star, Layers, LayoutGrid } from 'lucide-react'

export const HeroSection = () => {
  const [copied, setCopied] = React.useState(false)

  const samplePrompt =
    'Create a mouth-watering restaurant poster for a weekend burger special offer. Dark background, bold typography, steam effect, appetizing food photography...'

  const handleCopy = () => {
    navigator.clipboard.writeText(samplePrompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative pt-12 pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Main Display Title */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-wide text-text-primary leading-[1.02] mb-6">
            CREATE STUNNING POSTERS WITH THE PERFECT{' '}
            <span className="text-primary underline decoration-secondary-border decoration-wavy decoration-2">
              AI PROMPTS
            </span>
          </h1>

          {/* Subtitle Paragraph */}
          <p className="text-text-secondary text-base sm:text-lg font-medium leading-relaxed max-w-xl mb-8">
            Save hours of trial and error. Get expertly crafted AI prompts to generate professional
            posters for any purpose in seconds.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <Link
              href="#"
              className="flex items-center justify-center px-6 py-3 gap-2 bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-xl shadow-primary/30 transition-all hover:scale-105 cursor-pointer w-full sm:w-auto corner-squircle"
            >
              <Wand2 className="w-4 h-4 text-white" />
              <span>Generate a Prompt</span>
            </Link>

            <Link
              href="#"
              className="flex items-center justify-center px-6 py-3 gap-2 rounded-full bg-card hover:bg-card-hover border border-border text-text-primary font-bold text-sm transition-all cursor-pointer w-full sm:w-auto corner-squircle"
            >
              <span>Explore Posters</span>
              <Search className="w-4 h-4 text-text-secondary" />
            </Link>
          </div>

          {/* Bottom Social Proof Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-border w-full">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-secondary-light border border-secondary-border flex items-center justify-center text-primary shrink-0">
                <LayoutGrid className="w-4.5 h-4.5" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-text-primary">10K+ Posters</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-secondary-light border border-secondary-border flex items-center justify-center text-primary shrink-0">
                <Layers className="w-4.5 h-4.5" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-text-primary">50+ Categories</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-secondary-light border border-secondary-border flex items-center justify-center text-primary shrink-0">
                <Star className="w-4.5 h-4.5 fill-primary text-primary" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-text-primary">
                Used by Designers & Marketers
              </span>
            </div>
          </div>
        </div>

        {/* Right Poster Preview Showcase Column */}
        <div className="lg:col-span-5 relative flex flex-col items-center">
          {/* Top-Right Handwritten Annotation Arrow */}
          <div className="hidden sm:flex absolute -top-8 right-0 z-20 items-center gap-2 text-text-secondary text-xs font-mono italic">
            <span>Generated with AI Prompt</span>
            <svg
              className="w-8 h-8 text-secondary transform rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>

          {/* Main Poster Showcase Card Frame */}
          <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden border-2 border-secondary-border bg-card shadow-2xl shadow-primary/20 group">
            {/* Poster High Res Image */}
            <Image
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
              alt="Special Burger Weekend Poster"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              priority
            />

            {/* Poster Overlay Typography Demo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 p-6 flex flex-col justify-between pointer-events-none">
              <div className="text-center pt-4">
                <span className="text-amber-400 font-mono text-xs tracking-widest uppercase font-extrabold">
                  — Special —
                </span>
                <h3 className="font-display text-4xl sm:text-5xl text-white tracking-wide uppercase drop-shadow-md">
                  BURGER
                </h3>
                <h4 className="font-display text-3xl sm:text-4xl text-amber-400 tracking-wider uppercase drop-shadow-md -mt-2">
                  WEEKEND
                </h4>
              </div>

              {/* 20% OFF Badge */}
              <div className="self-start mb-16">
                <div className="w-16 h-16 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase flex flex-col items-center justify-center leading-tight shadow-xl transform -rotate-12 border-2 border-white">
                  <span>GET</span>
                  <span className="text-sm font-extrabold">20%</span>
                  <span>OFF</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating AI Prompt Overlay Card */}
          <div className="w-11/12 sm:w-full -mt-20 z-20 bg-card/95 backdrop-blur-xl border border-secondary-border rounded-2xl p-4 shadow-2xl shadow-primary/25">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>AI Prompt</span>
              </div>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface hover:bg-card-hover border border-border text-text-primary text-xs font-bold transition-all cursor-pointer shrink-0"
              >
                {copied ? (
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

            <p className="text-xs text-text-secondary font-medium leading-relaxed line-clamp-3">
              {samplePrompt}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

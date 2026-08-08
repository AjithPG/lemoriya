'use client'

import * as React from 'react'
import Link from 'next/link'
import { Sparkles, ArrowRight, Home, Mail, Check, Wand2 } from 'lucide-react'
import DashboardLayout from '@/app/(dashboard)/layout'

function HowItWorksComingSoonContent() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 py-16 max-w-4xl mx-auto my-8">
      {/* Top Pill Tag */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-light border border-secondary-border text-primary text-xs font-extrabold uppercase tracking-widest mb-6 shadow-sm">
        <Wand2 className="w-4 h-4 text-primary" />
        <span>GUIDE COMING SOON</span>
      </div>

      {/* Bangers Display Headline */}
      <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-wide text-text-primary leading-[1.05] max-w-3xl mb-6">
        HOW IT WORKS GUIDE IS <span className="text-primary">COMING SOON.</span>
      </h1>

      {/* Subtitle */}
      <p className="text-text-secondary text-base sm:text-lg font-medium leading-relaxed max-w-xl mb-10">
        We're assembling step-by-step masterclasses on crafting high-converting AI prompts,
        parameter tuning for Midjourney v6 & DALL-E 3, and professional poster design secrets.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/explore"
          className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-xl shadow-primary/30 transition-all hover:scale-105 cursor-pointer"
        >
          <span>Explore Prompts</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <Link
          href="/"
          className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-card hover:bg-card-hover border border-border text-text-primary font-bold text-sm transition-all cursor-pointer"
        >
          <Home className="w-4 h-4 text-text-secondary" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  )
}

export default function HowItWorksPage() {
  return (
    <DashboardLayout>
      <HowItWorksComingSoonContent />
    </DashboardLayout>
  )
}

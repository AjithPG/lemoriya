'use client'

import * as React from 'react'
import { Zap, Target, Palette, Star } from 'lucide-react'

export interface FeatureItem {
  id: string
  title: string
  description: string
  icon: React.ElementType
  iconColor: string
  iconBg: string
}

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'time-saving',
    title: 'Time Saving',
    description: 'Skip the guesswork and get perfect prompts in seconds.',
    icon: Zap,
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10 border-purple-500/20',
  },
  {
    id: 'highly-optimized',
    title: 'Highly Optimized',
    description: 'Expertly crafted prompts for better AI-generated results.',
    icon: Target,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    id: 'endless-variety',
    title: 'Endless Variety',
    description: 'Explore thousands of styles for every occasion.',
    icon: Palette,
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    id: 'proven-results',
    title: 'Proven Results',
    description: 'Used by designers, marketers, and business owners.',
    icon: Star,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/10 border-amber-500/20',
  },
]

export const FeaturesSection = () => {
  return (
    <section className="my-8 px-4 sm:px-6">
      <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl transition-colors duration-200">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-text-primary">
            Why Creators Love{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary-hover bg-clip-text text-transparent">
              Lemoriya
            </span>
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES_DATA.map((feature) => {
            const IconComponent = feature.icon
            return (
              <div
                key={feature.id}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-surface border border-border hover:bg-card-hover hover:border-primary/40 transition-all duration-200 hover:-translate-y-1"
              >
                {/* Icon Box */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center border shrink-0 transition-transform group-hover:scale-105 ${feature.iconBg}`}
                >
                  <IconComponent className={`w-5.5 h-5.5 ${feature.iconColor}`} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base font-bold text-text-primary tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-text-secondary mt-1 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

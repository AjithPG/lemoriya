'use client'

import * as React from 'react'
import { ArrowDown, Triangle, Sparkles, Hexagon, Layers, Compass } from 'lucide-react'

export const CUSTOMERS_DATA = [
  { name: 'Northwind', icon: ArrowDown },
  { name: 'Vertex', icon: Triangle },
  { name: 'Lumen', icon: Sparkles },
  { name: 'Maison', icon: Compass },
  { name: 'Hexa', icon: Hexagon },
  { name: 'Apex', icon: Layers },
]

export const CustomerShowcaseSection = () => {
  return (
    <section id="customers" className="px-4 sm:px-6 my-20 max-w-5xl mx-auto text-center">
      {/* Heading */}
      <h2 className="font-display text-4xl sm:text-6xl text-text-primary tracking-wide uppercase leading-tight max-w-3xl mx-auto mb-4">
        ADOPTED BY TEAMS SHIPPING VIBRANT PRODUCT UI.
      </h2>

      {/* Subtitle */}
      <p className="text-text-secondary text-base sm:text-lg font-medium leading-relaxed max-w-xl mx-auto mb-10">
        From launch pages to checkout flows, product teams use Creative to ship cohesive marketing,
        commerce, and dashboard surfaces from one token set.
      </p>

      {/* Customer Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {CUSTOMERS_DATA.map((customer) => {
          const IconComp = customer.icon
          return (
            <div
              key={customer.name}
              className="bg-card border border-border rounded-3xl p-6 shadow-sm flex items-center justify-center gap-3 font-semibold text-text-primary text-base sm:text-lg hover:border-secondary hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <IconComp className="w-5 h-5 text-secondary" />
              <span>{customer.name}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

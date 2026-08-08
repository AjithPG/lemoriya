'use client'

import * as React from 'react'

export const LivePreviewSection = () => {
  return (
    <section className="px-4 sm:px-6 my-12 max-w-5xl mx-auto">
      {/* Browser Mockup Window Card */}
      <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-xl">
        {/* Window Chrome Header Bar */}
        <div className="bg-secondary-light border-b border-secondary-border px-5 py-3 flex items-center gap-4">
          {/* Traffic Light Dots */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-danger" />
            <span className="w-3 h-3 rounded-full bg-warning" />
            <span className="w-3 h-3 rounded-full bg-success" />
          </div>

          {/* URL Address Bar */}
          <div className="text-xs font-mono-code text-text-secondary font-medium tracking-wide">
            creative.studio/preview
          </div>
        </div>

        {/* Window Body Grid */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Purple Card */}
          <div className="lg:col-span-7 bg-secondary-light border border-secondary-border rounded-3xl p-8 flex flex-col justify-center">
            <span className="text-xs font-extrabold tracking-widest text-primary uppercase mb-2">
              LIVE PREVIEW
            </span>

            <h3 className="font-display text-3xl sm:text-4xl text-text-primary tracking-wide uppercase my-2">
              MARKETING • STORE • DASHBOARD
            </h3>

            <p className="text-text-secondary text-sm sm:text-base font-medium leading-relaxed">
              Three routes, one token layer — swap sections without rebuilding your stack.
            </p>
          </div>

          {/* Right Metrics Cards Stack */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-center">
            {/* Metric 1 */}
            <div className="bg-surface border border-border rounded-3xl px-6 py-4 flex items-center justify-between shadow-sm">
              <span className="text-sm font-semibold text-text-secondary">Sections</span>
              <span className="font-display text-2xl sm:text-3xl text-text-primary tracking-wide">
                48+
              </span>
            </div>

            {/* Metric 2 */}
            <div className="bg-surface border border-border rounded-3xl px-6 py-4 flex items-center justify-between shadow-sm">
              <span className="text-sm font-semibold text-text-secondary">Teams</span>
              <span className="font-display text-2xl sm:text-3xl text-text-primary tracking-wide">
                2.4K
              </span>
            </div>

            {/* Metric 3 */}
            <div className="bg-surface border border-border rounded-3xl px-6 py-4 flex items-center justify-between shadow-sm">
              <span className="text-sm font-semibold text-text-secondary">Uptime</span>
              <span className="font-display text-2xl sm:text-3xl text-text-primary tracking-wide">
                99.9%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

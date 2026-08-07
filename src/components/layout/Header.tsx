'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Sparkles, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useDashboard } from '@/context/DashboardContext'

export const Header = () => {
  const pathname = usePathname()
  const router = useRouter()
  const { setCurrentCategory, setCurrentView } = useDashboard()
  const [isDark, setIsDark] = React.useState(true)

  const toggleTheme = () => {
    setIsDark((prev) => !prev)
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark')
    }
  }

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Explore', href: '/#prompts-feed' },
    { label: 'Categories', href: '/categories' },
  ]

  const handleNavClick = (href: string) => {
    if (href === '/') {
      setCurrentCategory(null)
      setCurrentView('browse')
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-card/90 backdrop-blur-md border-b border-border text-text-primary px-4 sm:px-8 py-3.5 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Logo & Title */}
        <Link
          href="/"
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-2.5 cursor-pointer hover:opacity-90 transition-opacity"
        >
          <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center text-white shadow-sm shadow-primary/30">
            <Sparkles className="w-4.5 h-4.5 text-white" />
          </div>
          <span className="text-lg font-extrabold tracking-tight text-text-primary">
            Lemoriya <span className="text-primary font-extrabold">AI</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive =
              (link.href === '/' && pathname === '/' && !pathname.includes('#')) ||
              (link.href !== '/' && pathname.startsWith(link.href))

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative text-xs lg:text-sm font-semibold transition-colors py-1 ${
                  isActive
                    ? 'text-primary font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary after:rounded-full'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-9 h-9 rounded-xl border border-border bg-surface hover:bg-card-hover text-text-secondary hover:text-text-primary flex items-center justify-center transition-all cursor-pointer"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  )
}

'use client'
import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sparkles, Menu, X, Heart } from 'lucide-react'

export const Header = () => {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const navLinks = [
    { label: 'Explore', href: '/explore' },
    { label: 'Categories', href: '/categories' },
    { label: 'How it works', href: '/how-it-works' },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="sticky top-4 z-50 px-4 max-w-6xl mx-auto w-full">
      <header className="bg-card/90 backdrop-blur-xl border border-border rounded-full px-6 py-3 shadow-sm flex items-center justify-between transition-all">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-4.5 h-4.5 text-white" />
          </div>
          <span className="font-sans text-2xl tracking-wide uppercase text-text-primary font-bold">
            Lemoriya
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-primary font-bold'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-3">
          {/* Favorites Button */}
          <Link
            href="/favorites"
            onClick={closeMobileMenu}
            className="hidden md:flex items-center gap-1.5 px-4 py-2.5  bg-primary hover:bg-primary-hover text-white text-xs font-bold shadow-md shadow-primary/25 transition-all hover:scale-105 cursor-pointer corner-squircle"
          >
            <Heart className="w-3.5 h-3.5 fill-white text-white" />
            <span>Favorites</span>
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center justify-center p-2 rounded-full text-text-primary hover:bg-card-hover border border-border/50 transition-colors cursor-pointer"
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-text-primary" />
            ) : (
              <Menu className="w-5 h-5 text-text-primary" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Dropdown Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border border-border rounded-3xl p-5 mt-3 shadow-2xl flex flex-col gap-3 transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                    isActive
                      ? 'bg-secondary-light text-primary font-extrabold'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="pt-2 border-t border-border mt-1">
            <Link
              href="/favorites"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold shadow-md shadow-primary/25 transition-all cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white text-white" />
              <span>Favorites</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

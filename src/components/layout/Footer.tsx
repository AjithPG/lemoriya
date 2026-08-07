'use client'

import * as React from 'react'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerNav = {
    product: [
      { label: 'Explore', href: '/' },
      { label: 'Categories', href: '/categories' },
      { label: 'How It Works', href: '/#how-it-works' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'API', href: '/api' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Affiliate', href: '/affiliate' },
    ],
    resources: [
      { label: 'Help Center', href: '/help' },
      { label: 'Prompt Guide', href: '/guide' },
      { label: 'AI Tools', href: '/tools' },
      { label: 'Community', href: '/community' },
      { label: 'Updates', href: '/updates' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Refund Policy', href: '/refund' },
      { label: 'Cookies Policy', href: '/cookies' },
    ],
  }

  return (
    <footer className="bg-card border-t border-border text-text-primary px-6 py-12 lg:px-14 mt-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            {/* Brand Logo & Name */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white shadow-sm shadow-primary/30">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-text-primary">
                Lemoriya<span className="text-primary font-extrabold"> AI</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-text-secondary text-xs sm:text-sm font-medium leading-relaxed max-w-sm">
              AI-powered poster design prompts for creators, marketers, and businesses.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-surface border border-border hover:bg-card-hover text-text-secondary hover:text-text-primary flex items-center justify-center transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold text-sm text-text-primary mb-4 tracking-tight">Product</h4>
            <ul className="flex flex-col gap-2.5">
              {footerNav.product.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-text-secondary hover:text-text-primary text-xs sm:text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-sm text-text-primary mb-4 tracking-tight">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {footerNav.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-text-secondary hover:text-text-primary text-xs sm:text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-bold text-sm text-text-primary mb-4 tracking-tight">Resources</h4>
            <ul className="flex flex-col gap-2.5">
              {footerNav.resources.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-text-secondary hover:text-text-primary text-xs sm:text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold text-sm text-text-primary mb-4 tracking-tight">Legal</h4>
            <ul className="flex flex-col gap-2.5">
              {footerNav.legal.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-text-secondary hover:text-text-primary text-xs sm:text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-border mt-12 pt-8 text-center text-xs text-text-muted font-medium">
          <p>© {currentYear} Lemoriya AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

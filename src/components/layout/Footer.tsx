'use client'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 w-full pt-8 pb-16">
      {/* Footer Navigation Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 px-4 text-text-secondary text-sm font-medium">
        <div>
          <h4 className="font-bold text-text-primary text-sm mb-3">Product</h4>
          <ul className="flex flex-col gap-2.5">
            <li>
              <Link href="#" className="hover:text-text-primary transition-colors">
                Explore
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-text-primary transition-colors">
                Categories
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-text-primary text-sm mb-3">Company</h4>
          <ul className="flex flex-col gap-2.5">
            <li>
              <Link href="#" className="hover:text-text-primary transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-text-primary transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-text-primary text-sm mb-3">Resource</h4>
          <ul className="flex flex-col gap-2.5">
            <li>
              <Link href="#" className="hover:text-text-primary transition-colors">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-text-primary transition-colors">
                Prompt Guide
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-text-primary transition-colors">
                AI Tools
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-text-primary text-sm mb-3">Legal</h4>
          <ul className="flex flex-col gap-2.5">
            <li>
              <Link href="#" className="hover:text-text-primary transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-text-primary transition-colors">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-text-primary transition-colors">
                Cookies Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Row */}
      <div className="border-t border-border pt-8 px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-text-muted">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center text-white">
            <Sparkles className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-sans text-lg tracking-wide uppercase text-text-primary">
            Lemoriya
          </span>
        </div>

        <p>© 2026 Lemoriya. All rights reserved.</p>
      </div>
    </footer>
  )
}

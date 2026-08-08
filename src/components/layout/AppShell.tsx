'use client'

import * as React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface AppShellProps {
  children: React.ReactNode
}

export const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text-primary">
      {/* Global Floating Header Navigation (Appears on all pages) */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-1 w-full">{children}</main>

      {/* Global Footer (Appears on all pages) */}
      <Footer />
    </div>
  )
}

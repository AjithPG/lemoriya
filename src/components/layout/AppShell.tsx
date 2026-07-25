'use client'

import * as React from 'react'

interface AppShellProps {
  children: React.ReactNode
  sidebar: React.ReactNode
}

export const AppShell = ({ children, sidebar }: AppShellProps) => {
  return (
    <div className="flex h-screen flex-row overflow-hidden">
      <aside className="hidden md:flex w-60 flex-col overflow-y-auto border-r border-[#E2E8F0] bg-[#FFFFFF] ">
        {sidebar}
        <div className="text-center text-[10px] text-[#94A3B8] font-medium mb-2.5">
          © 2026 Lemoriya
        </div>
      </aside>
      <main className="flex flex-1 flex-col overflow-hidden bg-[#F9FAFB]">{children}</main>
    </div>
  )
}

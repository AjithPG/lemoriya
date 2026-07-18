'use client'

import * as React from 'react'
import { Heart, Copy, Check, MoreVertical } from 'lucide-react'
import { PromptItem } from './promptsData'
import { useDashboard } from './layout/DashboardContext'
import { Card, CardFooter } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

interface PromptCardProps {
  promptItem: PromptItem
  onClick: () => void
}

export const PromptCard = ({ promptItem, onClick }: PromptCardProps) => {
  const { favorites, toggleFavorite } = useDashboard()
  const [copied, setCopied] = React.useState(false)

  const isFavorite = favorites.includes(promptItem.id)

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation() // Avoid opening the detail page
    navigator.clipboard.writeText(promptItem.prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation() // Avoid opening the detail page
    toggleFavorite(promptItem.id)
  }

  // Determine Badge variant based on category / author
  const getBadgeVariant = (categoryName: string, author: string): any => {
    const isMaster = author.toLowerCase() === 'master'
    if (isMaster) return 'master'

    const cat = categoryName.toLowerCase()
    if (cat === '3d render' || cat === 'ui / ux' || cat === 'sci-fi') {
      return cat
    }
    return cat
  }

  const badgeText = promptItem.author.toLowerCase() === 'master' ? 'Master' : promptItem.category

  return (
    <Card onClick={onClick} className="cursor-pointer select-none group">
      {/* Visual Thumbnail with floating heart */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-50 border border-[#E2E8F0]/40">
        {/* Floating Quick Favorite heart button */}
        <Button
          onClick={handleFavoriteClick}
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-black hover:text-red-500 shadow border border-slate-100/50 flex items-center justify-center z-10"
          aria-label="Add to Favorites"
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-black'}`} />
        </Button>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={promptItem.imageUrl}
          alt={promptItem.title}
          className="object-cover w-full h-full transform group-hover:scale-[1.02] transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Metadata & Title */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-sans text-base font-extrabold text-[#0F172A] leading-tight group-hover:text-[#6366F1] transition-colors line-clamp-1 flex-1">
            {promptItem.title}
          </h3>
          <Badge variant={getBadgeVariant(promptItem.category, promptItem.author)}>
            {badgeText}
          </Badge>
        </div>
        <p className="text-xs text-[#64748B] leading-relaxed line-clamp-3 font-medium">
          {promptItem.description}
        </p>
      </div>

      {/* Footer Copy & Ellipsis Actions */}
      <CardFooter>
        <Button
          onClick={handleCopy}
          variant={copied ? 'success' : 'outline'}
          className={`flex-grow ${copied ? 'text-white' : ''}`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" strokeWidth={3} />
              <span>Copied Prompt</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Prompt</span>
            </>
          )}
        </Button>

        {/* More vertical ellipses button */}
        <Button
          onClick={(e) => {
            e.stopPropagation()
            alert(
              `Selected Prompt Details:\nTitle: ${promptItem.title}\nModel: ${promptItem.model}\nAspect Ratio: ${promptItem.aspectRatio}\nStyle: ${promptItem.style}`
            )
          }}
          variant="outline"
          size="icon"
          className="w-9 h-9 shrink-0"
          aria-label="More Options"
        >
          <MoreVertical className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

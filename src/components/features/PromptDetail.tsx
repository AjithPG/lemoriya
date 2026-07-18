'use client'

import * as React from 'react'
import { PromptItem, MODEL_OPTIONS, ASPECT_RATIOS, STYLE_OPTIONS } from './promptsData'
import { useDashboard } from './layout/DashboardContext'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Textarea } from '@/components/ui/Textarea'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs'

interface PromptDetailProps {
  promptItem: PromptItem
  onBack: () => void
  allPrompts: PromptItem[]
  onSelectPrompt: (id: string) => void
}

export const PromptDetail = ({
  promptItem,
  onBack,
  allPrompts,
  onSelectPrompt,
}: PromptDetailProps) => {
  const { favorites, toggleFavorite } = useDashboard()

  // Config options matching selection states
  const [selectedModel, setSelectedModel] = React.useState(promptItem.model || 'Midjourney')
  const [selectedRatio, setSelectedRatio] = React.useState(promptItem.aspectRatio || '16:9')
  const [selectedStyle, setSelectedStyle] = React.useState(promptItem.style || 'Photorealistic')
  const [promptText, setPromptText] = React.useState(promptItem.prompt)
  const [negativeText, setNegativeText] = React.useState(
    promptItem.negativePrompt || 'blurry, low quality, distorted, watermark'
  )
  const [activeTab, setActiveTab] = React.useState<'prompt' | 'edit'>('prompt')
  const [copied, setCopied] = React.useState(false)

  // Sync state if promptItem changes
  React.useEffect(() => {
    setSelectedModel(promptItem.model || 'Midjourney')
    setSelectedRatio(promptItem.aspectRatio || '16:9')
    setSelectedStyle(promptItem.style || 'Photorealistic')
    setPromptText(promptItem.prompt)
    setNegativeText(promptItem.negativePrompt || 'blurry, low quality, distorted, watermark')
  }, [promptItem])

  // Clean prompt and extract the base instruction (removing Midjourney flags)
  const getBasePrompt = (raw: string) => {
    let clean = raw
    if (clean.startsWith('/imagine prompt: ')) {
      clean = clean.replace('/imagine prompt: ', '')
    }
    clean = clean.split('--ar')[0].split('--v')[0].split('--style')[0].trim()
    return clean
  }

  // Re-generate prompt text based on selection changes
  const regeneratePrompt = (model: string, ratio: string, style: string) => {
    const base = getBasePrompt(promptItem.prompt)
    let result = base

    // Apply style keywords if modified
    if (style !== promptItem.style) {
      result += `, style of ${style.toLowerCase()}`
    }

    if (model === 'Midjourney') {
      result = `/imagine prompt: ${result}`
      if (ratio === '16:9') result += ' --ar 16:9'
      else if (ratio === '1:1') result += ' --ar 1:1'
      else if (ratio === '4:3') result += ' --ar 4:3'
      else if (ratio === '9:16') result += ' --ar 9:16'
      else if (ratio === '2:3') result += ' --ar 2:3'
      result += ' --v 6.0'
    } else if (model === 'Stable Diffusion') {
      let dim = '1024x576'
      if (ratio === '1:1') dim = '1024x1024'
      else if (ratio === '4:3') dim = '1024x768'
      else if (ratio === '9:16') dim = '576x1024'
      else if (ratio === '2:3') dim = '682x1024'
      result = `${result} --width ${dim.split('x')[0]} --height ${dim.split('x')[1]} --model sdxl`
    } else {
      result = `${result} --aspect ${ratio} --engine ${model.toLowerCase().replace(/\s/g, '-')}`
    }

    setPromptText(result)
  }

  const handleModelChange = (model: string) => {
    setSelectedModel(model)
    regeneratePrompt(model, selectedRatio, selectedStyle)
  }

  const handleRatioChange = (ratio: string) => {
    setSelectedRatio(ratio)
    regeneratePrompt(selectedModel, ratio, selectedStyle)
  }

  const handleStyleChange = (style: string) => {
    setSelectedStyle(style)
    regeneratePrompt(selectedModel, selectedRatio, style)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  // Find similar prompts in the same category
  const similarPrompts = allPrompts
    .filter((p) => p.category === promptItem.category && p.id !== promptItem.id)
    .slice(0, 4)

  const isFavorite = favorites.includes(promptItem.id)

  return (
    <div className="flex flex-col lg:flex-row h-full overflow-hidden bg-[#F9FAFB] select-none text-[#0F172A]">
      {/* Left/Main Column - Scrollable */}
      <div className="flex-1 overflow-y-auto p-6 sm:p-8 flex flex-col gap-6">
        {/* Navigation Action Header */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Button
            onClick={onBack}
            variant="outline"
            size="sm"
            className="flex items-center gap-2 cursor-pointer bg-white"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back to Collection</span>
          </Button>

          <div className="flex items-center gap-3">
            {/* Add to Favorites outline button */}
            <Button
              onClick={() => toggleFavorite(promptItem.id)}
              variant="outline"
              size="sm"
              className={`flex items-center gap-2 cursor-pointer bg-white ${
                isFavorite ? 'text-red-500 border-red-200' : 'text-[#0F172A]'
              }`}
            >
              <svg
                className={`w-4 h-4 ${isFavorite ? 'fill-current text-red-500' : 'text-[#64748B]'}`}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>{isFavorite ? 'Favorited' : 'Add to Favorites'}</span>
            </Button>

            {/* Copy Prompt header button (bright purple) */}
            <Button
              onClick={handleCopy}
              variant={copied ? 'success' : 'default'}
              size="sm"
              className={`flex items-center gap-2 cursor-pointer ${copied ? 'text-white font-bold' : ''}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                />
              </svg>
              <span>{copied ? 'Copied!' : 'Copy Prompt'}</span>
            </Button>
          </div>
        </div>

        {/* Large Display Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-50 border border-[#E2E8F0] shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={promptItem.imageUrl}
            alt={promptItem.title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Title, Badge, and Description */}
        <div className="flex flex-col gap-3 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              {promptItem.title}
            </h2>
            <Badge variant="master" className="shadow-sm">
              Master
            </Badge>
          </div>
          <p className="text-sm text-[#64748B] leading-relaxed max-w-3xl font-medium">
            {promptItem.description}
          </p>
        </div>

        {/* Metadata Details Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 py-4 px-6 bg-white border border-[#E2E8F0] rounded-xl shadow-sm gap-4 text-xs font-semibold text-[#64748B]">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#6366F1]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 7h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>
              Category: <strong className="text-[#0F172A]">{promptItem.category}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#6366F1]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span>
              Views: <strong className="text-[#0F172A]">{promptItem.views}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#6366F1]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>
              Created: <strong className="text-[#0F172A]">{promptItem.createdAt}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#6366F1]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.969 0 1.371 1.24.588 1.81l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.17 0l-3.97-2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.98 12.18c-.783-.57-.38-1.81.588-1.81h4.907a1 1 0 00.95-.69l1.519-4.674z"
              />
            </svg>
            <span>
              Rating: <strong className="text-[#0F172A]">{promptItem.rating}</strong>
            </span>
          </div>
        </div>

        {/* Similar Prompts grid section */}
        {similarPrompts.length > 0 && (
          <div className="flex flex-col gap-4 mt-6">
            <h3 className="text-lg font-extrabold text-[#0F172A] tracking-tight">
              Similar Prompts
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {similarPrompts.map((similar) => (
                <div
                  key={similar.id}
                  onClick={() => onSelectPrompt(similar.id)}
                  className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl p-3 cursor-pointer hover:border-[#94A3B8]/40 hover:shadow-md transition-all flex flex-col gap-3 group"
                >
                  <div className="aspect-[16/10] overflow-hidden rounded-lg bg-slate-50 border border-slate-100/30">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={similar.imageUrl}
                      alt={similar.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-[#0F172A] leading-tight group-hover:text-[#6366F1] transition-colors line-clamp-1">
                      {similar.title}
                    </h4>
                    <Badge variant="master" className="mt-1.5 inline-block">
                      Master
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right "Edit Prompt" Configuration Sidebar */}
      <aside className="w-full lg:w-96 border-t lg:border-t-0 lg:border-l border-[#E2E8F0] bg-white flex flex-col">
        {/* Editor Title block */}
        <div className="p-6 border-b border-[#E2E8F0] flex items-center justify-between">
          <h3 className="text-base font-extrabold text-[#0F172A]">Edit Prompt</h3>
          <Button
            onClick={() => {
              setSelectedModel(promptItem.model || 'Midjourney')
              setSelectedRatio(promptItem.aspectRatio || '16:9')
              setSelectedStyle(promptItem.style || 'Photorealistic')
              setPromptText(promptItem.prompt)
              setNegativeText(
                promptItem.negativePrompt || 'blurry, low quality, distorted, watermark'
              )
            }}
            variant="ghost"
            size="sm"
            className="flex items-center gap-1.5 cursor-pointer text-[#64748B]"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H17"
              />
            </svg>
            <span>Reset</span>
          </Button>
        </div>

        {/* Editor Tab switch */}
        <Tabs className="px-6 bg-[#FFFFFF]">
          <TabsList>
            <TabsTrigger
              isActive={activeTab === 'prompt'}
              onClick={() => setActiveTab('prompt')}
              className="pr-6"
            >
              Prompt
            </TabsTrigger>
            <TabsTrigger isActive={activeTab === 'edit'} onClick={() => setActiveTab('edit')}>
              Edit
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Editor Settings Scroll Container */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 bg-[#FFFFFF]">
          {/* Main Prompt Text Box */}
          <div className="flex flex-col gap-2">
            <Textarea
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              maxLength={1500}
              rows={5}
            />
            <span className="text-[10px] text-[#64748B] font-bold self-end">
              {promptText.length} / 1500
            </span>
          </div>

          {/* Model Suggestions */}
          <div className="flex flex-col gap-3">
            <label className="text-[10px] font-extrabold text-[#64748B] uppercase tracking-wider">
              Model Suggestions
            </label>
            <div className="flex flex-wrap gap-2">
              {MODEL_OPTIONS.map((model) => {
                const isActive = selectedModel === model
                return (
                  <Button
                    key={model}
                    onClick={() => handleModelChange(model)}
                    variant="outline"
                    className={
                      isActive
                        ? 'bg-[#EEF2FF] border-[#6366F1] text-[#6366F1] hover:bg-[#EEF2FF] hover:text-[#6366F1]'
                        : ''
                    }
                  >
                    {model}
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Aspect Ratio Options */}
          <div className="flex flex-col gap-3">
            <label className="text-[10px] font-extrabold text-[#64748B] uppercase tracking-wider">
              Aspect Ratio
            </label>
            <div className="flex flex-wrap gap-2">
              {ASPECT_RATIOS.map((ratio) => {
                const isActive = selectedRatio === ratio
                return (
                  <Button
                    key={ratio}
                    onClick={() => handleRatioChange(ratio)}
                    variant="outline"
                    className={
                      isActive
                        ? 'bg-[#ECFDF5] border-[#10B981] text-[#047857] hover:bg-[#ECFDF5]'
                        : ''
                    }
                  >
                    {ratio}
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Style Presets */}
          <div className="flex flex-col gap-3">
            <label className="text-[10px] font-extrabold text-[#64748B] uppercase tracking-wider">
              Style
            </label>
            <div className="flex flex-wrap gap-2">
              {STYLE_OPTIONS.map((style) => {
                const isActive = selectedStyle === style
                return (
                  <Button
                    key={style}
                    onClick={() => handleStyleChange(style)}
                    variant="outline"
                    className={
                      isActive
                        ? 'bg-[#FAF5FF] border-[#8B5CF6] text-[#6B21A8] hover:bg-[#FAF5FF]'
                        : ''
                    }
                  >
                    {style}
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Negative Prompt field */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-extrabold text-[#64748B] uppercase tracking-wider">
              Negative Prompt (optional)
            </label>
            <Textarea
              value={negativeText}
              onChange={(e) => setNegativeText(e.target.value)}
              rows={2}
            />
          </div>
        </div>

        {/* Sticky copy button at the bottom of the editor */}
        <div className="p-6 border-t border-[#E2E8F0] bg-[#FFFFFF]">
          <Button
            onClick={handleCopy}
            variant={copied ? 'success' : 'default'}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-xs transition-colors cursor-pointer shadow-sm text-white"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
              />
            </svg>
            <span>{copied ? 'Prompt Copied!' : 'Copy Prompt'}</span>
          </Button>
        </div>
      </aside>
    </div>
  )
}

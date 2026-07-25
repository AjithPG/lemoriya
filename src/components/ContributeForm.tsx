'use client'

import * as React from 'react'
import { PromptItem } from '@/data/promptsData'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'

interface ContributeFormProps {
  onSubmitSuccess: (newPrompt: PromptItem) => void
}

export const ContributeForm = ({ onSubmitSuccess }: ContributeFormProps) => {
  const [formData, setFormData] = React.useState({
    title: '',
    category: 'Art',
    description: '',
    prompt: '',
    imageUrl: '',
  })
  const [errors, setError] = React.useState<Record<string, string>>({})
  const [submitted, setSubmitted] = React.useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.title) {
      newErrors.title = 'Title is required'
    }

    if (!formData.prompt) {
      newErrors.prompt = 'Prompt is required'
    }

    if (!formData.category) {
      newErrors.category = 'Category is required'
    }

    setError(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const { title, category, description, prompt, imageUrl } = formData

    // Use a default image if none provided
    const img =
      imageUrl.trim() ||
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'

    const newPromptItem: PromptItem = {
      id: String(Date.now()),
      title,
      author: 'Contributor',
      category,
      description: description || 'No description provided.',
      prompt,
      imageUrl: img,
      tags: [category, 'User-submitted'],
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      negativePrompt: '',
    }

    onSubmitSuccess(newPromptItem)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center border-t border-[#E2E8F0] bg-[#FFFFFF] min-h-[50vh] select-none">
        <div className="w-16 h-16 border border-[#E2E8F0] flex items-center justify-center rounded-full mb-6 bg-slate-50">
          <svg
            className="w-6 h-6 text-[#10B981]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-extrabold text-[#0F172A] mb-2">Thank you!</h3>
        <p className="text-sm text-[#64748B] max-w-sm mb-6 leading-relaxed font-medium">
          Your prompt has been successfully added to the active library session. You can now search
          for it or browse it in the dashboard.
        </p>
        <Button
          onClick={() => {
            setFormData({
              title: '',
              category: 'Art',
              description: '',
              prompt: '',
              imageUrl: '',
            })
            setError({})
            setSubmitted(false)
          }}
          variant="outline"
          className="cursor-pointer"
        >
          Submit another prompt
        </Button>
      </div>
    )
  }

  return (
    <div className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-2xl p-8 max-w-2xl mx-auto my-8 select-none shadow-sm">
      <div className="mb-8">
        <h3 className="text-2xl font-extrabold text-[#0F172A] mb-2">Submit Prompt</h3>
        <p className="text-sm text-[#64748B] font-medium">
          Share your crafted prompts with the library. Provide details below to add it to the feed.
        </p>
      </div>

      <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Title */}
        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#64748B]">
            Prompt Title *
          </label>
          <Input
            required
            value={formData.title}
            name="title"
            onChange={handleChange}
            placeholder="e.g. Vintage Cyberpunk Cybernetics"
          />
          {errors.title && <p className="text-xs text-red-500 font-medium">{errors.title}</p>}
        </div>

        {/* Category & Image URL Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#64748B]">
              Category
            </label>
            <select
              value={formData.category}
              name="category"
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-sm bg-white border border-[#E2E8F0] rounded-lg text-[#0F172A] focus:outline-none focus:border-[#6366F1] transition-colors appearance-none cursor-pointer font-semibold"
            >
              <option value="Art">Art</option>
              <option value="Photography">Photography</option>
              <option value="Illustration">Illustration</option>
              <option value="3D Render">3D Render</option>
              <option value="Anime">Anime</option>
              <option value="Nature">Nature</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Architecture">Architecture</option>
            </select>
            {errors.category && (
              <p className="text-xs text-red-500 font-medium">{errors.category}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#64748B]">
              Image URL (Unsplash/Web)
            </label>
            <Input
              type="url"
              value={formData.imageUrl}
              name="imageUrl"
              pattern="https?://.+"
              onChange={handleChange}
              placeholder="https://images.unsplash.com/..."
            />
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#64748B]">
            Short Description
          </label>
          <Input
            value={formData.description}
            name="description"
            onChange={handleChange}
            placeholder="A brief summary of what this prompt generates."
          />
        </div>

        {/* Raw Prompt Textarea */}
        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#64748B]">
            Raw Prompt Instructions *
          </label>
          <Textarea
            required
            rows={4}
            value={formData.prompt}
            name="prompt"
            onChange={handleChange}
            placeholder="Paste your exact prompt here, e.g. /imagine prompt: Close up photo of..."
            className="font-mono"
          />
          {errors.prompt && <p className="text-xs text-red-500 font-medium">{errors.prompt}</p>}
        </div>

        {/* Submit button */}
        <Button
          type="submit"
          variant="default"
          className="w-full sm:w-auto self-start mt-2 cursor-pointer"
        >
          Add Prompt to Library
        </Button>
      </form>
    </div>
  )
}

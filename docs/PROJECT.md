# 🚀 Lemoriya

## 📌 Overview

**Lemoriya** is an AI-powered platform that helps marketers, designers, entrepreneurs, and content creators generate high-quality prompts for creating professional marketing posters.

---

## 🎯 Target Audience

- **Digital Marketers**
- **Small Business Owners**
- **Freelance Designers**
- **Social Media Managers**
- **Content Creators**
- **Startup Founders**

## Project Hosting

Github URL-> https://github.com/AjithPG/lemoriya
Project Live Link -> https://lemoriya.vercel.app/
Supabase -> https://ukkqmcdfyvtswwvvmxhw.supabase.co

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Supabase
- Vercel

## Icons

- lucide-react

## Folder Structure

src
├── app/ # Next.js App Router pages and layouts
├── components/ # Reusable UI components
├── context/ # React Context providers and hooks
├── hooks/ # Custom React hooks
├── lib/ # Core application utilities and helper functions
├── services/ # API service integrations
├── styles/ # Global styles and Tailwind configuration
├── types/ # TypeScript type definitions
├── utils/ # Utility functions
├── data/ # Static data and mock responses
├── public/ # Static assets (images, fonts, etc.)
└── .env.local # Environment variables (not version controlled)

## Created CSS Files

1. `src/styles/token.css` — Design tokens (CSS variables) used across the entire application
2. `src/styles/global.css` — Global styles, resets, and Tailwind v4 configuration
3. `src/styles/theme.css` — Tailwind theme mapping that exposes tokens for use in components

## Project Database

Tables
Category - id,name,slug,icon,created_at
Posters - id,category,title,slug,description,preview_image,prompt_template,styles,status,featured,created_at

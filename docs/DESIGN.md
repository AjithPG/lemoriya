# 🎨 TypeUI Creative Design System Guidelines

This document serves as the authoritative reference for the **Creative / TypeUI Creative** design system implemented in Lemoriya. Use these specifications for all future component development, styling, and UI enhancements.

---

## 🚀 Design Philosophy

**Creative** is a high-energy, high-impact design system built specifically for AI-powered applications and modern landing pages. 

- **Impact over Subtlety**: Heavy display typography paired with vibrant purple-violet accents.
- **Pill Controls & Soft Shadows**: Rounded pill shapes (`rounded-full`) for navigation, buttons, and badges.
- **Tight Clusters, Soft Breathing Space**: White elevated cards (`rounded-3xl`) over a soft lavender-tinted background (`#F5F3FF`).

---

## 🎨 Color Palette & CSS Tokens (`src/styles/token.css`)

Creative uses a dual-accent system anchored by vibrant purple-violet hues and soft lavender surfaces:

| Token Name | CSS Custom Property | Value | Usage |
| :--- | :--- | :--- | :--- |
| **Primary** | `--primary` | `#6D28D9` | Main CTAs, primary buttons, active states, key highlights |
| **Primary Hover** | `--primary-hover` | `#5B21B6` | Hover state for primary buttons |
| **Primary Active** | `--primary-active` | `#4C1D95` | Pressed/active state for primary buttons |
| **Secondary Violet** | `--secondary` | `#8B5CF6` | Secondary accents, pre-headings, category tags |
| **Electric Blue** | `--accent` | `#3B82F6` | Supporting highlights, icons, gradient endpoints |
| **Soft Tint** | `--accent-light` | `#F0ECFF` | Soft pill backgrounds, secondary button fills |
| **Background** | `--background` | `#F5F3FF` | Page body background (soft lavender-tinted white) |
| **Surface & Card** | `--surface`, `--card` | `#FFFFFF` | Elevated cards, navigation containers, dialogs |
| **Card Hover** | `--card-hover` | `#FAF8FF` | Hover state for interactive cards |
| **Border** | `--border` | `#E9E5FF` | Card and component borders |
| **Border Light** | `--border-light` | `#F0ECFF` | Divider lines and subtle borders |
| **Text Primary** | `--text-primary` | `#111827` | Main headings, primary labels, title text |
| **Text Secondary** | `--text-secondary` | `#6B6689` | Subtitles, body copy, secondary metadata |
| **Text Muted** | `--text-muted` | `#9CA3AF` | Captions, fine print, placeholder text |

---

## 🔤 Typography System

Three distinct font families power the interface:

```css
--font-family: 'Plus Jakarta Sans', Inter, system-ui, sans-serif;
--font-display: 'Bangers', cursive, system-ui, sans-serif;
--font-mono: 'IBM Plex Mono', monospace;
```

### 1. Display Headings (`font-display` / `Bangers`)
Used for all major section titles, hero headlines, and high-impact callouts. Always render in **UPPERCASE** with `tracking-wide`.
- **Hero Title**: `font-display text-5xl sm:text-7xl lg:text-8xl tracking-wide uppercase text-slate-900 leading-[0.95]`
- **Section Heading**: `font-display text-3xl sm:text-4xl lg:text-5xl tracking-wide uppercase text-slate-900`

### 2. Body & Controls (`font-sans` / `Plus Jakarta Sans`)
Used for all body paragraphs, subtitles, buttons, navigation items, and form controls.
- **Lead Paragraph**: `text-slate-600 text-base sm:text-lg font-medium leading-relaxed`
- **Button Text**: `font-bold text-xs sm:text-sm`

### 3. Monospace (`font-mono-code` / `IBM Plex Mono`)
Used for code snippets, technical metrics, and browser address bar URLs.
- **Address Bar URL**: `font-mono-code text-xs text-slate-600 font-medium`

---

## 🧩 Component Architecture & Design Patterns

### 1. Floating Pill Navigation Header ([Header.tsx](file:///d:/lemoriya/lemoriya/src/components/layout/Header.tsx))
- **Container**: `sticky top-4 z-50 px-4 max-w-6xl mx-auto w-full`
- **Bar**: `bg-white/90 backdrop-blur-xl border border-[#E9E5FF] rounded-full px-6 py-3 shadow-sm flex items-center justify-between`
- **Brand**: Square purple icon box (`bg-[#6D28D9] text-white rounded-xl`) + **`CREATIVE`** display title in Bangers font.
- **Pills**: `Sign in` (`bg-[#F0ECFF] font-bold text-[#4C1D95] rounded-full`) & `Get started` (`bg-[#6D28D9] text-white rounded-full shadow-md shadow-purple-600/25`).

### 2. Hero Section ([HeroSection.tsx](file:///d:/lemoriya/lemoriya/src/components/HeroSection.tsx))
- **Pre-heading**: `text-xs font-extrabold tracking-[0.25em] text-[#8B5CF6] uppercase mb-4` (`TYPEUI CREATIVE`).
- **Display Headline**: Bangers display font in uppercase.
- **Primary Pill CTA**: `bg-[#6D28D9] hover:bg-[#5B21B6] text-white rounded-full px-8 py-3.5 font-bold shadow-xl shadow-purple-600/30`.
- **Secondary Pill CTA**: `bg-[#F0ECFF] hover:bg-[#E8E2FF] text-[#4C1D95] rounded-full px-8 py-3.5 font-bold`.
- **Segmented Control**: Dark charcoal pill bar (`bg-[#474354] rounded-full p-1.5 border border-slate-700/50`) with active white pill (`bg-white text-slate-900 font-bold px-5 py-2 rounded-full`).

### 3. Live Preview Window Card ([LivePreviewSection.tsx](file:///d:/lemoriya/lemoriya/src/components/LivePreviewSection.tsx))
- **Browser Frame**: `bg-white border border-[#E9E5FF] rounded-3xl overflow-hidden shadow-xl`.
- **Title Bar**: `bg-[#EDE9FE] border-b border-[#DDD6FE] px-5 py-3 flex items-center gap-4`.
- **Traffic Dots**: `#EF4444` (red), `#F59E0B` (yellow), `#10B981` (green).
- **Featured Purple Card**: `bg-[#EDE9FE] border border-[#DDD6FE] rounded-3xl p-8`.
- **Metrics Stack**: White cards (`bg-white border border-[#E9E5FF] rounded-3xl px-6 py-4 flex justify-between`) with Bangers numbers (`48+`, `2.4K`, `99.9%`).

### 4. Customer Showcase ([CustomerShowcaseSection.tsx](file:///d:/lemoriya/lemoriya/src/components/CustomerShowcaseSection.tsx))
- **Title**: `ADOPTED BY TEAMS SHIPPING VIBRANT PRODUCT UI.`
- **Logo Cards**: White rounded cards (`bg-white border border-[#E9E5FF] rounded-3xl p-6 shadow-sm flex items-center justify-center gap-3 font-semibold text-slate-800`).

### 5. Newsletter & Footer ([Footer.tsx](file:///d:/lemoriya/lemoriya/src/components/layout/Footer.tsx))
- **Newsletter Box**: Soft purple container (`bg-[#EDE9FE] border border-[#DDD6FE] rounded-3xl p-8 sm:p-12 shadow-sm`).
- **Input & Subscribe**: Email input pill (`bg-white border border-[#DDD6FE] rounded-full px-5 py-3.5 text-sm`) + `Subscribe` pill button (`bg-[#6D28D9] text-white rounded-full px-8 py-3.5 font-bold`).
- **Bottom Bar**: `border-t border-[#E9E5FF] pt-8 flex items-center justify-between`.

---

## 🛠️ Rules for Future Developers

1. **Use `font-display` for Headlines**: All major section titles must use the Bangers font family (`font-display`), uppercase casing, and `tracking-wide`.
2. **Pill Shapes for Controls**: Navigation bars, CTAs, input boxes, badges, and segmented controls must use `rounded-full`.
3. **Card Corner Radius**: Always use `rounded-3xl` for main section containers, cards, and modal windows.
4. **Soft Borders & Light Background**: Keep the body background set to `var(--background)` (`#F5F3FF`) with white cards (`#FFFFFF`) framed by soft lavender borders (`#E9E5FF`).
5. **No Random Dark Mode Inconsistencies**: Ensure all primary actions maintain the signature Vibrant Purple (`#6D28D9`) brand layer.

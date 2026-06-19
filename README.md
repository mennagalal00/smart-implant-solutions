# Smart Implant Solutions — Landing Page

Arabic RTL dental implant company website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click **Deploy**

Or via CLI:
```bash
npm i -g vercel
vercel
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with Arabic RTL + Google Fonts
│   ├── page.tsx          # Main page — composes all sections
│   └── globals.css       # Global styles + Tailwind
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    # Sticky responsive navbar
│   │   └── Footer.tsx    # Footer with links & contact
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── WhyUsSection.tsx
│   │   ├── ComparisonSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── SectionLabel.tsx
│       ├── StarRating.tsx
│       └── WhatsAppButton.tsx
├── lib/
│   └── data.ts           # All content data
└── types/
    └── index.ts          # TypeScript types
```

## Color Palette

| Token | Hex | Use |
|-------|-----|-----|
| `brand-dark` | `#2C1A0E` | Hero bg, footer bg, headings |
| `brand-brown` | `#3D2210` | Secondary dark |
| `brand-amber` | `#C9A227` | Primary CTA, accents |
| `brand-gold` | `#B8860B` | Hover states |
| `brand-cream` | `#FAF7F2` | Body background |
| `brand-light` | `#F5EFE6` | Cards, borders |

## Tech Stack

- **Next.js 15** — App Router
- **TypeScript** — Type-safe
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Scroll animations
- **Lucide React** — Icons
- **Cairo** — Google Font for Arabic

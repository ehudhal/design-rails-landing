# Design Rails Landing Page

A beautiful, modern landing page for Design Rails built with Next.js, Tailwind CSS, and WebGL effects.

## Features

### Visual Design
- **WebGL Background Effects**: Animated 3D torus and particle system in the hero section
- **Gradient Accents**: Sophisticated color gradients throughout
- **Smooth Animations**: Hover effects, transitions, and scroll animations
- **Custom Scrollbar**: Branded blue scrollbar styling
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop

### Sections Included

1. **Hero Section** - Eye-catching intro with WebGL background and dual CTAs
2. **Problem Section** - Highlights pain points with visual cards
3. **Solution Section** - Three core capabilities with icon cards
4. **How It Works** - 5-step process with alternating timeline layout
5. **Benefits Section** - Feature grid with gradient hover effects
6. **Technical Features** - Dark-themed section showcasing technical capabilities
7. **Social Proof** - Customer testimonials with gradient cards
8. **Comparison Table** - Three-column comparison highlighting the optimal approach
9. **Use Cases** - Target audience segments with emoji icons
10. **FAQ Section** - Interactive accordion with smooth expand/collapse
11. **Final CTA** - Strong closing with code snippet and gradient background
12. **Navigation** - Fixed navbar that transitions on scroll
13. **Footer** - Company info and social links

## Tech Stack

- **Next.js 16.0.0** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for R3F

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
claude-designer/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page composition
├── components/
│   ├── Navigation.tsx        # Fixed navigation bar
│   ├── Footer.tsx            # Site footer
│   ├── WebGLBackground.tsx   # 3D animated background
│   └── sections/
│       ├── Hero.tsx          # Hero section with WebGL
│       ├── Problem.tsx       # Problem statement
│       ├── Solution.tsx      # Solution overview
│       ├── HowItWorks.tsx    # Process steps
│       ├── Benefits.tsx      # Feature benefits
│       ├── TechnicalFeatures.tsx
│       ├── SocialProof.tsx   # Testimonials
│       ├── Comparison.tsx    # Comparison table
│       ├── UseCases.tsx      # Use case cards
│       ├── FAQ.tsx           # Accordion FAQ
│       └── FinalCTA.tsx      # Final call-to-action
└── public/                   # Static assets
```

## Design Philosophy

This landing page follows modern SaaS design principles:

- **Distinctive Visual Language**: WebGL effects and gradient accents create a premium feel
- **Clear Hierarchy**: Strategic use of typography, spacing, and color
- **Conversion Focused**: Multiple CTAs placed strategically throughout
- **Trust Building**: Social proof, detailed explanations, and comprehensive FAQ
- **Progressive Disclosure**: Information revealed gradually to maintain engagement

## Customization

### Colors

Primary brand colors are defined in Tailwind classes:
- Blue: `blue-500`, `blue-600` for primary actions
- Cyan: `cyan-400`, `cyan-500` for accents
- Slate: `slate-900`, `slate-800` for dark sections

### Content

All copy is directly in the component files for easy editing. Key areas to customize:

1. **Hero headline** in `components/sections/Hero.tsx`
2. **Feature benefits** in `components/sections/Benefits.tsx`
3. **Testimonials** in `components/sections/SocialProof.tsx`
4. **FAQ answers** in `components/sections/FAQ.tsx`

### WebGL Effects

Modify the 3D scene in `components/WebGLBackground.tsx`:
- Particle count, size, and distribution
- Torus geometry and rotation speed
- Colors and opacity
- Camera position and field of view

## Performance

- **Server Components**: All sections are server-rendered by default
- **Client Components**: Only Navigation, FAQ (interactive), and WebGL are client-side
- **Code Splitting**: Automatic via Next.js App Router
- **Optimized Images**: Using Next.js Image component where applicable

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- WebGL 2.0 required for 3D effects

## License

All rights reserved.

---

Built with Next.js, Tailwind CSS, and Three.js

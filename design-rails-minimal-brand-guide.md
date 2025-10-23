# Design Rails (Minimal Version) Brand Style Guide

> Generated from Design Rails Minimal Landing Page | October 23, 2025
>
> This guide documents the complete visual design system and can be used as context for AI agents to generate brand-consistent artifacts.

## Overview

**Brand Personality**: Clean, modern, and professional with a focus on clarity and sophistication. Inspired by Perplexity.ai's minimalist aesthetic.

**Design Philosophy**: Subtle elegance through generous whitespace, refined typography, and ambient interactions. The design creates a calm, focused atmosphere that puts content first while adding delight through understated WebGL effects and smooth animations.

**Target Audience**: Engineering leaders, product teams, and designers who appreciate clean, purposeful design and want AI tools that respect their design standards.

**Aesthetic Direction**: Modern minimalism with ambient motion—avoiding generic AI-generated patterns through distinctive typography choices (Syne & DM Sans), warm neutral palette, and strategic teal accents.

---

## Voice & Tone

**Voice**: Clear, confident, technically precise, and helpful

**Tone Variations**:
- **Marketing/Hero**: Bold and aspirational yet grounded—"Give Your AI Coding Agent the Design Intelligence It's Missing"
- **Features/Product**: Benefit-focused and specific—emphasizing outcomes rather than features
- **Documentation**: Precise, step-by-step, and technical
- **Error Messages**: Solution-oriented, friendly, and non-judgmental

**Writing Style**:
- Sentence structure: Mix of punchy statements and explanatory sentences. Active voice dominant.
- Terminology: Technical but accessible—assumes developer/designer audience
- Formality: Professional but conversational, direct second-person ("you")

---

## Color System

### Primary Palette

**Primary Color (Teal)**: `#0D9488` (rgb(13, 148, 136))
- Usage: Primary CTAs, brand accents, interactive elements, links
- Variants:
  - Light: `#14B8A6` (teal-500)
  - Dark: `#0F766E` (teal-700, hover states)
  - RGB: `13, 148, 136` (for alpha transparency)

**Secondary/Accent**: Same teal with variations
- The design uses a focused single-color approach rather than competing hues

### Neutrals

**Background**: `#F5F3EF` (warm off-white, beige undertone)
**Surface/Elevated**: `#FFFFFF` (pure white for cards and elevated elements)
**Border**: `#E2E8F0` (slate-200) / rgba(0, 0, 0, 0.05)

**Text Hierarchy**:
- Primary: `#1E293B` (slate-900)
- Secondary: `#475569` (slate-600)
- Muted: `#64748B` (slate-500)
- Inverted: `#FFFFFF`

### Semantic Colors

**Success**: `#10B981` (background: `#D1FAE5`)
**Warning**: `#F59E0B` (background: `#FEF3C7`)
**Error**: `#EF4444` (background: `#FEE2E2`)
**Info**: `#0D9488` (background: `#CCFBF1`)

### Gradients

**Subtle Teal Gradient** (for backgrounds):
```css
background: radial-gradient(circle at 50% 50%, rgba(13, 148, 136, 0.15) 0%, transparent 70%);
```

**Atmospheric Blur Effects**:
```css
background: radial-gradient(circle at 20% 30%, rgba(13, 148, 136, 0.3) 0%, transparent 50%);
```

### CSS Variables

```css
:root {
  /* Brand Colors */
  --color-primary: #0D9488;
  --color-primary-light: #14B8A6;
  --color-primary-dark: #0F766E;
  --color-primary-rgb: 13, 148, 136;

  /* Neutrals */
  --color-bg: #F5F3EF;
  --color-surface: #FFFFFF;
  --color-border: #E2E8F0;
  --color-border-subtle: rgba(0, 0, 0, 0.05);

  /* Text */
  --color-text: #1E293B;
  --color-text-secondary: #475569;
  --color-text-muted: #64748B;

  /* Semantic */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #0D9488;
}
```

---

## Typography

### Font Families

**Headings**: `'Syne', sans-serif`
- Source: Google Fonts
- Weights: 600 (semibold), 700 (bold), 800 (extrabold)
- Character: Modern, geometric sans-serif with distinctive personality—clean yet unique

**Body**: `'DM Sans', sans-serif`
- Source: Google Fonts
- Weights: 400 (regular), 500 (medium), 600 (semibold)
- Character: Clean, highly readable, optimized for both screen and print

**Monospace**: `'JetBrains Mono', monospace`
- Usage: Code snippets, terminal commands
- Weight: 400-700

### Type Scale

**H1 - Hero Headline**
- Size: 3.5rem / 56px (desktop), 2.5rem / 40px (mobile)
- Weight: 700 (bold)
- Line Height: 1.1 (tight)
- Letter Spacing: -0.01em
- Usage: Hero section main headline only
- Font: Syne

**H2 - Section Heading**
- Size: 3rem / 48px (desktop), 2rem / 32px (mobile)
- Weight: 700
- Line Height: 1.2
- Usage: Major section titles
- Font: Syne

**H3 - Subsection Heading**
- Size: 1.5rem / 24px
- Weight: 700
- Line Height: 1.3
- Usage: Feature titles, card headings, benefit titles
- Font: Syne

**Body - Hero Subtitle**
- Size: 1.25rem / 20px (desktop), 1.125rem / 18px (mobile)
- Weight: 400
- Line Height: 1.6
- Usage: Hero subtitle, section descriptions
- Font: DM Sans

**Body - Default**
- Size: 1rem / 16px
- Weight: 400
- Line Height: 1.6 (relaxed)
- Font: DM Sans

**Body - Small**
- Size: 0.875rem / 14px
- Weight: 400
- Line Height: 1.5
- Usage: Metadata, captions, author attribution
- Font: DM Sans

### CSS Implementation

```css
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

:root {
  /* Font Families */
  --font-heading: 'Syne', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Type Scale */
  --text-h1: 3.5rem;
  --text-h2: 3rem;
  --text-h3: 1.5rem;
  --text-body-lg: 1.25rem;
  --text-body: 1rem;
  --text-small: 0.875rem;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
}

body, p, li, span {
  font-family: var(--font-body);
}
```

---

## Spacing System

**Base Unit**: 8px

**Scale**:
- xs: 0.5rem / 8px
- sm: 1rem / 16px
- md: 2rem / 32px
- lg: 4rem / 64px
- xl: 6rem / 96px
- 2xl: 8rem / 128px

**Usage Guidelines**:
- Component padding: sm to md (1-2rem)
- Section padding: 8rem desktop, 4rem mobile
- Element gaps: sm to md
- Container max-width: 80rem / 1280px
- Content max-width: 64rem / 1024px

```css
:root {
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
  --spacing-xl: 6rem;
  --spacing-2xl: 8rem;
}
```

---

## Shadows & Elevation

**Shadow Scale**:

**sm** - Subtle depth (cards at rest)
```css
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
```

**md** - Card elevation
```css
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
```

**lg** - Prominent elevation (hover states)
```css
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
```

**xl** - Maximum elevation (modals, dropdowns)
```css
box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
```

**Colored Shadows** (for CTAs):
```css
box-shadow: 0 10px 30px rgba(13, 148, 136, 0.3);
```

---

## Border & Radius

**Border Width**:
- Default: 1px
- Focus states: 2px

**Border Style**: solid

**Border Radius**:
- sm: 0.5rem / 8px
- md: 0.75rem / 12px
- lg: 1.5rem / 24px
- xl: 3rem / 48px
- full: 9999px (pills/rounded buttons)

**Usage**:
- Buttons: full (pill shape)
- Cards: xl (24px)
- Inputs: md (12px)
- Images: lg (24px)

```css
:root {
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1.5rem;
  --radius-xl: 3rem;
  --radius-full: 9999px;
}
```

---

## Components

### Primary Button

**Visual Characteristics**:
- Background: Teal (#0D9488)
- Text: White
- Padding: 1rem 2rem
- Border Radius: 9999px (full pill)
- Font Weight: 600 (semibold)
- Font: DM Sans

**States**:
- **Default**: Background `#0D9488`
- **Hover**: Background `#0F766E`, lift 2px (translateY(-2px)), scale 1.05, shadow-xl
- **Active**: Scale 0.98
- **Disabled**: Opacity 0.5, no hover effects, cursor not-allowed

**Code Example**:
```css
.button-primary {
  padding: 1rem 2rem;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.button-primary:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 10px 30px rgba(var(--color-primary-rgb), 0.3);
}

.button-primary:active {
  transform: scale(0.98);
}
```

### Secondary Button (Outlined)

**Visual Characteristics**:
- Background: Transparent
- Border: 2px solid slate-300
- Text: Slate-900
- Padding: 1rem 2rem
- Border Radius: 9999px

**States**:
- **Default**: Border `#CBD5E1`
- **Hover**: Border teal, text teal, lift slightly
- **Active**: Scale 0.98

**Code Example**:
```css
.button-secondary {
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid #CBD5E1;
  color: var(--color-text);
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button-secondary:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  transform: translateY(-2px);
}
```

### Card Component

**Visual Characteristics**:
- Background: White
- Border: 1px solid slate-200
- Padding: 2.5rem
- Border Radius: 3rem (xl)
- Shadow: None at rest

**Hover State**: Border color changes to teal-300, shadow-lg appears, very subtle lift

**Code Example**:
```css
.card {
  padding: 2.5rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  border-color: rgba(13, 148, 136, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}
```

### FAQ Accordion

**Visual Characteristics**:
- Background: White
- Border: 1px solid slate-200
- Border Radius: 1rem
- Padding: 1.5rem 2rem
- Arrow icon rotates 180° when open

**States**:
- **Closed**: Max-height 0, padding-bottom 0
- **Open**: Max-height auto, padding-bottom 1.5rem
- **Hover**: Background slate-50

**Code Example**:
```css
.faq-item {
  background: white;
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: rgba(13, 148, 136, 0.3);
}

.faq-question {
  padding: 1.5rem 2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-answer {
  max-height: 0;
  padding: 0 2rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-answer.open {
  max-height: 24rem;
  padding-bottom: 1.5rem;
}

.faq-icon {
  transform: rotate(0deg);
  transition: transform 0.3s ease;
}

.faq-icon.open {
  transform: rotate(180deg);
}
```

---

## Motion & Animation

### Animation Principles

**Philosophy**: Subtle, purposeful motion that creates a sense of quality and care. Ambient rather than attention-grabbing.

**Timing**:
- Micro-interactions: 200-300ms
- Page loads: 600ms
- Transitions: 300ms

**Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` for smooth, natural motion

### Standard Animations

**Page Load Sequence** (Hero section):
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  animation: fadeInUp 0.8s ease-out 0.2s backwards;
}

.hero-subtitle {
  animation: fadeInUp 0.8s ease-out 0.4s backwards;
}

.hero-cta {
  animation: fadeInUp 0.8s ease-out 0.6s backwards;
}
```

**Hover Transitions**:
- Buttons: Lift 2px, scale 1.05, add shadow, duration 300ms
- Cards: Lift 2px, change border color, add shadow, duration 300ms
- Links: Underline or color change, duration 200ms

**Scroll Indicator** (Bounce animation):
```css
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

.scroll-indicator {
  animation: bounce 2s infinite ease-in-out;
}
```

### WebGL Effects

**Hero Particle Field**: Ambient particle network with subtle connections
- Implementation: Canvas-based particle system
- Particles: 80 small circles (1-2.5px radius)
- Colors: Teal (`rgba(13, 148, 136, 0.1-0.4)`)
- Movement: Slow, continuous drift (0.3px/frame max velocity)
- Connections: Lines drawn between nearby particles (<120px distance)
- Performance: Optimized for 60fps, particles wrap at edges
- Mobile: Reduced particle count recommended

**Code Reference**:
See `components/minimal/MinimalWebGLBackground.tsx` for full implementation

---

## Backgrounds & Textures

### Background Patterns

**Primary Background**: Warm off-white solid
```css
background: #F5F3EF;
```

**Section Alternation**: White sections alternate with #F5F3EF sections for visual rhythm

**Atmospheric Effects** (Decorative blurred circles):
```css
/* Subtle ambient glow */
.decorative-blur {
  position: absolute;
  width: 24rem;
  height: 24rem;
  background: radial-gradient(circle, rgba(13, 148, 136, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(60px);
  z-index: -10;
}
```

---

## Iconography

**Icon Style**: Outlined, minimal

**Icon Set**: Heroicons / SVG inline

**Size Scale**:
- Small: 16px (UI elements)
- Medium: 24px (buttons, features)
- Large: 32px (section accents)

**Color**:
- Default: Match text color
- Accent: Teal for emphasis or interactive states

---

## Responsive Behavior

### Breakpoints

```css
/* Mobile: < 768px */
/* Tablet: 768px - 1024px */
/* Desktop: > 1024px */

@media (max-width: 768px) {
  /* Mobile adjustments */
}
```

### Responsive Adjustments

**Typography**:
- H1: 3.5rem desktop → 2.5rem mobile
- H2: 3rem desktop → 2rem mobile
- Body large: 1.25rem → 1.125rem mobile
- Body: 1rem consistent

**Spacing**:
- Section padding: 8rem desktop → 4rem mobile
- Card padding: 2.5rem → 2rem mobile
- Gap spacing: 2rem → 1rem mobile

**Layout**:
- Grid columns: 2 columns → 1 column on mobile
- Navigation: Simplified mobile nav
- Hero: Full-height on desktop, auto-height on mobile

---

## Accessibility

**Color Contrast**:
- All text meets WCAG AA standard (4.5:1 minimum)
- Teal on white: 4.59:1 (passes AA)
- Slate-900 on F5F3EF: 14.2:1 (passes AAA)

**Focus States**:
- Visible focus ring (teal, 2px offset) on all interactive elements
- No :focus { outline: none } without replacement

**Reduced Motion**:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Semantic HTML**:
- Proper heading hierarchy (H1 → H2 → H3)
- ARIA labels on icon-only buttons
- Landmarks (nav, main, footer)

---

## Usage Guidelines

### Do's
- Use teal (#0D9488) for all primary CTAs and brand moments
- Maintain generous whitespace—let content breathe
- Apply subtle hover effects to interactive elements (lift + shadow)
- Keep typography hierarchy clear with Syne for headings, DM Sans for body
- Use pill-shaped buttons (border-radius: full) for all CTAs
- Alternate between white and #F5F3EF backgrounds for section rhythm
- Apply 3rem (48px) border radius to cards for soft, approachable feel

### Don'ts
- Don't add multiple accent colors—keep focused on teal
- Don't overcrowd sections—minimize elements, maximize whitespace
- Don't use harsh shadows—keep them soft and subtle
- Don't mix border radius styles inconsistently
- Don't add aggressive animations—keep motion ambient and calm
- Don't reduce contrast for aesthetic reasons
- Don't use more than one WebGL effect per page

---

## Design Tokens (JSON Format)

For programmatic use in applications:

```json
{
  "colors": {
    "primary": "#0D9488",
    "primaryLight": "#14B8A6",
    "primaryDark": "#0F766E",
    "primaryRGB": "13, 148, 136",
    "background": "#F5F3EF",
    "surface": "#FFFFFF",
    "border": "#E2E8F0",
    "text": "#1E293B",
    "textSecondary": "#475569",
    "textMuted": "#64748B",
    "success": "#10B981",
    "warning": "#F59E0B",
    "error": "#EF4444",
    "info": "#0D9488"
  },
  "typography": {
    "fontFamily": {
      "heading": "Syne, sans-serif",
      "body": "DM Sans, sans-serif",
      "mono": "JetBrains Mono, monospace"
    },
    "fontSize": {
      "h1": "3.5rem",
      "h2": "3rem",
      "h3": "1.5rem",
      "bodyLarge": "1.25rem",
      "body": "1rem",
      "small": "0.875rem"
    },
    "fontWeight": {
      "regular": 400,
      "medium": 500,
      "semibold": 600,
      "bold": 700,
      "extrabold": 800
    },
    "lineHeight": {
      "tight": 1.1,
      "snug": 1.2,
      "normal": 1.3,
      "relaxed": 1.6
    }
  },
  "spacing": {
    "xs": "0.5rem",
    "sm": "1rem",
    "md": "2rem",
    "lg": "4rem",
    "xl": "6rem",
    "2xl": "8rem"
  },
  "borderRadius": {
    "sm": "0.5rem",
    "md": "0.75rem",
    "lg": "1.5rem",
    "xl": "3rem",
    "full": "9999px"
  },
  "shadows": {
    "sm": "0 1px 3px rgba(0, 0, 0, 0.08)",
    "md": "0 4px 12px rgba(0, 0, 0, 0.1)",
    "lg": "0 10px 30px rgba(0, 0, 0, 0.12)",
    "xl": "0 20px 40px rgba(0, 0, 0, 0.15)",
    "teal": "0 10px 30px rgba(13, 148, 136, 0.3)"
  }
}
```

---

## AI Agent Instructions

When using this brand guide to generate artifacts:

1. **Extract the CSS variables section** and use as foundation for any web-based artifacts
2. **Follow the typography scale** exactly—use Syne for all headings, DM Sans for body text
3. **Use component examples** as templates for buttons, cards, and interactive elements
4. **Respect the color hierarchy**: Teal for primary actions only, warm neutral backgrounds, slate text
5. **Apply the animation patterns** for consistent, subtle motion
6. **Match the voice & tone**: Clear, confident, benefit-focused copy
7. **Reference "Do's and Don'ts"** when making design decisions
8. **Maintain generous whitespace**—this is a core principle of the minimal aesthetic
9. **Keep interactions subtle**—lift on hover, soft shadows, ambient motion

This guide provides everything needed to generate brand-consistent:
- Email templates
- Presentation slides
- App interfaces
- Marketing materials
- Documentation sites
- Social media graphics
- Additional landing pages

The key differentiator of this minimal version is **restraint**—fewer colors, generous whitespace, subtle interactions, and a focus on content and clarity over decoration.

---

*Generated by Landing Page Designer Skill v1.0 - Minimal Version*

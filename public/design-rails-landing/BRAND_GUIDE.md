# Design Rails Brand Guide

**Version 1.0** | **Last Updated: 2024**

---

## Table of Contents
1. [Brand Overview](#brand-overview)
2. [Design Philosophy](#design-philosophy)
3. [Color System](#color-system)
4. [Typography](#typography)
5. [Spacing & Layout](#spacing--layout)
6. [Components](#components)
7. [Animation & Motion](#animation--motion)
8. [Voice & Tone](#voice--tone)
9. [Usage Guidelines](#usage-guidelines)

---

## Brand Overview

### What is Design Rails?
Design Rails is an MCP server that equips AI coding agents (Claude Code, Cursor, etc.) with design intelligence—giving them access to product context, design systems, and proven UX patterns.

### Brand Essence
- **Technical**: We speak to developers and product teams
- **Intelligent**: Design thinking meets AI capability
- **Precise**: No guesswork, just systematic design application
- **Empowering**: Amplifies designers, accelerates engineers

### Target Audience
- Engineering teams using AI coding agents
- Product designers maintaining design systems
- Technical founders building with AI tools
- DevTools companies and technical products

---

## Design Philosophy

### Core Principles

**1. Developer-Centric Aesthetic**
The visual language mirrors tools developers use daily—code editors, terminal interfaces, and IDE themes. This creates immediate familiarity and credibility.

**2. Distinctive, Not Generic**
We deliberately avoid common "SaaS landing page" patterns:
- ❌ Purple gradients on white backgrounds
- ❌ Generic system fonts (Inter, Roboto)
- ❌ Overly rounded, "friendly" UI
- ✅ Dark theme with technical precision
- ✅ Monospace typography for headings
- ✅ Code-inspired visual elements

**3. Purposeful Motion**
Animations serve specific functions:
- Guide attention to key messages
- Create memorable first impressions
- Provide feedback on interactions
- Never distract from content

**4. Performance-First**
Every visual decision considers:
- WebGL optimization
- Reduced motion preferences
- Mobile performance
- Accessibility standards

---

## Color System

### Primary Palette

```css
/* Base Colors */
--color-bg-primary: #0d1117      /* Deep blue-black */
--color-bg-secondary: #161b22    /* Slightly lighter surface */
--color-bg-tertiary: #1c2128     /* Card/component backgrounds */

/* Brand Colors */
--color-primary: #58a6ff         /* Cyan - intelligence, technology */
--color-primary-dark: #1f6feb    /* Darker variant */
--color-primary-light: #79c0ff   /* Lighter variant, gradients */

--color-accent: #f0883e          /* Amber - warmth, action */
--color-accent-dark: #e8590c     /* Emphasis */
--color-accent-light: #ffa657    /* Highlights */
```

### Text Colors

```css
--color-text-primary: #e6edf3    /* Primary content */
--color-text-secondary: #8b949e  /* Supporting text */
--color-text-tertiary: #6e7681   /* Tertiary/meta information */
```

### Semantic Colors

```css
--color-success: #3fb950   /* Confirmations, success states */
--color-warning: #f0883e   /* Warnings, important actions */
--color-error: #f85149     /* Errors, destructive actions */
```

### Color Usage Guidelines

**Primary Cyan (`#58a6ff`)**
- Primary CTAs and buttons
- Links and interactive elements
- Highlights and accents in headings
- Hover states on cards
- Progress indicators

**Accent Amber (`#f0883e`)**
- Secondary CTAs
- Important callouts
- Code snippets and technical elements
- Step numbers and sequence indicators
- Warm contrast to cool palette

**Background Layers**
- `bg-primary`: Page base, sections
- `bg-secondary`: Alternating sections, elevated content
- `bg-tertiary`: Cards, components, interactive elements

### Accessibility

All color combinations meet WCAG AA standards:
- Primary text on primary bg: 14.2:1
- Secondary text on primary bg: 7.8:1
- Primary button: 8.5:1

---

## Typography

### Font Families

**Headings: JetBrains Mono**
```css
font-family: 'JetBrains Mono', monospace;
```
- **Rationale**: Monospace font creates technical credibility
- **Weight range**: 400, 500, 600, 700
- **Use cases**: All headings (h1-h6), buttons, code blocks

**Body: Manrope**
```css
font-family: 'Manrope', sans-serif;
```
- **Rationale**: Clean, modern sans-serif with excellent readability
- **Weight range**: 400, 500, 600, 700
- **Use cases**: Body text, captions, UI labels

### Type Scale

```css
h1: clamp(2rem, 5vw, 3.5rem)         /* 32px - 56px */
h2: clamp(1.75rem, 4vw, 2.5rem)      /* 28px - 40px */
h3: clamp(1.25rem, 3vw, 1.75rem)     /* 20px - 28px */
body: 1.125rem                        /* 18px */
small: 0.875rem                       /* 14px */
```

### Typography Hierarchy

**Hero Title**
- Font: JetBrains Mono
- Size: 3.5rem (56px) desktop, 2rem (32px) mobile
- Weight: 700 (Bold)
- Line height: 1.2
- Letter spacing: -0.02em
- Gradient: Linear gradient from white to cyan

**Section Titles**
- Font: JetBrains Mono
- Size: 2.5rem (40px) desktop, 1.75rem (28px) mobile
- Weight: 700
- Color: `#e6edf3` (text-primary)

**Body Text**
- Font: Manrope
- Size: 1.125rem (18px)
- Weight: 400
- Line height: 1.6
- Color: `#8b949e` (text-secondary)

**Code Blocks**
- Font: JetBrains Mono
- Size: 1rem (16px)
- Background: `#1c2128` (bg-tertiary)
- Border: 1px solid `#30363d`

---

## Spacing & Layout

### Spacing Scale

```css
--spacing-xs: 0.5rem    /* 8px */
--spacing-sm: 1rem      /* 16px */
--spacing-md: 1.5rem    /* 24px */
--spacing-lg: 2rem      /* 32px */
--spacing-xl: 3rem      /* 48px */
--spacing-2xl: 4rem     /* 64px */
--spacing-3xl: 6rem     /* 96px */
```

### Layout Grid

**Container**
- Max width: 1200px
- Padding: 0 1.5rem (24px)
- Centered with `margin: 0 auto`

**Section Padding**
- Desktop: 6rem (96px) vertical, 1.5rem (24px) horizontal
- Mobile: 4rem (64px) vertical, 1.5rem (24px) horizontal

**Content Grids**
- Capability cards: 3 columns → 1 column mobile
- Benefits: 2-3 columns → 1 column mobile
- Testimonials: 4 columns → 1 column mobile
- Gap: 2rem-3rem (32px-48px)

---

## Components

### Buttons

**Primary CTA**
```css
.cta-primary {
  padding: 1rem 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1rem;
  font-weight: 600;
  color: #0d1117;
  background: linear-gradient(135deg, #58a6ff 0%, #79c0ff 100%);
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4),
              0 0 20px rgba(88, 166, 255, 0.3);
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5),
              0 0 30px rgba(88, 166, 255, 0.5);
}
```

**States**
- Default: Gradient background, glow shadow
- Hover: Lifts 2px, enhanced glow, shimmer effect
- Active: Returns to baseline position
- Focus: Visible outline for accessibility

### Cards

**Capability Card**
```css
.capability-card {
  background: #1c2128;
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 3rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.capability-card:hover {
  border-color: #58a6ff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  transform: translateY(-4px);
}
```

**Features**
- Border on hover changes to primary color
- Subtle lift effect (4px)
- Shadow increases depth
- Icon floats with infinite animation

### Process Steps

```css
.process-step {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  padding: 2rem;
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 8px;
}

.step-number {
  font-family: 'JetBrains Mono', monospace;
  font-size: 2.5rem;
  font-weight: 700;
  color: #f0883e;
}
```

### Code Block

```css
.install-command {
  background: #1c2128;
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.install-command code {
  font-family: 'JetBrains Mono', monospace;
  color: #ffa657;
}
```

---

## Animation & Motion

### Timing Functions

```css
--transition-fast: 0.15s ease
--transition-base: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 0.6s cubic-bezier(0.4, 0, 0.2, 1)
```

### Key Animations

**Fade In Up**
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
```
- **Usage**: Hero content, section reveals
- **Duration**: 0.6-0.8s
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)

**Float**
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```
- **Usage**: Capability icons
- **Duration**: 3s
- **Easing**: ease-in-out
- **Iteration**: infinite

**Hover Lift**
- **Transform**: translateY(-2px to -4px)
- **Shadow**: Increases with elevation
- **Duration**: 0.3s
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)

### Scroll Animations

**Implementation**
- IntersectionObserver API
- Threshold: 0.1 (10% visible)
- Root margin: -100px (triggers before fully in view)
- Staggered delays: 0.1s increments

**Sequence**
1. Hero content: 0.2s, 0.4s, 0.6s stagger
2. Cards: 0.1s incremental delays
3. Process steps: 0.15s incremental delays

### WebGL Background

**Effect**: Fluid gradient using custom shaders
**Colors**: Transitions between all palette colors
**Interactivity**: Responds to mouse movement
**Performance**: 60fps target, graceful degradation
**Accessibility**: Disabled for `prefers-reduced-motion`

---

## Voice & Tone

### Brand Voice

**Technical but Accessible**
- Use developer terminology naturally
- Explain complex concepts clearly
- Assume technical literacy but don't gatekeep

**Confident, Not Arrogant**
- State capabilities directly
- Acknowledge real problems honestly
- Avoid hyperbole and marketing fluff

**Problem-Aware**
- Address real frustrations developers face
- Show understanding of workflow challenges
- Present solutions, not just features

### Writing Guidelines

**Headlines**
- Direct and benefit-focused
- Use active voice
- Front-load key information
- Length: 5-12 words ideal

**Body Copy**
- Short paragraphs (2-3 sentences)
- Concrete examples over abstract concepts
- Technical specifics when relevant
- Natural, conversational tone

**CTAs**
- Action-oriented ("Install," "Add," "Get")
- Specific about what happens next
- Low friction language ("2 minutes," "one command")

### Examples

**Good**
- "Give Your AI Coding Agent the Design Intelligence It's Missing"
- "Your agent knows who you're building for, your user personas, key workflows"
- "Install Design Rails in 2 Minutes"

**Avoid**
- "Revolutionary AI-Powered Design Solution"
- "Leverage cutting-edge technology to optimize workflows"
- "Sign up now!"

---

## Usage Guidelines

### Do's

✅ **Use the dark theme consistently**
- Maintains technical credibility
- Provides strong brand recognition

✅ **Emphasize technical details**
- Specifics build trust with dev audience
- "10,000+ UX patterns" > "lots of patterns"

✅ **Show, don't just tell**
- Code snippets, terminal examples
- Concrete implementation details

✅ **Maintain spacing consistency**
- Use defined spacing scale
- Vertical rhythm is critical

✅ **Optimize for performance**
- Compress images
- Lazy load when appropriate
- Test on mobile devices

### Don'ts

❌ **Don't use light themes**
- Breaks brand coherence
- Loses developer aesthetic

❌ **Don't add generic stock images**
- Use code examples, diagrams, or technical visuals
- When needed, custom illustrations only

❌ **Don't oversimplify**
- Audience appreciates technical accuracy
- Avoid dumbing down concepts

❌ **Don't clutter with animations**
- Quality over quantity
- Every animation should have purpose

❌ **Don't ignore accessibility**
- Always test contrast ratios
- Support keyboard navigation
- Respect reduced motion preferences

### Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 480px) { ... }

/* Tablet */
@media (max-width: 768px) { ... }

/* Desktop */
@media (min-width: 769px) { ... }

/* Large Desktop */
@media (min-width: 1440px) { ... }
```

### Browser Support

**Fully Supported**
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

**Graceful Degradation**
- WebGL effects fall back to CSS gradients
- Animations disabled for reduced-motion
- Polyfills for older browsers not provided

---

## Implementation Notes

### Critical Resources

**Fonts**
```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Required JavaScript**
- `webgl-background.js`: WebGL fluid gradient
- `animations.js`: Scroll-triggered animations
- `main.js`: Interactive functionality

**CSS Variables**
All colors, spacing, and timing defined in `:root`
- Easy to customize
- Maintains consistency
- Supports theming

### Testing Checklist

- [ ] All text meets contrast requirements (WCAG AA)
- [ ] Keyboard navigation works throughout
- [ ] Reduced motion preference respected
- [ ] Mobile layout tested on actual devices
- [ ] WebGL effect performs at 60fps
- [ ] Copy button works in all browsers
- [ ] Smooth scroll works for anchor links
- [ ] All animations trigger at correct scroll positions

---

## Version History

**v1.0** - Initial brand guide
- Dark theme design system
- WebGL background implementation
- Complete component library
- Animation specifications
- Voice & tone guidelines

---

## Contact & Support

For questions about this brand guide or design system:
- Review code comments in CSS files
- Check component implementations in HTML
- Refer to animation timing in JavaScript files

**Design Rails**: The context layer that gives AI code agents the design intelligence they're missing.

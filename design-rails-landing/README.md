# Design Rails Landing Page

A distinctive, developer-centric landing page for Design Rails - the context layer that gives AI coding agents design intelligence.

## Features

- **WebGL Fluid Gradient Background**: Interactive animated background using custom shaders
- **Dark Theme Design System**: Inspired by developer IDE aesthetics (Nord/Tokyo Night)
- **Distinctive Typography**: JetBrains Mono + Manrope combination
- **Scroll-Triggered Animations**: Smooth, purposeful animations throughout
- **Fully Responsive**: Optimized for all device sizes
- **Accessibility**: Semantic HTML, keyboard navigation, reduced motion support

## Design Philosophy

This landing page was designed to avoid "AI slop" patterns:
- ❌ No generic purple gradients
- ❌ No default system fonts
- ❌ No cookie-cutter layouts
- ✅ Technical, code-editor inspired aesthetic
- ✅ Distinctive color palette with cyan primary and amber accents
- ✅ Custom WebGL effects for memorable first impression
- ✅ Purposeful, high-impact animations

## How to Run

### Option 1: Direct File Opening
Simply open `index.html` in a modern web browser:
```bash
open index.html
```

### Option 2: Local Server (Recommended)
For the best experience (especially for WebGL effects), use a local server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**
```bash
npx http-server -p 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

### Option 3: VS Code Live Server
If you're using VS Code:
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Project Structure

```
design-rails-landing/
├── index.html              # Main HTML file
├── css/
│   └── main.css           # All styles and design system
├── js/
│   ├── webgl-background.js # WebGL fluid gradient effect
│   ├── animations.js      # Scroll-triggered animations
│   └── main.js            # Interactive functionality
├── assets/                # Future images/assets
├── README.md              # This file
└── BRAND_GUIDE.md         # Design system documentation
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

WebGL effects will gracefully degrade on unsupported browsers.

## Design System

### Colors
- **Background**: `#0d1117` (GitHub dark inspired)
- **Primary**: `#58a6ff` (Cyan)
- **Accent**: `#f0883e` (Amber)
- **Text**: `#e6edf3` (Off-white)

### Typography
- **Headings**: JetBrains Mono (technical, monospace)
- **Body**: Manrope (clean, modern sans-serif)

### Spacing
- Based on 0.5rem increments
- Consistent vertical rhythm

See `BRAND_GUIDE.md` for complete design system documentation.

## Performance

- Optimized WebGL shaders
- Lazy-loaded animations
- Reduced motion support
- Minimal JavaScript footprint
- No external dependencies (except Google Fonts)

## Customization

### Changing Colors
Edit CSS variables in `css/main.css`:
```css
:root {
  --color-primary: #58a6ff;
  --color-accent: #f0883e;
  /* ... */
}
```

### Adjusting WebGL Effect
Modify shader parameters in `js/webgl-background.js`:
- `color1`, `color2`, `color3`, `color4`: Gradient colors
- Animation speed: Adjust `u_time` multipliers
- Pattern complexity: Change FBM iterations

### Animation Timing
Update transition variables in `css/main.css`:
```css
:root {
  --transition-fast: 0.15s ease;
  --transition-base: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Credits

**Design & Development**: Created with Claude Code using the landing-page-designer skill
**Design Philosophy**: Avoiding generic patterns, creating distinctive experiences
**Inspiration**: Developer tools, IDE themes, technical aesthetics

## License

This is a demonstration/template project. Adapt and use as needed for your own projects.

---

**Design Rails**: The context layer that gives AI code agents the design intelligence they're missing.

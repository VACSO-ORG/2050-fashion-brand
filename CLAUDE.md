# by 2050 - Project Context & Architecture

## What This Repo Is
**by 2050** is a high-end sustainable men's fashion brand built on Shopify. The brand targets high-net-worth individuals aged 25-35 who value quality, sustainability, and modern design.

**Tech Stack:**
- **Templating**: Shopify Liquid (`.liquid` files)
- **Styling**: Modern CSS with Custom Properties, BEM naming
- **Scripting**: Vanilla JavaScript (ES6+ classes, async/await)
- **Package Manager**: npm (Node.js v20.15.0)
- **Framework**: Shopify Theme (no React/Vue - pure Shopify)

## Core Principles

### Design Philosophy
- **Modern & Minimal**: Clean, contemporary aesthetic with no unnecessary elements
- **Sustainable Focus**: Green color accents, sustainability metrics, eco-friendly messaging
- **Luxury Feel**: Premium typography, generous spacing, refined details
- **Men's Fashion**: Earthy tones (greens, greys, browns) - NO blue colors
- **Centered Content**: All hero text must be visible and perfectly centered on page load

### Technical Standards
- **Shopify Liquid**: Primary templating language
- **Modern CSS**: CSS Custom Properties (variables), BEM naming convention
- **JavaScript**: ES6+ (classes, async/await, modern syntax)
- **Responsive**: Mobile-first design, viewport-based units
- **Performance**: Optimized images, lazy loading, minimal JavaScript

## Color Palette (Men's Sustainable Fashion)
- **Primary**: `#1a1a1a` (Deep charcoal)
- **Accent**: `#2d5016` / `#4a7c59` (Forest green - sustainability)
- **Background**: `#fafafa` (Clean white) / `#f5f5f3` (Warm off-white)
- **Text**: `#2c2c2c` (Rich dark grey)
- **Earth**: `#8b6f47` (Earthy brown)
- **NO BLUE COLORS** - Only greens, greys, and earth tones

## Typography
- **Headings**: Space Grotesk (300, 400, 500, 600, 700)
- **Body**: DM Sans (300, 400, 500, 600, 700)
- **Loading**: Google Fonts with preconnect

## Critical Design Rules

### Hero Section
- **Must start at absolute top** (no white space above)
- **100vh height** - exactly viewport height
- **All text visible on load** - no scrolling required to see content
- **Perfectly centered** - both vertically and horizontally
- **Logical spacing** - use flexbox gap, not excessive padding
- **Responsive typography** - use clamp() for fluid scaling

### Header
- **Hidden on hero section** - completely invisible until scrolling
- **Appears after 500px scroll** - smooth fade-in
- **Transparent overlay** - doesn't interfere with hero

### Sections
- **Hide empty sections** - don't show colored banners with no content
- **Consistent spacing** - use CSS variables for spacing scale
- **Product tiles** - reasonable size (not massive), proper grid layout

### Color Consistency
- **No blue colors anywhere** - use !important to override defaults
- **Green accents** - for sustainability messaging
- **Grey/white backgrounds** - clean, minimal
- **Dark hero** - charcoal background with white text

## File Structure
```
by2050/
├── assets/          # CSS, JS, images
├── config/          # Theme settings
├── layout/          # Theme layouts (theme.liquid)
├── locales/         # Translations
├── sections/        # Customizable sections
├── snippets/        # Reusable components
├── templates/       # Page templates
├── scripts/         # Setup scripts
└── docs/            # Documentation
```

## How to Run It

### Development Server
```bash
npm run dev
```
- Starts on `http://localhost:9292`
- Hot reload enabled
- Provides Shopify preview URL
- Password automated: `shoptest`

### Theme Validation
```bash
npm run check
```
- Validates Liquid syntax
- Checks JSON schemas
- Verifies assets and translations

### Deploy to Shopify
```bash
npm run deploy
```
- Pushes theme to `by2050-test.myshopify.com`
- Theme ID: `150233972874`

## How to Test It

### Manual Testing
1. Start dev server: `npm run dev`
2. Open `http://localhost:9292`
3. Check:
   - Hero section loads with all text visible
   - No white space above hero
   - Header hidden on hero, appears on scroll
   - Colors consistent (no blue)
   - Responsive on mobile/tablet/desktop

### Theme Check
```bash
npm run check
```
- Should pass with no errors
- Fix any reported issues before deploying

## Development Workflow
1. **Local Development**: `npm run dev` (localhost:9292 + Shopify preview)
2. **Theme Check**: `npm run check` (validate code)
3. **Deploy**: `npm run deploy` (push to Shopify)
4. **Git**: Commit and push regularly

## Key Features
- AI-powered product recommendations
- AR try-on integration
- Sustainability metrics display
- Advanced filtering and search
- Responsive design
- Accessibility compliant (WCAG 2.1 AA)

## Common Issues to Avoid
- ❌ Blue colors (use greens/greys only)
- ❌ White space above hero
- ❌ Header visible on hero section
- ❌ Empty sections showing colored banners
- ❌ Massive product tiles
- ❌ Text not visible on page load
- ❌ Excessive padding/spacing

## Best Practices
- Use CSS variables for all colors
- Follow BEM naming convention
- Mobile-first responsive design
- Optimize images (responsive srcset)
- Lazy load non-critical assets
- Semantic HTML5
- Proper heading hierarchy (h1 for hero)



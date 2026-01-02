# Cursor IDE Setup Guide for by 2050

## Essential Tools & Setup

### 1. Shopify CLI & Development Environment

**Prerequisites:**
- Node.js v18.20+ installed
- npm installed

**Installation:**
```bash
npm install -g @shopify/cli@latest
```

**Verify Installation:**
```bash
npx @shopify/cli version
```

**Connect & Run:**
```bash
# Login to Shopify
npm run login

# Start development server (localhost + Shopify preview)
npm run dev

# Pull theme from store
npx @shopify/cli theme pull --store=by2050-test.myshopify.com
```

---

### 2. Required Cursor/VS Code Extensions

Install these extensions in Cursor for better Shopify development:

1. **Shopify Liquid**
   - Provides official language support
   - Integrates with Liquid Language Server
   - Search: "Shopify Liquid" in Extensions

2. **Shopify Liquid Autocomplete**
   - Smart suggestions for Shopify objects and filters
   - Search: "Shopify Liquid Autocomplete"

3. **Liquid Prettier Plugin** (Optional)
   - Consistent code formatting
   - Search: "Liquid Prettier"

**How to Install:**
1. Click Extensions icon in Cursor sidebar (or `Ctrl+Shift+X`)
2. Search for each extension by name
3. Click "Install"

---

### 3. AI Configuration & Context

#### File: `CLAUDE.md` (Project Root)
**Purpose:** High-level project context for AI agents

**Location:** `C:\Users\oscar\Projects\by2050\CLAUDE.md`

**Status:** ✅ Created - Contains project goals, architecture, and coding standards

#### File: `.cursorrules` (Project Root)
**Purpose:** Project-specific AI rules and behavior guidelines

**Location:** `C:\Users\oscar\Projects\by2050\.cursorrules`

**Status:** ✅ Created - Contains critical design rules and code standards

**Enable in Cursor:**
1. Go to **Cursor Settings** → **Rules** → **Project Rules**
2. Enable "Enable Cursor rules file"
3. AI will now follow rules in `.cursorrules`

#### MCP Server Configuration
**Purpose:** Real-time Shopify documentation and API access

**Status:** ✅ Configured in `mcp-config.json`

**Current Config:**
```json
{
  "mcpServers": {
    "shopify-dev-mcp": {
      "command": "npx",
      "args": ["-y", "@shopify/dev-mcp@latest"]
    }
  }
}
```

**To Add in Cursor:**
1. Go to **Cursor Settings** → **Tools and Integrations** → **MCP Servers**
2. Add custom MCP server
3. Use the config above

---

## Current Project Status

### ✅ Already Configured
- Shopify CLI installed and working
- `package.json` with all scripts
- `.cursorrules` with project rules
- `CLAUDE.md` with project context
- `mcp-config.json` for Shopify MCP
- Git repository connected
- Development server running

### 📋 Recommended Extensions
Install these in Cursor for best experience:
- Shopify Liquid (syntax highlighting)
- Shopify Liquid Autocomplete (smart suggestions)
- Prettier (code formatting)

### 🎯 Key Project Rules (from .cursorrules)
1. Hero section: 100vh, all text visible on load, perfectly centered
2. Colors: NO blue - only greens, greys, earth tones
3. Header: Hidden on hero, appears after scroll
4. Spacing: Logical, viewport-based, flexbox centering
5. Code: BEM CSS, ES6+ JS, semantic HTML

---

## Quick Commands

```bash
# Development
npm run dev          # Start localhost + Shopify preview

# Deployment
npm run deploy       # Push to Shopify

# Validation
npm run check        # Run theme check

# Shopify CLI
npm run login        # Login to Shopify
npm run stores       # List stores
```

---

## Troubleshooting

### Extension Not Working?
- Reload Cursor window (`Ctrl+R` or `Cmd+R`)
- Check extension is enabled
- Verify file associations (.liquid files)

### MCP Not Connecting?
- Check `mcp-config.json` exists
- Verify Node.js is installed
- Try: `npx -y @shopify/dev-mcp@latest`

### CLI Issues?
- Verify: `npx @shopify/cli version`
- Reinstall: `npm install -g @shopify/cli@latest`
- Check Node.js version: `node --version` (need 18.20+)

---

**Last Updated:** 2025-01-02
**Project:** by 2050 - Sustainable Men's Fashion Brand



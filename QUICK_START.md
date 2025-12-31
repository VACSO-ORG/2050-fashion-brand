# Quick Start Guide - 2050 Fashion Brand

## 🚀 Fast Setup (Windows PowerShell)

```powershell
# Run the setup script
.\setup.ps1

# Or manually:
npm install -g @shopify/cli@latest
npm install
shopify login
```

## 📋 Essential Commands

### Development
```bash
npm run dev          # Start theme development server
npm run check        # Validate theme code
npm run build        # Build theme for production
npm run deploy       # Deploy theme to Shopify
```

### MCP Integration
```bash
npm run mcp          # Start MCP server for AI integration
```

## 🔑 Getting Your Shopify Credentials

1. **For Theme Development:**
   - Go to your Shopify admin
   - Settings → Apps and sales channels → Develop apps
   - Create app → Configure scopes (`read_themes`, `write_themes`)
   - Install app → Copy Admin API access token

2. **For MCP:**
   - Go to [Shopify Partners](https://partners.shopify.com/)
   - Apps → Create app
   - Copy API Key and API Secret

3. **Add to `.env` file:**
   ```env
   SHOPIFY_STORE=your-store.myshopify.com
   SHOPIFY_API_KEY=your-api-key
   SHOPIFY_API_SECRET=your-api-secret
   SHOPIFY_ADMIN_API_ACCESS_TOKEN=your-admin-token
   ```

## 🎯 First Steps

1. ✅ Run setup script or install dependencies
2. ✅ Login to Shopify: `shopify login`
3. ✅ Configure `.env` with your credentials
4. ✅ Start dev server: `npm run dev`
5. ✅ Start MCP server: `npm run mcp` (in separate terminal)

## 📚 Full Documentation

- See `SETUP.md` for detailed setup instructions
- See `README.md` for project overview


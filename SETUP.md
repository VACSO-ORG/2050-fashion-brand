# Shopify Setup Guide for 2050 Fashion Brand

## Step-by-Step Setup Instructions

### 1. Install Shopify CLI

Choose one of the following methods:

**Using npm:**
```bash
npm install -g @shopify/cli@latest
```

**Using yarn:**
```bash
yarn global add @shopify/cli@latest
```

**Using pnpm:**
```bash
pnpm add -g @shopify/cli@latest
```

**Using Homebrew (macOS):**
```bash
brew tap shopify/shopify
brew install shopify-cli
```

Verify installation:
```bash
shopify version
```

### 2. Create or Access Your Shopify Store

You have two options:

**Option A: Use an existing store**
- Log in to your Shopify admin
- Note your store URL (e.g., `your-store.myshopify.com`)

**Option B: Create a development store**
1. Go to [Shopify Partners](https://partners.shopify.com/)
2. Sign up or log in
3. Create a new development store
4. Choose "Development store" type

### 3. Authenticate with Shopify

Run the login command:
```bash
shopify login
```

This will open your browser to authenticate. Follow the prompts.

### 4. Initialize Theme (if starting fresh)

If you're creating a new theme:
```bash
shopify theme init
```

Or pull an existing theme:
```bash
shopify theme pull
```

### 5. Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your credentials:
   - Get API credentials from [Shopify Partner Dashboard](https://partners.shopify.com/)
   - Or use the CLI to generate tokens

### 6. Get Shopify API Credentials

**For MCP Integration:**

1. Go to [Shopify Partners Dashboard](https://partners.shopify.com/)
2. Navigate to "Apps" → "Create app"
3. Create a custom app or use an existing one
4. Go to "API credentials"
5. Copy:
   - API Key → `SHOPIFY_API_KEY`
   - API Secret → `SHOPIFY_API_SECRET`

**For Theme Development:**

1. In your Shopify admin, go to Settings → Apps and sales channels
2. Click "Develop apps" → "Create an app"
3. Configure API scopes (at minimum: `read_themes`, `write_themes`)
4. Install the app and copy the Admin API access token

### 7. Start Development

**Start theme development server:**
```bash
npm run dev
```

This will:
- Start a local development server
- Provide a preview URL
- Enable hot reload for changes

**Start MCP server (in a separate terminal):**
```bash
npm run mcp
```

### 8. Configure MCP in Cursor

1. Open Cursor settings
2. Navigate to MCP settings
3. Add the configuration from `mcp-config.json`
4. Or manually add:
   ```json
   {
     "mcpServers": {
       "shopify-dev-mcp": {
         "command": "npx",
         "args": ["-y", "@shopify/dev-mcp@latest"],
         "env": {
           "SHOPIFY_API_KEY": "your-api-key",
           "SHOPIFY_API_SECRET": "your-api-secret",
           "SHOPIFY_STORE": "your-store.myshopify.com"
         }
       }
     }
   }
   ```

### 9. Verify Setup

1. **Test Shopify CLI:**
   ```bash
   shopify theme list
   ```

2. **Test MCP:**
   - The MCP server should start without errors
   - Check Cursor's MCP connection status

3. **Test Theme Development:**
   - Make a change to a theme file
   - Verify hot reload works
   - Check the preview URL

## Troubleshooting

### CLI Authentication Issues
- Try `shopify logout` then `shopify login` again
- Clear browser cookies for Shopify
- Check your internet connection

### MCP Server Not Starting
- Verify Node.js version (20.10+)
- Check that `.env` file exists and has correct values
- Ensure `@shopify/dev-mcp` package is accessible

### Theme Not Loading
- Verify you're connected to the correct store
- Check theme permissions in Shopify admin
- Ensure you have `read_themes` and `write_themes` scopes

### Permission Errors
- Verify API credentials have correct scopes
- Check that the app is installed on your store
- Regenerate API tokens if needed

## Next Steps

1. Customize your theme in the `sections/`, `snippets/`, and `templates/` directories
2. Add your brand assets to the `assets/` directory
3. Configure theme settings in `config/settings_schema.json`
4. Test on a development store before deploying to production

## Resources

- [Shopify CLI Documentation](https://shopify.dev/docs/apps/tools/cli)
- [Shopify Theme Development](https://shopify.dev/docs/themes)
- [Shopify Partners Dashboard](https://partners.shopify.com/)
- [Shopify MCP Documentation](https://shopify.dev/docs/apps/tools/mcp)



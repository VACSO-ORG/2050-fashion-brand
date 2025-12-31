# 🔧 Fix "A store is required" Error

## The Problem
You're getting: `A store is required` when running `npm run dev`

This means Shopify CLI needs to know which store to connect to.

## ✅ Solution - Two Options:

### **Option 1: Login First (Recommended)**

1. **Login to Shopify:**
   ```powershell
   npx @shopify/cli login
   ```
   - This opens your browser
   - Log in to your Shopify account
   - Authorize the CLI

2. **Then run dev (it will prompt you to select a store):**
   ```powershell
   npm run dev
   ```
   - You'll see a list of your stores
   - Select one with arrow keys
   - Press Enter

### **Option 2: Specify Store Directly**

If you already know your store URL:

```powershell
npx @shopify/cli theme dev --store=YOUR-STORE-NAME.myshopify.com
```

Replace `YOUR-STORE-NAME` with your actual store name (e.g., `2050-dev.myshopify.com`)

---

## 🆘 If You Don't Have a Store Yet:

1. **Create a FREE Development Store:**
   - Go to: https://partners.shopify.com/
   - Sign up or log in (FREE)
   - Click "Stores" → "Add store" → "Development store"
   - Name it (e.g., "2050 Fashion Brand")
   - Click "Create"
   - **Copy your store URL** (e.g., `your-store-name.myshopify.com`)

2. **Then use Option 1 or 2 above**

---

## 📝 Quick Fix Commands:

```powershell
# Step 1: Login
npx @shopify/cli login

# Step 2: Start dev (will prompt for store selection)
npm run dev
```

That's it! 🎉



# Shopify Development Workflow with Cursor

## ✅ Understanding Your Development Setup

### How It Works

1. **Local Development Server** (`localhost:9292`)
   - Serves your local theme files
   - Hot reloads changes instantly
   - Proxies requests to your Shopify store
   - **This is your primary development environment**

2. **Shopify Preview URL** (`https://by2050-test.myshopify.com/?preview_theme_id=150233972874`)
   - Shows your theme on the actual Shopify store
   - Uses real store data (products, collections, etc.)
   - Updates automatically when you push changes
   - **Use this to test with real store data**

---

## ⚠️ CORS Errors - This is NORMAL!

### What You're Seeing

```
Access to fetch at 'https://by2050-test.myshopify.com/api/collect' 
from origin 'http://localhost:9292' has been blocked by CORS policy
```

### Why This Happens

- Shopify's built-in analytics scripts try to send performance data to the store
- Browsers block cross-origin requests from `localhost` to `myshopify.com` for security
- **This is expected behavior and does NOT affect your site functionality**

### What This Means

✅ **Your site is working correctly**  
✅ **All features function normally**  
✅ **These errors are harmless**  
✅ **They won't appear in production** (when your site is live on Shopify)

---

## 🚀 Proper Development Workflow

### 1. Start Development Server

```powershell
npm run dev
```

This:
- Starts localhost server at `http://localhost:9292`
- Watches for file changes
- Auto-syncs to Shopify development theme
- Provides hot reloading

### 2. Make Changes

- Edit any file in your theme (`.liquid`, `.css`, `.js`)
- Save the file
- Changes appear instantly on `localhost:9292`
- Changes also sync to Shopify preview URL

### 3. Test Your Changes

**Option A: Localhost (Fast)**
- Open `http://localhost:9292`
- Fastest way to see changes
- Hot reload enabled
- Use for rapid iteration

**Option B: Shopify Preview (Real Store)**
- Open `https://by2050-test.myshopify.com/?preview_theme_id=150233972874`
- Uses real store data
- Test with actual products/collections
- Use for final testing

---

## 📋 What to Ignore vs. What to Fix

### ✅ Safe to Ignore

- **CORS errors** - Normal in localhost development
- **Analytics API failures** - Expected when developing locally
- **Shop.app iframe warnings** - Shopify admin integration, harmless

### ⚠️ Fix These

- **500 Internal Server Errors** - Theme code issues
- **404 Not Found** - Missing files or incorrect paths
- **Liquid syntax errors** - Check Theme Check
- **CSS not loading** - Check file paths and asset URLs
- **JavaScript errors** - Check console for actual code issues

---

## 🔍 How to Verify Everything is Working

### Check 1: Site Renders
- Open `http://localhost:9292`
- Do you see your theme?
- Are styles applied?
- Is content visible?

### Check 2: No Critical Errors
- Open browser DevTools (F12)
- Check Console tab
- **Ignore CORS errors** (they're normal)
- Look for actual JavaScript errors (red, with stack traces)

### Check 3: Changes Sync
- Edit a CSS file
- Save it
- Refresh browser
- Do changes appear?

### Check 4: Theme Check Passes
```powershell
npm run check
```
- Should show only warnings (not errors)
- Warnings are suggestions, not blockers

---

## 🛠️ Best Practices

### 1. Use Localhost for Development
- Fastest iteration
- Instant feedback
- Hot reload enabled

### 2. Use Shopify Preview for Testing
- Test with real data
- Verify production-like behavior
- Share with team/stakeholders

### 3. Check Theme Check Regularly
```powershell
npm run check
```
- Catches errors early
- Ensures code quality
- Validates Liquid syntax

### 4. Commit Often
```powershell
git add -A
git commit -m "Description of changes"
git push origin main
```
- Save your work
- Track changes
- Easy rollback if needed

---

## 🎯 Quick Reference

**Start Development:**
```powershell
npm run dev
```

**Check for Errors:**
```powershell
npm run check
```

**Push to Shopify:**
```powershell
npm run push
```

**View Local:**
```
http://localhost:9292
```

**View on Shopify:**
```
https://by2050-test.myshopify.com/?preview_theme_id=150233972874
```

---

## 💡 Key Takeaway

**CORS errors are NORMAL and HARMLESS in localhost development.**

They're just browser security warnings from Shopify's analytics trying to connect. Your site works perfectly - these errors don't affect functionality at all.

Focus on:
- ✅ Is your site rendering?
- ✅ Are your styles working?
- ✅ Do changes sync properly?
- ✅ Are there actual JavaScript errors (not CORS)?

If yes to all, you're good to go! 🚀


# 🖥️ Localhost Development Guide - by 2050

## ✅ YES! You Can View on Localhost!

Shopify CLI provides a **local development server** that runs on `localhost` and syncs with your Shopify store.

---

## 🚀 QUICK START - Local Development

### **Step 1: Start Development Server**

Run this command in your terminal:

```powershell
cd C:\Users\oscar\Projects\by2050
npx @shopify/cli theme dev --store=by2050-test.myshopify.com
```

**When prompted for password, enter:** `shoptest`

---

## ✅ What You'll Get:

After running the command, you'll see:

```
✓ Syncing theme files
✓ Server running at http://127.0.0.1:9292
✓ Preview: https://by2050-test.myshopify.com/?preview_theme_id=150233972874
```

**You'll have TWO ways to view:**

1. **Localhost:** `http://127.0.0.1:9292` or `http://localhost:9292`
   - ✅ Fast local development
   - ✅ Hot reload (changes appear instantly)
   - ✅ No password needed

2. **Shopify Preview:** `https://by2050-test.myshopify.com/?preview_theme_id=150233972874`
   - ✅ See it on actual Shopify
   - ✅ Test with real store data

---

## 🔧 Why You're Seeing 404 Error

The 404 error happens because:

1. **The theme is NOT published** - it's a development theme
2. **You're accessing the store directly** without the preview URL
3. **The store needs the preview parameter** to show the development theme

---

## ✅ SOLUTION - Use Preview URL

**Instead of:** `https://by2050-test.myshopify.com`

**Use this:** `https://by2050-test.myshopify.com/?preview_theme_id=150233972874`

This will show your development theme!

---

## 🎯 BEST WORKFLOW

### **For Development (Recommended):**

1. **Start local server:**
   ```powershell
   npx @shopify/cli theme dev --store=by2050-test.myshopify.com
   ```
   (Enter password: `shoptest` when prompted)

2. **Open localhost:**
   - Go to: `http://localhost:9292`
   - Make changes to your files
   - See changes instantly!

3. **When ready to test on Shopify:**
   - Use the preview URL from terminal
   - Or publish the theme in Shopify admin

---

## 📋 Complete Command

```powershell
# Navigate to project
cd C:\Users\oscar\Projects\by2050

# Start development server
npx @shopify/cli theme dev --store=by2050-test.myshopify.com
# Password: shoptest
```

---

## 🎉 Benefits of Localhost Development

- ✅ **Fast** - No network delay
- ✅ **Hot Reload** - Changes appear instantly
- ✅ **No Password** - Access without store password
- ✅ **Offline Capable** - Works without internet (after initial sync)
- ✅ **Better Debugging** - Use browser dev tools easily

---

## 🔍 Troubleshooting

**"Failed to prompt: Enter your store password":**
- Run the command in YOUR terminal (not through me)
- Enter password when prompted: `shoptest`

**"Port 9292 already in use":**
- Close other Shopify dev servers
- Or use: `npx @shopify/cli theme dev --store=by2050-test.myshopify.com --port=9293`

**Localhost shows 404:**
- Make sure the dev server is running
- Check terminal for errors
- Try refreshing the page

---

## 📝 Quick Reference

**Localhost URL:** `http://localhost:9292`  
**Preview URL:** `https://by2050-test.myshopify.com/?preview_theme_id=150233972874`  
**Theme ID:** `150233972874`  
**Store Password:** `shoptest`

---

**Start the dev server now and enjoy localhost development!** 🚀


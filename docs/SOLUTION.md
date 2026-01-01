# ✅ SOLUTION - Fix "A store is required" Error

## 🎯 The Problem
You're getting: **"A store is required"** when running `npm run dev`

This happens because Shopify CLI needs to know which store to connect to.

---

## 🔧 THE FIX - 3 Simple Steps

### **STEP 1: Login to Shopify**

```powershell
npm run login
```

**OR:**
```powershell
npx @shopify/cli auth login
```

**What happens:**
- Opens your browser
- Log in to Shopify
- Authorize the CLI
- Saves your credentials

---

### **STEP 2: Get Your Store URL**

**Option A: You already have a store**
- Your store URL is: `your-store-name.myshopify.com`
- Skip to Step 3

**Option B: Create a FREE development store**
1. Go to: **https://partners.shopify.com/**
2. Sign up or log in (FREE)
3. Click **"Stores"** → **"Add store"** → **"Development store"**
4. Name it: `2050-fashion-brand`
5. Click **"Create"**
6. **Copy your store URL** (e.g., `2050-fashion-brand.myshopify.com`)

---

### **STEP 3: Start Development**

**Method 1: Let it prompt you (Easiest)**
```powershell
npm run dev
```
- You'll see a list of stores
- Select one with arrow keys
- Press Enter

**Method 2: Specify store directly**
```powershell
npx @shopify/cli theme dev --store=YOUR-STORE-NAME.myshopify.com
```

Replace `YOUR-STORE-NAME` with your actual store name.

---

## 🚀 Quick Commands (Copy & Paste)

```powershell
# 1. Login
npm run login

# 2. Start dev (will prompt for store)
npm run dev
```

**That's it!** 🎉

---

## ✅ What Success Looks Like

After running `npm run dev`, you should see:

```
> 2050-fashion-brand@1.0.0 dev
> npx @shopify/cli theme dev

? Select a store: (Use arrow keys)
❯ your-store.myshopify.com

✓ Syncing theme files
✓ Server running at http://127.0.0.1:9292
✓ Preview: https://your-store.myshopify.com/?preview_theme_id=123456
```

**Copy the preview URL and open it in your browser!** 🌐

---

## 🆘 Still Having Issues?

### **Error: "Not authenticated"**
→ Run: `npm run login`

### **Error: "No stores found"**
→ Create a development store at https://partners.shopify.com/

### **Error: "Store not found"**
→ Make sure format is: `store-name.myshopify.com` (no https://)

### **Error: "Permission denied"**
→ Make sure your account has access to the store

---

## 📝 Alternative: Set Store in .env

If you want to avoid selecting the store each time:

1. **Edit `.env` file:**
   ```env
   SHOPIFY_STORE=your-store-name.myshopify.com
   ```

2. **Then run:**
   ```powershell
   npm run dev
   ```

---

## 🎊 You're All Set!

Once connected, your theme will:
- ✅ Sync automatically
- ✅ Hot reload on changes
- ✅ Provide preview URL
- ✅ Be ready for development

**Everything is pushed to GitHub and ready to go!** 🚀


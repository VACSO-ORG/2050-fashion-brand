# 🔧 Fix Connection Issues - Step by Step

## The Main Problem
You're getting "A store is required" because Shopify CLI needs to know which store to connect to.

## ✅ SOLUTION - Follow These Steps:

### **Step 1: Check if You're Logged In**

```powershell
npx @shopify/cli auth whoami
```

If you see an error, you need to log in first.

### **Step 2: Login to Shopify**

```powershell
npm run login
```

OR directly:
```powershell
npx @shopify/cli auth login
```

This will:
- Open your browser
- Ask you to log in to Shopify
- Authorize the CLI
- Save your credentials

### **Step 3: List Your Stores**

```powershell
npm run stores
```

OR:
```powershell
npx @shopify/cli store list
```

This shows all stores you have access to. **Copy one of the store URLs.**

### **Step 4: Start Development with Store**

**Option A: Let it prompt you (Easiest)**
```powershell
npm run dev
```
When prompted, select your store from the list.

**Option B: Specify store directly**
```powershell
npx @shopify/cli theme dev --store=YOUR-STORE-NAME.myshopify.com
```

Replace `YOUR-STORE-NAME` with your actual store name.

---

## 🆘 If You Don't Have a Store Yet:

### **Create a FREE Development Store:**

1. Go to: **https://partners.shopify.com/**
2. Sign up or log in (it's FREE)
3. Click **"Stores"** → **"Add store"** → **"Development store"**
4. Fill in:
   - Store name: `2050-fashion-brand` (or your choice)
   - Store purpose: Development
   - Store type: Development store
5. Click **"Create development store"**
6. **Copy your store URL** (e.g., `2050-fashion-brand.myshopify.com`)

Then go back to Step 4 above.

---

## 🔄 Quick Fix Commands (Copy & Paste):

```powershell
# 1. Login
npm run login

# 2. List stores
npm run stores

# 3. Start dev (will prompt for store)
npm run dev
```

---

## 📝 Alternative: Set Store in Environment Variable

If you want to avoid typing the store each time:

1. **Edit `.env` file:**
   ```env
   SHOPIFY_STORE=your-store-name.myshopify.com
   ```

2. **Or set it in PowerShell:**
   ```powershell
   $env:SHOPIFY_FLAG_STORE="your-store-name.myshopify.com"
   ```

3. **Then run:**
   ```powershell
   npm run dev
   ```

---

## ✅ Verification

After connecting, you should see:
```
✓ Syncing theme files
✓ Server running at http://127.0.0.1:9292
✓ Preview: https://your-store.myshopify.com/?preview_theme_id=123456
```

If you see this, **you're connected!** 🎉

---

## 🐛 Common Errors & Fixes

**Error: "Not authenticated"**
→ Run: `npm run login`

**Error: "Store not found"**
→ Make sure store URL format is: `store-name.myshopify.com` (no https://)

**Error: "Permission denied"**
→ Make sure your account has access to the store

**Error: "Command not found"**
→ Make sure you're in the project directory: `cd C:\Users\oscar\Projects\by2050`

---

## 🎯 What You Should See When It Works:

```
> 2050-fashion-brand@1.0.0 dev
> npx @shopify/cli theme dev

? Select a store: (Use arrow keys)
❯ your-store.myshopify.com
  another-store.myshopify.com

✓ Syncing theme files
✓ Server running at http://127.0.0.1:9292
✓ Preview: https://your-store.myshopify.com/?preview_theme_id=123456
```

**That's success!** ✅


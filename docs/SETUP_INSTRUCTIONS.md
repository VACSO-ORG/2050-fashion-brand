# 🚀 Setup Instructions - by 2050 Development

## ⚠️ Important: Password Prompt Issue

The Shopify CLI requires **interactive password input**, which means you need to run the command in **YOUR terminal**, not through automation.

---

## ✅ SOLUTION: Run in Your Terminal

### **Step 1: Open Your Terminal**

Open PowerShell or Command Prompt.

### **Step 2: Navigate to Project**

```powershell
cd C:\Users\oscar\Projects\by2050
```

### **Step 3: Start Development Server**

```powershell
npm run dev
```

**OR directly:**

```powershell
npx @shopify/cli theme dev --store=by2050-test.myshopify.com --theme=150233972874
```

### **Step 4: Enter Password When Prompted**

When you see:
```
Enter your store password:
```

Type: **`shoptest`**

Press Enter.

---

## ✅ What You'll See:

After entering the password:

```
✓ Syncing theme files
✓ Server running at http://127.0.0.1:9292
✓ Preview: https://by2050-test.myshopify.com/?preview_theme_id=150233972874
```

---

## 🎯 Then Open:

1. **Localhost:** `http://localhost:9292`
2. **Shopify Preview:** `https://by2050-test.myshopify.com/?preview_theme_id=150233972874`

---

## 🔧 Alternative: Use PowerShell Script

I've created a helper script:

```powershell
cd C:\Users\oscar\Projects\by2050
.\START_DEV.ps1
```

This will guide you through the process.

---

## 📋 Quick Reference

**Command:**
```powershell
npm run dev
```

**Password:** `shoptest`

**URLs:**
- Localhost: `http://localhost:9292`
- Shopify: `https://by2050-test.myshopify.com/?preview_theme_id=150233972874`

---

## 🆘 If It Still Doesn't Work

1. **Make sure you're logged in:**
   ```powershell
   npm run login
   ```

2. **Verify store access:**
   ```powershell
   npm run list
   ```

3. **Try manual command:**
   ```powershell
   npx @shopify/cli theme dev --store=by2050-test.myshopify.com --theme=150233972874
   ```

---

**Run `npm run dev` in YOUR terminal and enter the password when asked!** 🚀


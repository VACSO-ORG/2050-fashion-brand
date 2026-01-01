# 🔧 Troubleshooting Setup Issues - by 2050

## 🎯 Common Issues & Solutions

### **Issue 1: "Command not found" or "npm run dev" fails**

**Solution:**
```powershell
# Make sure you're in the project directory
cd C:\Users\oscar\Projects\by2050

# Install dependencies first
npm install

# Then try again
npm run dev
```

---

### **Issue 2: "A store is required" or "Store not found"**

**Solution:**
```powershell
# Login first
npm run login

# Then try dev command
npm run dev
```

---

### **Issue 3: "Failed to prompt: Enter your store password"**

**Solution:**
- Run the command in YOUR terminal (not through automation)
- When prompted, enter: `shoptest`
- Make sure terminal is interactive

---

### **Issue 4: "Port 9292 already in use"**

**Solution:**
```powershell
# Kill the process using port 9292
# Or use a different port
npx @shopify/cli theme dev --store=by2050-test.myshopify.com --theme=150233972874 --port=9293
```

---

### **Issue 5: "Theme not found" or "Invalid theme ID"**

**Solution:**
```powershell
# List themes to verify
npm run list

# If theme ID changed, update shopify.theme.toml
```

---

### **Issue 6: Authentication errors**

**Solution:**
```powershell
# Logout and login again
npm run logout
npm run login

# Then try dev
npm run dev
```

---

### **Issue 7: Localhost shows 404**

**Solution:**
- Make sure dev server is running
- Check terminal for errors
- Try refreshing the page
- Verify the port number matches terminal output

---

## 🔍 Step-by-Step Diagnosis

### **Step 1: Verify Installation**

```powershell
cd C:\Users\oscar\Projects\by2050
npm install
```

### **Step 2: Check Login Status**

```powershell
npm run login
```

### **Step 3: Verify Store Access**

```powershell
npm run list
```

Should show your themes.

### **Step 4: Try Dev Command**

```powershell
npm run dev
```

Enter password: `shoptest`

---

## 🆘 Still Having Issues?

**Please share:**
1. The exact error message
2. What command you ran
3. What step you're on

**Common fixes:**
- Reinstall: `npm install`
- Re-login: `npm run logout && npm run login`
- Check Node.js version: `node --version` (should be 18+)
- Clear cache: `npm cache clean --force`

---

## 📋 Manual Alternative

If `npm run dev` doesn't work, try directly:

```powershell
npx @shopify/cli theme dev --store=by2050-test.myshopify.com --theme=150233972874
```

Enter password: `shoptest`

---

**What specific error are you seeing?** Share the error message and I'll help fix it! 🔧


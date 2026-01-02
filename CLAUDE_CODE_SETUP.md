# Claude Code CLI Setup - by 2050

## Status Check

### ❌ Claude CLI Not Installed

Claude CLI/Code is **not currently installed** on your system. Here's how to set it up:

---

## Installation Options

### Option 1: Install Claude CLI (Recommended)

**For Windows (PowerShell):**
```powershell
# Install via npm (if you have Node.js)
npm install -g @anthropic-ai/claude-cli

# Or download from Anthropic's website
# Visit: https://claude.ai/download
```

**Verify Installation:**
```bash
claude --version
```

### Option 2: Use Claude Code in Cursor (Already Available)

You're already using **Cursor with Claude AI**, which provides Claude Code functionality:
- ✅ AI code assistance
- ✅ Project context from `CLAUDE.md`
- ✅ Rules from `.cursorrules`
- ✅ MCP integration

**No additional installation needed** - Cursor handles this!

---

## What's Already Set Up

### ✅ Repository Bootstrapped for Claude Code

1. **`.cursor/rules/000-core.mdc`**
   - Core agent rules
   - Design standards
   - Code quality guidelines

2. **`.claude/commands/healthcheck.md`**
   - Reusable health check checklist
   - Common issues & fixes
   - Success criteria

3. **`CLAUDE.md`** (Updated)
   - Project context
   - How to run/test
   - Key folders
   - Coding conventions

4. **`package.json` Scripts**
   - `npm run check` - Theme validation
   - `npm run test` - Alias for check
   - `npm run lint` - Alias for check
   - `npm run typecheck` - Placeholder (no TS)

---

## How to Use Claude Code

### In Cursor (Current Setup)

1. **Open any file** in the project
2. **Ask Claude** (via Cursor chat):
   - "Fix the hero spacing"
   - "Add a new section"
   - "Check for errors"
3. **Claude will:**
   - Read `CLAUDE.md` for context
   - Follow `.cursor/rules` for standards
   - Use health check commands when needed

### With Claude CLI (If Installed)

```bash
# Run health check
claude healthcheck

# Ask questions about the codebase
claude ask "How does the hero section work?"

# Generate code
claude generate "Add a new product card component"
```

---

## Quick Test

### Test Current Setup (Cursor)

1. Open `sections/hero-banner.liquid`
2. Ask Cursor/Claude: "Explain this hero section"
3. Should reference `CLAUDE.md` and follow rules

### Test Health Check

```bash
npm run check
```

Should run Shopify theme validation.

---

## Next Steps

### If You Want Claude CLI:

1. **Install it:**
   ```bash
   npm install -g @anthropic-ai/claude-cli
   ```

2. **Authenticate:**
   ```bash
   claude auth login
   ```

3. **Test it:**
   ```bash
   claude --version
   claude healthcheck
   ```

### If Using Cursor Only:

✅ **You're all set!** Cursor provides Claude Code functionality:
- Project context from `CLAUDE.md`
- Rules from `.cursor/rules/`
- Health checks via `npm run check`
- MCP integration for Shopify

---

## Summary

- ❌ **Claude CLI**: Not installed (optional)
- ✅ **Claude Code in Cursor**: Ready to use
- ✅ **Repository**: Bootstrapped for AI assistance
- ✅ **Health Checks**: Available via `npm run check`

**Recommendation:** Continue using Cursor - it provides all Claude Code functionality you need!


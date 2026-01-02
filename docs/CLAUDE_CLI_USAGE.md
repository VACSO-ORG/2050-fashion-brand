# Claude Code CLI - Usage Guide

## How Claude Code CLI Works

### Where It's Used

**Claude Code CLI is used in your TERMINAL, not in Cursor chat.**

- **This chat (Cursor)**: Uses Cursor's built-in AI (me, Auto)
- **Claude Code CLI**: Separate command-line tool for terminal use
- **They work independently** - you can use both!

---

## Installation Status

### ✅ Installing Claude Code CLI

```bash
npm install -g claude-code
```

### Verify Installation

```bash
claude --version
```

---

## How to Use Claude Code CLI

### 1. Authenticate (First Time)

```bash
claude auth login
```

You'll need:
- Anthropic account (Pro or Max plan - $20+/month)
- Follow the authentication prompts

### 2. Use in Terminal

**Ask questions:**
```bash
claude ask "How does the hero section work in this project?"
```

**Run health checks:**
```bash
claude healthcheck
```

**Generate code:**
```bash
claude generate "Add a new product card component"
```

**Review code:**
```bash
claude review assets/base.css
```

---

## When to Use Each Tool

### Use Cursor Chat (This Chat) For:
- ✅ Quick questions while coding
- ✅ File editing and changes
- ✅ Project-wide context
- ✅ Real-time assistance
- ✅ **No account needed**

### Use Claude Code CLI For:
- ✅ Terminal-based workflows
- ✅ Scripts and automation
- ✅ CI/CD pipelines
- ✅ Command-line operations
- ⚠️ **Requires Anthropic account**

---

## Account Requirements

### Claude Code CLI Needs:
- **Anthropic Pro Plan**: $20/month
  - Includes Claude Code terminal access
  - 5x more capacity than Free plan
  - Access to Claude 4 Sonnet and Opus

- **Anthropic Max Plan**: $100+/month
  - 5x higher rate limits than Pro
  - Advanced features
  - Claude Code terminal access

### Sign Up:
1. Visit https://claude.ai
2. Sign up for Pro or Max plan
3. Run `claude auth login`
4. Follow authentication steps

---

## Quick Start After Installation

```bash
# 1. Authenticate
claude auth login

# 2. Test it works
claude --version

# 3. Ask a question
claude ask "What is this project?"

# 4. Run health check
claude healthcheck
```

---

## Integration with This Project

### Project Already Configured For:
- ✅ `.claude/commands/healthcheck.md` - Health check commands
- ✅ `CLAUDE.md` - Project context
- ✅ `.cursor/rules/` - Code standards

### Claude Code CLI Will:
- Read `CLAUDE.md` for project context
- Use `.claude/commands/` for health checks
- Follow project conventions

---

## Summary

| Tool | Where Used | Account Needed | Best For |
|------|------------|----------------|----------|
| **Cursor Chat** (This) | Cursor IDE | ❌ No | Quick coding help |
| **Claude Code CLI** | Terminal | ✅ Yes ($20+/month) | Terminal workflows |

**Recommendation:** 
- **Keep using Cursor chat** (this) for most tasks - it's free and works great!
- **Add Claude Code CLI** only if you need terminal-based workflows or automation

---

## Troubleshooting

### Installation Issues
```bash
# Check Node.js version (need 18+)
node --version

# Reinstall if needed
npm uninstall -g claude-code
npm install -g claude-code
```

### Authentication Issues
```bash
# Re-authenticate
claude auth logout
claude auth login
```

### Not Working?
- Ensure you have Anthropic Pro/Max account
- Check `claude --version` shows installed version
- Verify authentication: `claude auth status`


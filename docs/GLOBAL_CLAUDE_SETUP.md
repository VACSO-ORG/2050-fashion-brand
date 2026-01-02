# Global Claude Code CLI Setup - All Projects

## ✅ Status: Claude Code CLI is Global

**Claude Code CLI is installed globally** and works from **any project** in `C:\Users\oscar\Projects\`.

---

## Verification

### Test from Any Directory

```bash
# From Projects root
cd C:\Users\oscar\Projects
claude --version

# From any project
cd C:\Users\oscar\Projects\by2050
claude --version

# From another project
cd C:\Users\oscar\Projects\[any-project]
claude --version
```

**All should work!** ✅

---

## How It Works

### Global Installation
- **Installed via**: `npm install -g claude-code`
- **Location**: Global npm packages directory
- **Available**: From any directory on your system
- **PATH**: Automatically added to system PATH

### Authentication (One-Time)
```bash
# Run once from any directory
claude auth login
```

**Credentials are stored globally** - you only need to authenticate once!

---

## Usage from Any Project

### 1. Navigate to Project
```bash
cd C:\Users\oscar\Projects\by2050
# or
cd C:\Users\oscar\Projects\[any-project]
```

### 2. Use Claude Code CLI
```bash
# Interactive session
claude

# Ask about project
claude "What is this project about?"

# Run health check (if project has .claude/commands/)
claude healthcheck
```

### 3. Project Context
Claude Code CLI will automatically:
- Look for `CLAUDE.md` in project root
- Use `.claude/commands/` if available
- Read project files for context

---

## Project Setup (Optional)

### For Best Results, Each Project Should Have:

1. **`CLAUDE.md`** (Optional but recommended)
   - Project context
   - How to run/test
   - Key conventions

2. **`.claude/commands/healthcheck.md`** (Optional)
   - Health check commands
   - Common issues

3. **`.cursor/rules/`** (For Cursor IDE)
   - Code standards
   - Design rules

### Example: by2050 Project
```
by2050/
├── CLAUDE.md                    ✅ Has project context
├── .claude/
│   └── commands/
│       └── healthcheck.md      ✅ Has health checks
└── .cursor/
    └── rules/
        └── 000-core.mdc         ✅ Has rules
```

---

## Quick Test

### Test Global Access

```bash
# 1. Go to Projects root
cd C:\Users\oscar\Projects

# 2. Test Claude CLI
claude --version
# Should show: 2.0.76 (Claude Code)

# 3. Go to any project
cd by2050

# 4. Use Claude CLI
claude "What is this project?"
```

---

## Troubleshooting

### If `claude` Command Not Found

```bash
# Check npm global path
npm config get prefix

# Verify installation
npm list -g claude-code

# Reinstall if needed
npm install -g claude-code
```

### If Authentication Fails

```bash
# Re-authenticate
claude auth logout
claude auth login
```

### Check PATH

```powershell
# Verify claude is in PATH
where.exe claude

# Should show path like:
# C:\Users\oscar\AppData\Roaming\npm\claude.cmd
```

---

## Summary

✅ **Claude Code CLI is global** - works from any directory
✅ **One-time authentication** - `claude auth login` once
✅ **Project-specific context** - reads `CLAUDE.md` from each project
✅ **No per-project installation** - install once, use everywhere

**You're all set!** Use `claude` from any project in `C:\Users\oscar\Projects\`.

---

## Next Steps

1. **Authenticate** (if not done):
   ```bash
   claude auth login
   ```

2. **Test from any project**:
   ```bash
   cd C:\Users\oscar\Projects\[any-project]
   claude "What is this project?"
   ```

3. **Add `CLAUDE.md` to projects** (optional but recommended):
   - Helps Claude Code understand each project
   - See `by2050/CLAUDE.md` as example


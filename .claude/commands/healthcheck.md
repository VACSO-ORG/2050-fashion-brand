# Health Check - by 2050

Reusable checklist for verifying the project is in a good state.

## Steps

1. **Install Dependencies** (if needed)
   ```bash
   npm install
   ```

2. **Run Theme Check** (Shopify validation)
   ```bash
   npm run check
   ```
   - Reports Liquid syntax errors
   - Validates JSON schemas
   - Checks for missing assets/translations
   - **Fix any errors before proceeding**

3. **Verify Development Server** (optional)
   ```bash
   npm run dev
   ```
   - Should start on `http://localhost:9292`
   - Should provide Shopify preview URL
   - Check for console errors

4. **Check Git Status**
   ```bash
   git status
   ```
   - Ensure no uncommitted critical changes
   - Verify .env files are ignored

## Common Issues & Fixes

### Theme Check Errors
- **Missing translation keys**: Add to `locales/en.default.json`
- **Invalid JSON**: Check `templates/*.json` and `config/settings_schema.json`
- **Missing assets**: Verify files exist in `assets/` directory

### Development Server Issues
- **Port already in use**: Kill process on port 9292
- **Store connection error**: Run `npm run login`
- **Password required**: Already automated in `npm run dev`

### File Structure Issues
- **Missing directories**: Create standard Shopify structure
- **Incorrect file locations**: Follow Shopify theme conventions

## Success Criteria

✅ All dependencies installed
✅ Theme check passes with no errors
✅ Development server starts successfully
✅ No critical Git conflicts
✅ All required files present


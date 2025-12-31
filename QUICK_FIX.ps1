# Quick Fix Script for Shopify Connection
# Run this to fix "A store is required" error

Write-Host "=== 2050 Fashion Brand - Connection Fix ===" -ForegroundColor Cyan
Write-Host ""

# Step 1: Check authentication
Write-Host "Step 1: Checking authentication..." -ForegroundColor Yellow
$authCheck = npx @shopify/cli auth whoami 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠ Not logged in. Let's fix that..." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Opening login in browser..." -ForegroundColor Cyan
    npx @shopify/cli auth login
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Login successful!" -ForegroundColor Green
    } else {
        Write-Host "✗ Login failed. Please try manually: npm run login" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "✓ Already authenticated" -ForegroundColor Green
}

Write-Host ""

# Step 2: List stores
Write-Host "Step 2: Getting your stores..." -ForegroundColor Yellow
Write-Host ""
$stores = npx @shopify/cli store list 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host $stores
    Write-Host ""
    Write-Host "✓ Stores retrieved" -ForegroundColor Green
} else {
    Write-Host "⚠ Could not list stores. You may need to create one." -ForegroundColor Yellow
    Write-Host "Go to: https://partners.shopify.com/ to create a development store" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "Step 3: Starting development server..." -ForegroundColor Yellow
Write-Host "You'll be prompted to select a store if you have multiple." -ForegroundColor White
Write-Host ""
$start = Read-Host "Press Enter to start dev server (or type 'skip' to skip)"

if ($start -ne "skip") {
    Write-Host ""
    Write-Host "Starting..." -ForegroundColor Cyan
    npm run dev
} else {
    Write-Host ""
    Write-Host "To start later, run: npm run dev" -ForegroundColor Yellow
    Write-Host ""
}


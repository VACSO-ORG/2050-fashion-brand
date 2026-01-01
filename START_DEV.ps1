# PowerShell Script to Start Development Server
# This script starts the Shopify theme development server

Write-Host "=== Starting by 2050 Development Server ===" -ForegroundColor Cyan
Write-Host ""

# Set store and theme
$store = "by2050-test.myshopify.com"
$theme = "150233972874"
$password = "shoptest"

Write-Host "Store: $store" -ForegroundColor Yellow
Write-Host "Theme ID: $theme" -ForegroundColor Yellow
Write-Host ""

Write-Host "Starting development server..." -ForegroundColor Green
Write-Host "When prompted, enter password: $password" -ForegroundColor Yellow
Write-Host ""

# Start the dev server
# Note: Password will need to be entered interactively
npx @shopify/cli theme dev --store=$store --theme=$theme

Write-Host ""
Write-Host "Development server stopped." -ForegroundColor Yellow


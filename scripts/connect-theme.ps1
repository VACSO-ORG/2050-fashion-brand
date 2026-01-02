# Automated Theme Connection Script
# This script connects your 2050 theme to the Shopify store

$ErrorActionPreference = "Stop"

Write-Host "=== Connecting 2050 Theme to Shopify ===" -ForegroundColor Cyan
Write-Host ""

# Set store and password
$store = "by2050-test.myshopify.com"
$password = "shoptest"

Write-Host "Store: $store" -ForegroundColor Yellow
Write-Host ""

# Try to pipe password using echo
Write-Host "Attempting to connect..." -ForegroundColor Yellow

# Method 1: Try with echo
$password | npx @shopify/cli theme dev --store=$store 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "Trying alternative method..." -ForegroundColor Yellow
    
    # Method 2: Try with environment variable approach
    # Note: Shopify CLI might not support this, but worth trying
    $env:SHOPIFY_STORE_PASSWORD = $password
    npx @shopify/cli theme dev --store=$store
}



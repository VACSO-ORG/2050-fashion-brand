# PowerShell Script to Connect 2050 Theme to Shopify
# Run this script to set up your Shopify connection

Write-Host "=== 2050 Fashion Brand - Shopify Connection ===" -ForegroundColor Cyan
Write-Host ""

# Step 1: Check if logged in
Write-Host "Step 1: Checking Shopify authentication..." -ForegroundColor Yellow
try {
    $result = npx @shopify/cli auth status 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Already authenticated with Shopify" -ForegroundColor Green
        Write-Host ""
    } else {
        Write-Host "⚠ Not authenticated. You'll need to log in." -ForegroundColor Yellow
        Write-Host ""
    }
} catch {
    Write-Host "⚠ Not authenticated. You'll need to log in." -ForegroundColor Yellow
    Write-Host ""
}

# Step 2: Login
Write-Host "Step 2: Logging in to Shopify..." -ForegroundColor Yellow
Write-Host "This will open your browser for authentication." -ForegroundColor White
Write-Host ""
$login = Read-Host "Press Enter to continue with login (or type 'skip' to skip)"

if ($login -ne "skip") {
    npx @shopify/cli login
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Successfully logged in!" -ForegroundColor Green
    } else {
        Write-Host "✗ Login failed. Please try again." -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "Step 3: Starting development server..." -ForegroundColor Yellow
Write-Host "This will connect your theme to your Shopify store." -ForegroundColor White
Write-Host "You'll be prompted to select your store if you have multiple stores." -ForegroundColor White
Write-Host ""
$start = Read-Host "Press Enter to start the dev server (or type 'skip' to skip)"

if ($start -ne "skip") {
    Write-Host ""
    Write-Host "Starting development server..." -ForegroundColor Cyan
    Write-Host "A preview URL will be provided once connected." -ForegroundColor White
    Write-Host ""
    npm run dev
} else {
    Write-Host ""
    Write-Host "=== Connection Setup Complete ===" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "To start development later, run:" -ForegroundColor Yellow
    Write-Host "  npm run dev" -ForegroundColor White
    Write-Host ""
    Write-Host "To deploy your theme:" -ForegroundColor Yellow
    Write-Host "  npm run deploy" -ForegroundColor White
    Write-Host ""
}



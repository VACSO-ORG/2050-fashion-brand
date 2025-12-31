# PowerShell Setup Script for 2050 Fashion Brand Shopify Project
# Run this script to set up your development environment

Write-Host "=== 2050 Fashion Brand - Shopify Setup ===" -ForegroundColor Cyan
Write-Host ""

# Check Node.js
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js not found. Please install Node.js 20.10 or higher." -ForegroundColor Red
    Write-Host "  Download from: https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

# Check npm
Write-Host "Checking npm installation..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "✓ npm found: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ npm not found." -ForegroundColor Red
    exit 1
}

# Install Shopify CLI globally
Write-Host ""
Write-Host "Installing Shopify CLI globally..." -ForegroundColor Yellow
npm install -g @shopify/cli@latest
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Shopify CLI installed successfully" -ForegroundColor Green
} else {
    Write-Host "✗ Failed to install Shopify CLI" -ForegroundColor Red
    exit 1
}

# Verify Shopify CLI
Write-Host "Verifying Shopify CLI installation..." -ForegroundColor Yellow
try {
    $shopifyVersion = shopify version
    Write-Host "✓ Shopify CLI verified: $shopifyVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Shopify CLI verification failed" -ForegroundColor Red
    exit 1
}

# Install project dependencies
Write-Host ""
Write-Host "Installing project dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Project dependencies installed" -ForegroundColor Green
} else {
    Write-Host "✗ Failed to install project dependencies" -ForegroundColor Red
    exit 1
}

# Create .env file if it doesn't exist
Write-Host ""
Write-Host "Setting up environment file..." -ForegroundColor Yellow
if (-not (Test-Path ".env")) {
    if (Test-Path ".env.example") {
        Copy-Item ".env.example" ".env"
        Write-Host "✓ Created .env file from .env.example" -ForegroundColor Green
        Write-Host "  Please edit .env and add your Shopify credentials" -ForegroundColor Yellow
    } else {
        Write-Host "⚠ .env.example not found" -ForegroundColor Yellow
    }
} else {
    Write-Host "✓ .env file already exists" -ForegroundColor Green
}

# Final instructions
Write-Host ""
Write-Host "=== Setup Complete ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Edit .env file and add your Shopify credentials" -ForegroundColor White
Write-Host "2. Run: shopify login" -ForegroundColor White
Write-Host "3. Run: npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "For detailed setup instructions, see SETUP.md" -ForegroundColor Cyan


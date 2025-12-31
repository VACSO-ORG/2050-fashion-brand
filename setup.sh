#!/bin/bash
# Bash Setup Script for 2050 Fashion Brand Shopify Project
# Run this script to set up your development environment

echo "=== 2050 Fashion Brand - Shopify Setup ==="
echo ""

# Check Node.js
echo "Checking Node.js installation..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo "✓ Node.js found: $NODE_VERSION"
else
    echo "✗ Node.js not found. Please install Node.js 20.10 or higher."
    echo "  Download from: https://nodejs.org/"
    exit 1
fi

# Check npm
echo "Checking npm installation..."
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    echo "✓ npm found: $NPM_VERSION"
else
    echo "✗ npm not found."
    exit 1
fi

# Install Shopify CLI globally
echo ""
echo "Installing Shopify CLI globally..."
npm install -g @shopify/cli@latest
if [ $? -eq 0 ]; then
    echo "✓ Shopify CLI installed successfully"
else
    echo "✗ Failed to install Shopify CLI"
    exit 1
fi

# Verify Shopify CLI
echo "Verifying Shopify CLI installation..."
if command -v shopify &> /dev/null; then
    SHOPIFY_VERSION=$(shopify version)
    echo "✓ Shopify CLI verified: $SHOPIFY_VERSION"
else
    echo "✗ Shopify CLI verification failed"
    exit 1
fi

# Install project dependencies
echo ""
echo "Installing project dependencies..."
npm install
if [ $? -eq 0 ]; then
    echo "✓ Project dependencies installed"
else
    echo "✗ Failed to install project dependencies"
    exit 1
fi

# Create .env file if it doesn't exist
echo ""
echo "Setting up environment file..."
if [ ! -f .env ]; then
    if [ -f .env.example ]; then
        cp .env.example .env
        echo "✓ Created .env file from .env.example"
        echo "  Please edit .env and add your Shopify credentials"
    else
        echo "⚠ .env.example not found"
    fi
else
    echo "✓ .env file already exists"
fi

# Final instructions
echo ""
echo "=== Setup Complete ==="
echo ""
echo "Next steps:"
echo "1. Edit .env file and add your Shopify credentials"
echo "2. Run: shopify login"
echo "3. Run: npm run dev"
echo ""
echo "For detailed setup instructions, see SETUP.md"



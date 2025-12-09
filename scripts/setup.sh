#!/bin/bash

# TILV Setup Script
set -e

echo "🚀 TILV Project Setup"
echo "====================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if .env exists
if [ ! -f ".env" ]; then
    echo -e "${YELLOW}⚠️  .env file not found. Creating from .env.example...${NC}"
    cp .env.example .env
    echo -e "${BLUE}📝 Please edit .env with your configuration${NC}"
    echo ""
fi

echo -e "${BLUE}📦 Installing dependencies...${NC}"
echo ""

# Install root dependencies
echo "Installing root dependencies..."
npm install

# Install contracts dependencies
echo "Installing contract dependencies..."
cd contracts && npm install --legacy-peer-deps && cd ..

# Install backend dependencies
echo "Installing backend dependencies..."
cd backend && npm install && cd ..

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd frontend && npm install && cd ..

echo ""
echo -e "${GREEN}✅ Dependencies installed successfully!${NC}"
echo ""

# Create necessary directories
echo -e "${BLUE}📁 Creating directories...${NC}"
mkdir -p backend/uploads backend/logs
mkdir -p ai-engine/temp

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}✅ Setup Complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "${BLUE}📝 Next Steps:${NC}"
echo ""
echo "1. Configure environment variables:"
echo "   - Edit .env file in root directory"
echo "   - Edit contracts/.env for deployment"
echo "   - Edit backend/.env for API configuration"
echo "   - Edit frontend/.env.local for frontend"
echo ""
echo "2. Deploy smart contracts:"
echo "   cd contracts"
echo "   npm run deploy:testnet"
echo ""
echo "3. Start services:"
echo "   Option A - Docker: npm run docker:up"
echo "   Option B - Manual: npm run start:dev"
echo ""
echo "4. Access the application:"
echo "   Frontend:  http://localhost:3000"
echo "   Backend:   http://localhost:3001"
echo "   AI Engine: http://localhost:5000"
echo "   MongoDB UI: http://localhost:8081"
echo "   Redis UI:   http://localhost:8082"
echo ""

# TILV - Tokenized Invoice Liquidity Vault

[![Built on Mantle](https://img.shields.io/badge/Built%20on-Mantle-black)](https://mantle.xyz)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **RealFi platform enabling SMEs to tokenize invoices for instant liquidity while investors earn stable yields backed by real economic activity.**

## 🌟 Overview

TILV transforms traditional invoice financing by leveraging blockchain technology, AI-powered risk assessment, and tokenization. SMEs can upload invoices, get AI validation, and receive liquidity in 24-48 hours. Investors provide liquidity through risk-tiered vaults and earn yields from invoice repayments.

### Key Features

- **🏦 For SMEs**: Convert invoices to instant cash without traditional bank loans
- **📈 For Investors**: Earn 4-25% APY from real-world cashflows
- **🤖 AI-Powered**: Automated OCR, validation, and risk scoring
- **⛓️ On-Chain**: Transparent, immutable record on Mantle Network
- **🔒 Secure**: Multi-tier risk assessment and vault system

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Python 3.9+
- Docker & Docker Compose
- MetaMask with Mantle Testnet
- Tesseract OCR (`brew install tesseract` on macOS)

### Installation

```bash
# 1. Clone repository
git clone <repository-url>
cd TILV---Mantle

# 2. Run setup script
chmod +x scripts/setup.sh
./scripts/setup.sh

# 3. Configure environment
cp .env.example .env
# Edit .env with your configuration

# 4. Deploy contracts
cd contracts
npm run deploy:testnet
cd ..

# 5. Start services
npm run docker:up
```

### Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **AI Engine**: http://localhost:5000
- **MongoDB UI**: http://localhost:8081
- **Redis UI**: http://localhost:8082

## 📁 Project Structure

```
TILV---Mantle/
├── contracts/          # Solidity smart contracts
│   ├── InvoiceNFT.sol
│   ├── VaultManager.sol
│   └── RiskEngine.sol
├── backend/            # Node.js/Express API
├── frontend/           # Next.js application
├── ai-engine/          # Python FastAPI + AI models
├── docker/             # Docker configuration
└── scripts/            # Automation scripts
```

## 🛠️ Technology Stack

- **Blockchain**: Mantle Network, Solidity, Hardhat
- **Backend**: Node.js, Express, TypeScript, MongoDB, Redis
- **Frontend**: Next.js 14, React, Tailwind CSS, Wagmi
- **AI/ML**: Python, FastAPI, Tesseract OCR, PyTorch
- **DevOps**: Docker, Docker Compose

## 📝 Smart Contracts

### InvoiceNFT
ERC-721 token representing tokenized invoices with metadata and lifecycle management.

### VaultManager
Three-tier liquidity vault system:
- **Prime**: Low risk (0-30 score), 80% advance, 4-6% APY
- **Growth**: Mid risk (31-60 score), 75% advance, 8-12% APY
- **Emerging**: High yield (61-100 score), 70% advance, 15-25% APY

### RiskEngine
On-chain risk validation with oracle integration for AI-powered scoring.

## 🔧 Development

```bash
# Run tests
npm run test:all

# Build all components
npm run build:all

# Start development servers
npm run start:dev

# View logs
npm run docker:logs
```

## 🌐 Deployment

### Mantle Testnet

```bash
cd contracts
npm run deploy:testnet
npm run verify:testnet
```

Contract addresses will be saved to `contracts/deployment.json`.

## 📚 Documentation

See walkthrough.md in artifacts for complete implementation details.

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## 📄 License

MIT License

## 🔗 Links

- **Mantle Network**: https://mantle.xyz
- **Testnet Faucet**: https://faucet.testnet.mantle.xyz
- **Explorer**: https://explorer.testnet.mantle.xyz

---

**Note**: This is a hackathon prototype. Conduct thorough audits before mainnet deployment.
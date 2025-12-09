tilv-mantle/
│
├── 📁 contracts/                          # Smart Contracts (Solidity)
│   ├── 📁 interfaces/                     # Contract Interfaces
│   │   ├── IInvoiceOracle.sol
│   │   ├── IRiskScorer.sol
│   │   └── IVaultManager.sol
│   │
│   ├── 📁 libraries/                      # Utility Libraries
│   │   ├── SafeDecimalMath.sol
│   │   └── InvoiceValidator.sol
│   │
│   ├── 📄 InvoiceNFT.sol                  # ERC-721 Invoice Token
│   ├── 📄 VaultManager.sol               # Main Vault Logic
│   ├── 📄 RiskEngine.sol                 # On-chain Risk Scoring
│   ├── 📄 Settlement.sol                 # Automatic Payouts
│   ├── 📄 ComplianceZK.sol               # ZK-KYC Implementation
│   ├── 📄 InvoiceMarketplace.sol         # Secondary Market
│   ├── 📄 TILVGovernance.sol             # DAO Governance
│   │
│   ├── 📁 test/                          # Smart Contract Tests
│   │   ├── InvoiceNFT.test.js
│   │   ├── VaultManager.test.js
│   │   └── RiskEngine.test.js
│   │
│   └── 📁 scripts/                       # Deployment Scripts
│       ├── deploy.js
│       ├── verify.js
│       └── setup-vaults.js
│
├── 📁 backend/                           # Node.js Backend API
│   ├── 📁 src/
│   │   ├── 📁 config/                    # Configuration
│   │   │   ├── index.ts
│   │   │   ├── database.ts
│   │   │   └── constants.ts
│   │   │
│   │   ├── 📁 models/                    # Database Models
│   │   │   ├── Invoice.ts
│   │   │   ├── Vault.ts
│   │   │   ├── User.ts
│   │   │   ├── Investor.ts
│   │   │   └── Transaction.ts
│   │   │
│   │   ├── 📁 services/                  # Business Logic
│   │   │   ├── InvoiceProcessor.ts
│   │   │   ├── Web3Service.ts
│   │   │   ├── AIService.ts
│   │   │   ├── RiskScoringService.ts
│   │   │   ├── VaultService.ts
│   │   │   ├── PaymentService.ts
│   │   │   └── IPFSService.ts
│   │   │
│   │   ├── 📁 controllers/               # API Controllers
│   │   │   ├── invoiceController.ts
│   │   │   ├── vaultController.ts
│   │   │   ├── userController.ts
│   │   │   └── adminController.ts
│   │   │
│   │   ├── 📁 routes/                    # API Routes
│   │   │   ├── invoiceRoutes.ts
│   │   │   ├── vaultRoutes.ts
│   │   │   ├── userRoutes.ts
│   │   │   └── adminRoutes.ts
│   │   │
│   │   ├── 📁 middleware/                # Express Middleware
│   │   │   ├── auth.ts
│   │   │   ├── validation.ts
│   │   │   ├── errorHandler.ts
│   │   │   └── rateLimit.ts
│   │   │
│   │   ├── 📁 utils/                     # Utilities
│   │   │   ├── logger.ts
│   │   │   ├── encryption.ts
│   │   │   ├── validators.ts
│   │   │   └── helpers.ts
│   │   │
│   │   ├── 📁 types/                     # TypeScript Types
│   │   │   ├── invoice.types.ts
│   │   │   ├── vault.types.ts
│   │   │   └── user.types.ts
│   │   │
│   │   ├── 📁 abis/                      # Contract ABIs
│   │   │   ├── InvoiceNFT.json
│   │   │   ├── VaultManager.json
│   │   │   └── RiskEngine.json
│   │   │
│   │   └── 📄 index.ts                   # Main Entry Point
│   │
│   ├── 📄 package.json
│   ├── 📄 tsconfig.json
│   ├── 📄 .env.example
│   └── 📄 Dockerfile
│
├── 📁 frontend/                          # React/Next.js Frontend
│   ├── 📁 public/
│   │   ├── 📁 images/
│   │   └── 📁 fonts/
│   │
│   ├── 📁 src/
│   │   ├── 📁 components/                # React Components
│   │   │   ├── 📁 common/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── WalletConnector.tsx
│   │   │   │   └── Loader.tsx
│   │   │   │
│   │   │   ├── 📁 borrower/
│   │   │   │   ├── InvoiceUpload.tsx
│   │   │   │   ├── Dashboard.tsx
│   │   │   │   └── InvoiceList.tsx
│   │   │   │
│   │   │   ├── 📁 investor/
│   │   │   │   ├── VaultList.tsx
│   │   │   │   ├── Portfolio.tsx
│   │   │   │   └── DepositModal.tsx
│   │   │   │
│   │   │   ├── 📁 marketplace/
│   │   │   │   ├── InvoiceMarket.tsx
│   │   │   │   └── InvoiceCard.tsx
│   │   │   │
│   │   │   └── 📁 admin/
│   │   │       └── AdminPanel.tsx
│   │   │
│   │   ├── 📁 pages/                     # Next.js Pages
│   │   │   ├── index.tsx                 # Homepage
│   │   │   ├── borrower/
│   │   │   │   ├── dashboard.tsx
│   │   │   │   └── upload.tsx
│   │   │   ├── investor/
│   │   │   │   ├── vaults.tsx
│   │   │   │   ├── portfolio.tsx
│   │   │   │   └── marketplace.tsx
│   │   │   ├── admin/
│   │   │   │   └── panel.tsx
│   │   │   └── auth/
│   │   │       ├── login.tsx
│   │   │       └── register.tsx
│   │   │
│   │   ├── 📁 hooks/                     # Custom Hooks
│   │   │   ├── useWeb3.ts
│   │   │   ├── useVault.ts
│   │   │   ├── useInvoice.ts
│   │   │   └── useWallet.ts
│   │   │
│   │   ├── 📁 contexts/                  # React Contexts
│   │   │   ├── Web3Context.tsx
│   │   │   ├── UserContext.tsx
│   │   │   └── NotificationContext.tsx
│   │   │
│   │   ├── 📁 styles/                    # Styling
│   │   │   ├── globals.css
│   │   │   ├── theme.ts
│   │   │   └── components/
│   │   │
│   │   ├── 📁 utils/                     # Frontend Utilities
│   │   │   ├── web3.ts
│   │   │   ├── api.ts
│   │   │   ├── formatters.ts
│   │   │   └── constants.ts
│   │   │
│   │   ├── 📁 types/                     # TypeScript Types
│   │   │   └── index.ts
│   │   │
│   │   ├── 📁 lib/                       # External Libraries Config
│   │   │   ├── wagmi.config.ts
│   │   │   └── ethers.config.ts
│   │   │
│   │   └── 📁 api/                       # API Calls
│   │       ├── invoice.api.ts
│   │       ├── vault.api.ts
│   │       └── user.api.ts
│   │
│   ├── 📄 package.json
│   ├── 📄 next.config.js
│   ├── 📄 tailwind.config.js
│   └── 📄 tsconfig.json
│
├── 📁 ai-engine/                         # AI/ML Services (Python)
│   ├── 📁 invoice-ocr/
│   │   ├── 📄 ocr_processor.py
│   │   ├── 📄 text_extractor.py
│   │   └── 📄 requirements.txt
│   │
│   ├── 📁 risk-scoring/
│   │   ├── 📄 risk_model.py
│   │   ├── 📄 feature_engineering.py
│   │   ├── 📄 model_training.py
│   │   └── 📄 requirements.txt
│   │
│   ├── 📁 validation/
│   │   ├── 📄 invoice_validator.py
│   │   ├── 📄 fraud_detection.py
│   │   └── 📄 requirements.txt
│   │
│   ├── 📄 main.py
│   └── 📄 Dockerfile
│
├── 📁 oracle/                            # Oracle Service
│   ├── 📁 src/
│   │   ├── 📄 oracle.ts
│   │   ├── 📄 priceFeed.ts
│   │   └── 📄 buyerVerification.ts
│   │
│   ├── 📄 package.json
│   └── 📄 Dockerfile
│
├── 📁 compliance/                        # ZK-KYC Service
│   ├── 📁 circuits/                      # ZK Circuits
│   │   ├── 📄 kyc.circom
│   │   └── 📄 age_verifier.circom
│   │
│   ├── 📁 src/
│   │   ├── 📄 zkVerifier.ts
│   │   ├── 📄 identityManager.ts
│   │   └── 📄 proofGenerator.ts
│   │
│   ├── 📄 package.json
│   └── 📄 Dockerfile
│
├── 📁 docker/                           # Docker Configuration
│   ├── 📄 docker-compose.yml
│   ├── 📄 Dockerfile.backend
│   ├── 📄 Dockerfile.frontend
│   └── 📄 Dockerfile.ai
│
├── 📁 scripts/                          # Utility Scripts
│   ├── 📄 setup.sh
│   ├── 📄 deploy.sh
│   ├── 📄 test.sh
│   └── 📄 seed-database.js
│
├── 📁 docs/                             # Documentation
│   ├── 📁 api/
│   │   ├── 📄 api-reference.md
│   │   └── 📄 endpoints.md
│   │
│   ├── 📁 contracts/
│   │   ├── 📄 architecture.md
│   │   └── 📄 audit.md
│   │
│   ├── 📄 architecture.md
│   ├── 📄 setup-guide.md
│   └── 📄 user-guide.md
│
├── 📁 .github/                          # GitHub Actions
│   └── 📁 workflows/
│       ├── 📄 ci.yml
│       ├── 📄 test.yml
│       └── 📄 deploy.yml
│
├── 📄 package.json                      # Root package.json
├── 📄 README.md
├── 📄 .env.example
├── 📄 .gitignore
└── 📄 LICENSE
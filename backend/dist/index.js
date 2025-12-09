"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./config/database");
const index_1 = __importDefault(require("./config/index"));
const logger_1 = __importDefault(require("./utils/logger"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = index_1.default.port;
// Middleware
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)(index_1.default.cors));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Request logging middleware
app.use((req, res, next) => {
    logger_1.default.info(`${req.method} ${req.path}`);
    next();
});
// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        service: 'TILV Backend API'
    });
});
// Root endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'TILV Backend API',
        version: '1.0.0',
        endpoints: {
            health: '/health',
            invoices: '/api/invoices',
            vaults: '/api/vaults',
            users: '/api/users'
        }
    });
});
// Error handling middleware
app.use((err, req, res, next) => {
    logger_1.default.error('Unhandled error:', err);
    res.status(500).json({
        error: 'Internal server error',
        message: index_1.default.nodeEnv === 'development' ? err.message : 'Something went wrong'
    });
});
// Start server
const startServer = async () => {
    try {
        // Connect to MongoDB
        await (0, database_1.connectMongoDB)();
        // Start Express server
        app.listen(PORT, () => {
            logger_1.default.info(`🚀 Server running on port ${PORT}`);
            logger_1.default.info(`📝 Environment: ${index_1.default.nodeEnv}`);
            logger_1.default.info(`🌐 CORS origin: ${index_1.default.cors.origin}`);
            logger_1.default.info(`⛓️  Mantle RPC: ${index_1.default.mantle.rpcUrl}`);
        });
    }
    catch (error) {
        logger_1.default.error('Failed to start server:', error);
        process.exit(1);
    }
};
startServer();
exports.default = app;
//# sourceMappingURL=index.js.map
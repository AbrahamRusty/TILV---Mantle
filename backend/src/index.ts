import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { connectMongoDB } from './config/database';
import config from './config/index';
import logger from './utils/logger';

dotenv.config();

const app: Express = express();
const PORT = config.port;

// Middleware
app.use(helmet());
app.use(cors(config.cors));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req: Request, res: Response, next) => {
    logger.info(`${req.method} ${req.path}`);
    next();
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        service: 'TILV Backend API'
    });
});

// Root endpoint
app.get('/', (req: Request, res: Response) => {
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
app.use((err: Error, req: Request, res: Response, next: any) => {
    logger.error('Unhandled error:', err);
    res.status(500).json({
        error: 'Internal server error',
        message: config.nodeEnv === 'development' ? err.message : 'Something went wrong'
    });
});

// Start server
const startServer = async () => {
    try {
        // Connect to MongoDB
        await connectMongoDB();

        // Start Express server
        app.listen(PORT, () => {
            logger.info(`🚀 Server running on port ${PORT}`);
            logger.info(`📝 Environment: ${config.nodeEnv}`);
            logger.info(`🌐 CORS origin: ${config.cors.origin}`);
            logger.info(`⛓️  Mantle RPC: ${config.mantle.rpcUrl}`);
        });
    } catch (error) {
        logger.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();

export default app;

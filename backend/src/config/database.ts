import mongoose from 'mongoose';
import { createClient } from 'redis';
import config from './index';
import logger from '../utils/logger';

// MongoDB connection
export const connectMongoDB = async (): Promise<void> => {
    try {
        await mongoose.connect(config.database.mongoUri);
        logger.info('✅ MongoDB connected successfully');
    } catch (error) {
        logger.error('❌ MongoDB connection error:', error);
        process.exit(1);
    }
};

// Redis connection
export const connectRedis = async () => {
    try {
        const client = createClient({
            url: config.database.redisUrl
        });

        client.on('error', (err: Error) => logger.error('Redis Client Error', err));
        await client.connect();

        logger.info('✅ Redis connected successfully');
        return client;
    } catch (error) {
        logger.error('❌ Redis connection error:', error);
        process.exit(1);
    }
};

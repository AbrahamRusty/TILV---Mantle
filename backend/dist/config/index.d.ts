declare const _default: {
    port: number;
    nodeEnv: string;
    mantle: {
        rpcUrl: string;
        chainId: number;
        privateKey: string;
        contracts: {
            invoiceNFT: string;
            vaultManager: string;
            riskEngine: string;
            usdt: string;
        };
    };
    database: {
        mongoUri: string;
        redisUrl: string;
    };
    jwt: {
        secret: string;
        expiresIn: string;
    };
    ai: {
        serviceUrl: string;
        timeout: number;
    };
    cors: {
        origin: string;
        credentials: boolean;
    };
    upload: {
        maxFileSize: number;
        allowedExtensions: string[];
        uploadPath: string;
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map
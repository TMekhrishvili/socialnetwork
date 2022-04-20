import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { CORS_ORIGIN, PORT } from './utils/constants';
import helmet from 'helmet';
import { connectToDatabase, disconnectFromDatabase } from './utils/database';
import logger from './utils/logger';
import routes from './routes';

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: CORS_ORIGIN,
    credentials: true
}));
app.use(helmet());

app.use('/api', routes);

const server = app.listen(PORT, async () => {
    await connectToDatabase();
    logger.info(`Server is running on http:localhost:${PORT}`);
});

function shutdown(signal: string) {
    process.on(signal, async () => {
        server.close();
        logger.info('server stopped working');
        await disconnectFromDatabase();
        process.exit(0);
    });
}

const signals = ["SIGTERM", "SIGINT"];
signals.forEach(signal => {
    shutdown(signal);
});


import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import { port, mongouri } from './config';
import apiRoutes from './route';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', apiRoutes);

async function bootstrap() {
    try {
        await connectDB(mongouri);
        app.listen(port, () => console.log(`Server is listening on port: ${port}`));
    } catch (error) {
        console.log(error);
    }
}

bootstrap()

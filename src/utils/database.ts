import mongoose from "mongoose";
import { MONGOURI } from "./constants";
import logger from "./logger";

export async function connectToDatabase() {
    try {
        await mongoose.connect(MONGOURI);
        logger.info("connect to database");
    } catch (error) {
        logger.error(error, "failed to connection to database");
        process.exit(1);
    }
}

export async function disconnectFromDatabase() {
    await mongoose.connection.close();
    logger.info("disconnect from database");
    return;
}

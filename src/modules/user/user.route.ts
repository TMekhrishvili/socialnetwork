import express from "express";
import userController from './user.controller';
import { processRequestBody } from 'zod-express-middleware';
import { registerUserSchema } from "./user.schema";

const router = express.Router();

router.post('/register', processRequestBody(registerUserSchema.body), userController.register.bind(userController));

export default router;

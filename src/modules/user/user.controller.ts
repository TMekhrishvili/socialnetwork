import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import logger from "../../utils/logger";
import { RegisterUserBody } from "./user.schema";
import userService, { UserService } from "./user.service";

class UserController {
    constructor(public userService: UserService) { }
    async register(req: Request<{}, {}, RegisterUserBody>, res: Response) {
        const { username, email, password } = req.body;
        try {
            await this.userService.createUser({ username, email, password });
            res.status(StatusCodes.CREATED).send("user created successfully");
        } catch (error) {
            logger.error(error, "failed user creation");
            if (error.code === 11000) {
                return res.status(StatusCodes.CONFLICT).send("user already exists");
            }
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
        }
    }
}

export default new UserController(userService);

import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import userService, { UserService } from "../user/user.service";
import { LoginUserBody } from "./auth.schema";
import { signJwt } from "./auth.utils";

class AuthController {
    constructor(public userService: UserService) { }

    async login(req: Request<{}, {}, LoginUserBody>, res: Response) {
        const { email, password } = req.body;
        const user = await this.userService.findUserByEmail(email);
        if (!user || !user.comparePassword(password)) {
            return res.status(StatusCodes.UNAUTHORIZED).send("invalid credentials");
        }

        const jwt = signJwt({
            id: user._id,
            username: user.username,
            email: user.email
        });

        res.cookie('accessToken', jwt, {
            maxAge: 60 * 60 * 24,
            httpOnly: true,
            domain: 'localhost',
            path: '/',
            sameSite: 'strict',
            secure: false
        });

        return res.status(StatusCodes.OK).send(jwt);
    }
}

export default new AuthController(userService);

import { RegisterUserInterface } from "./reg-user.interface";
import userService, { UserService } from "../users/user.service";
import { EmailNotUniqueError } from "../../utils/errors/email-not-unique.error";
import { UserInterface } from "../users/user.model";

export class AuthService {
    readonly userService: UserService;
    constructor(userService: UserService) {
        this.userService = userService;
    }
    async register(user: RegisterUserInterface): Promise<boolean> {
        if (await this.userService.userExist(user.email)) {
            throw new EmailNotUniqueError('Email already exist.');
        }
        const data: any = {
            username: user.username,
            email: user.email,
            password: user.password
        }
        const result = await this.userService.create(data);
        if (!result) throw new Error('Bad Request');
        return true;
    }
}

export default new AuthService(userService);

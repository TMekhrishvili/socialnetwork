import { Request, Response } from 'express';
import { Responses } from '../../utils/responses';
import authService, { AuthService } from './auth.service';
import { RegisterUserInterface } from './reg-user.interface';

export class AuthController {
    readonly authService: AuthService;
    constructor(authService: AuthService) {
        this.authService = authService;
    }

    async register(req: Request, res: Response): Promise<any> {
        const user: RegisterUserInterface = req.body;
        const result: boolean = await this.authService.register(user);
        if (!result) {
            Responses.badRequest(res, new Error('Bad request'));
            return;
        }
        Responses.created(res, { result });
    }
}

export default new AuthController(authService);

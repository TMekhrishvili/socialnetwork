import User, { UserInterface } from './user.model';

export class UserService {
    async create(user: UserInterface): Promise<UserInterface> {
        const result = await User.create(user);
        return result;
    }
    
    async userExist(email: string): Promise<boolean> {
        const result = await User.exists({
            email: {
                $regex: '^' + email.toLowerCase(),
                $options: 'i',
            },
        });
        if (result) return true;
        return false;
    }
}

export default new UserService();

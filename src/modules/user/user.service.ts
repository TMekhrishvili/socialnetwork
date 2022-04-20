import { User, UserModel } from './user.model';
export class UserService {
    async createUser(user: Omit<User, 'comparePassword'>) {
        return await UserModel.create(user);
    }
}

export default new UserService();

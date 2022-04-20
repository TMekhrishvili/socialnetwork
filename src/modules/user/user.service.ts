import { User, UserModel } from './user.model';
export class UserService {
    async createUser(user: Omit<User, 'comparePassword'>) {
        return await UserModel.create(user);
    }

    async findUserById(id: string) {
        return await UserModel.findById(id);
    }

    async findUserByEmail(email: User['email']) {
        return await UserModel.findOne({ email });
    }
}

export default new UserService();

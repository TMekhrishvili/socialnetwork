import { getModelForClass, prop, pre } from '@typegoose/typegoose';
import bcrypt from 'bcrypt';

@pre<User>('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        this.password = await bcrypt.hash(this.password, 10);
        return next();
    }
})

export class User {
    @prop({ required: true, unique: true })
    public username: string;

    @prop({ required: true, unique: true })
    public email: string;

    @prop({ required: true })
    public password: string;

    public async comparePassword(password: string): Promise<boolean> {
        return await bcrypt.compare(password, this.password);
    }
}

export const UserModel = getModelForClass(User, {
    schemaOptions: {
        timestamps: true
    }
});

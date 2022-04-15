import { Schema, model, Document, Model } from 'mongoose';
import bcrypt from 'bcrypt';

export interface UserInterface extends Document {
    username?: string;
    email: string;
    password: string;
    createdAt?: Date | null;
}

export const UserSchema: Schema<UserInterface> = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: false,
        default: Date.now
    }
});

UserSchema.pre<UserInterface>('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const userModel: Model<UserInterface> = model<UserInterface>(
    'User',
    UserSchema
);

export default userModel;

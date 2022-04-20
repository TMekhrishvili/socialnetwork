import jwt from 'jsonwebtoken';
import { EXPIRES_IN, JWT_SECRET } from '../../utils/constants';

export function signJwt(payload: string | Buffer | object) {
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: EXPIRES_IN
    });
}

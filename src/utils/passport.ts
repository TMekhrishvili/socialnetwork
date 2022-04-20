import { Request } from 'express';
import { Strategy } from 'passport-jwt';
import { JWT_SECRET } from './constants';
import userService from '../modules/user/user.service';

const cookieExtractor = (req: Request) => {
    let token = null;
    if (req?.cookies) token = req.cookies['accessToken'];
    return token;
}

const options = {
    jwtFromRequest: cookieExtractor,
    secretOrKey: JWT_SECRET
}

const verify = async (payload: string | Buffer | object, done) => {
    try {
        const user = await userService.findUserById(payload.id);
        if (user) return done(null, user);
        else return done(null, false);
    } catch (error) {
        return done(error, false);
    }
}

export default new Strategy(options, verify);

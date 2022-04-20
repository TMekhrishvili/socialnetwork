import express from 'express';
import userRoutes from './modules/user/user.route';
import authRoutes from './modules/auth/auth.route';
import passport from 'passport';

const router = express.Router();

router.use('/user', userRoutes);
router.use('/auth', authRoutes);
router.get('/home', passport.authenticate('jwt', { session: false }), (req, res) => res.send('iuhuu'));

export default router;

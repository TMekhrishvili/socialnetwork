const { body, validationResult } = require('express-validator');
const { getUserByEmail } = require('../users/users.service');

const registerSchema = [
    body('username')
        .isLength({ min: 3 })
        .withMessage('min length for username is 3'),

    body('email')
        .exists()
        .isEmail()
        .withMessage('provide valid email address')
        .custom(async (value) => {
            const user = await getUserByEmail(value);
            if (user) {
                return Promise.reject('E-mail already in use');
            }
        }),

    body('password')
        .isLength({ min: 5 })
        .withMessage('min length for password is 5'),

    body('confirmPassword')
        .custom(async (value, { req }) => {
            const password = req.body.password;
            if (password !== value) {
                return Promise.reject("Password doesn't match");
            }
        })
]

const validation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error(errors.array({ onlyFirstError: true })[0].msg);
        error.code = 403;
        throw error;
    }
    next();
}

function validateInput(param) {
    if (param === 'login') return [...loginSchema, validation];
    else if (param === 'register') return [...registerSchema, validation];
}

module.exports = validateInput

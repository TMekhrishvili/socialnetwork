const { generateHash } = require('../../utils');
const { createUser } = require('../users/users.service');

const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const hash = await generateHash(password);
    const response = await createUser({ username, email, hash });
    res.json(response);
}

module.exports = {
    signup
}

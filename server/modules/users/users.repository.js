const User = require('./user.model');

const createUser = async (user) => {
    const { _id, username, email } = await User.create(user);
    return { _id, username, email };
}

const getUserByID = async (id) => {
    const response = await User.findById(id);
    return response;
}

const getUserByEmail = async (email) => {
    const response = await User.findOne({ email });
    return response;
}

module.exports = {
    createUser,
    getUserByID,
    getUserByEmail
}

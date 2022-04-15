const usersRepository = require('./users.repository');

const createUser = async (user) => {
    return await usersRepository.createUser(user);
}

const getUserByID = async (id) => {
    return await usersRepository.getUserByID(id);
}

const getUserByEmail = async (email) => {
    return await usersRepository.getUserByEmail(email);
}

module.exports = {
    createUser,
    getUserByID,
    getUserByEmail
}

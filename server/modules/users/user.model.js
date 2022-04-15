const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username is required']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: [true, 'Email is already used']
    },
    hash: String,
})

module.exports = mongoose.model('Users', UserSchema);

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    lastname: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    birth: {
        type: String
    },
    sex: {
        type: String
    },
}, {
    timestamps: true
})
module.exports = mongoose.model('UserPost', UserSchema)
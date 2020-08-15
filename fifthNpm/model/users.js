const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: string,
        required: true,
        minlength: 3,
        maxlength: 12,
        unique: true 
    },
    email: {
        type: string,
        required: true,
        minlength: 5,
    },
    password: {
        type: string,
        required: true,
        minlength: 7,

    }
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15,
        unique: true 
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },    
    email: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 200,
        unique: true
    },
    passwordValidated: {
        type: Boolean,
        default: false
    }
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel
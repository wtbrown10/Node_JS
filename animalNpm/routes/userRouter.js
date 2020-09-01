const express = require('express')
const userRouter = express.Router()

userRouter.get('/', (req, res) => {
    res.send('User page')
    console.log('user page')
})

module.exports = userRouter
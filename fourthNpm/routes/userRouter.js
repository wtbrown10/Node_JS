const express = require('express');

const userRouter = express.Router();

userRouter.get('/userrouter', function (req, res) {
    res.send("This is for the users!")
})

module.exports = userRouter;
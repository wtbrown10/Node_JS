const express = require('express');
const router = require('./homeRouter');

const userRouter = express.Router();

userRouter.get('/', function (req, res) {
    res.send("This is for the users!")
})

userRouter.post('/post/new', async (req, res) => {
    try {
        const body = req.body;

        console.log(body);

        res.json({ message: 'success!' })

    } catch (error) {

        res.status(500).json({ message: error.message })
    }
})

userRouter.patch('login') // Homework

module.exports = userRouter;
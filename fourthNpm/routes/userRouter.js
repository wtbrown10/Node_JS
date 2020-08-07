const express = require('express');
const router = require('./homeRouter');

const userRouter = express.Router();

userRouter.get('/', function (req, res) {
    res.send("This is for the users!")
})

// userRouter.get('/login', function (req, res) {

//     const filePath = process.cwd() + '\\public\\login.html'

//     console.log(filePath)

//     res.sendFile(filePath)

// })

// userRouter.post('/post/new', async (req, res) => {
//     try {
//         const body = req.body;

//         console.log(body);

//         res.json({ message: 'success!' })

//     } catch (error) {

//         console.error(error.message)

//         res.status(500).json({ message: error.message })
//     }
// })

userRouter.patch('/login', function (req, res) {
    try {
        const body = req.body;

        console.log(body, 'Login Test');

        res.json({ message: 'success!' })

    } catch (error) {

        res.status(500).json({ message: error.message })
    }
}) // Homework

module.exports = userRouter;
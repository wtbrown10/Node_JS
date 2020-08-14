const express = require('express');
const router = require('./homeRouter');

const User = require('../models/User')

const userRouter = express.Router();

userRouter.get('/', function (req, res) {
    res.send("This is for the users!")
})

// userRouter.get('/login', function (req, res) {

//     const filePath = process.cwd() + '\\public\\login.html'

//     console.log(filePath)

//     res.sendFile(filePath)

// })

userRouter.post('/post/register', async (req, res) => {
    try {
        const body = req.body;

        console.log(body);

        /* backend validation
            [] ensure email/username are not duplicates
            [] check password length
            [] validate email and username for constraints (before mongoose does for us)
        */

        // old way (deprecated)
        // const newUserDoc = new User(req.body)  //creates an instance of the user model which an instance of this model is a new document

        // await newUserDoc.save()

        // new way
       // await User.create(req.body) .... when using await must alway include async in function. the await ensures that the document createation is completed before the response is given


        res.json({ message: 'success!' })

    } catch (error) {

        console.error(error.message)

        res.status(500).json({ message: error.message })
    }
})

userRouter.patch('/login', function (req, res) {
    try {
        const body = req.body;

        console.log(body, 'Login Test');

        res.json({ message: 'success!' })

    } catch (error) {

        res.status(500).json({ message: error.message })
    }
}) 



module.exports = userRouter;
const express = require('express');
const router = require('./homeRouter');

const User = require('../models/User');
// const { db } = require('../models/User');

const userRouter = express.Router();

const findUser = require('../middleware/finduser')
const validateReg = require('../middleware/validateRegister');
const passEncrypt = require('../middleware/passEncrypt');

userRouter.get('/', function (req, res) {
    res.send("This is for the users!")
})

// userRouter.get('/login', function (req, res) {

//     const filePath = process.cwd() + '\\public\\login.html'

//     console.log(filePath)

//     res.sendFile(filePath)

// })

userRouter.post('/post/register',
validateReg,
passEncrypt,
 async (req, res) => {
    try {
        const body = req.body;

        console.log(body);

        console.log('User Registered')

        /*const { email, username, password } = req.body 

         also the same as 

        const email = req.body.email
        const username = req.body.username
        const password = req.body.password
        */
           
       //if this array has then 0 elm res with 400 and res with the array of errors

       // if password length is off
            // return res msg

        // old way (deprecated)
        // const newUserDoc = new User(req.body)  //creates an instance of the user model which an instance of this model is a new document

        // await newUserDoc.save()

        // new way
        // req.newUser is defined in the validateReq middleware and passed to this function
        await User.create(req.newUser)  // when using await must alway include async in function. the await ensures that the document createation is completed before the response is given


        res.status(200).json({ message: 'User Registered!' })

    } catch (error) {

        res.status(500).json({ message: error.message })
    }
})

userRouter.patch('/login', async function (req, res) {
    try {
        const body = req.body;

        const query = {email: req.params.email}

        const projection = {email: 1, password: 1}

        console.log(body, 'Login Test');

        await User.findOne(query, projection)

        res.json({ message: 'success!' })

    } catch (error) {

        res.status(500).json({ message: error.message })
    }
})

userRouter.get('/all', async (req, res) => {
    // db.collection('users').find()
    
    try {
        const allUsers = await User.find({})
    
        console.log(allUsers);
    
        res.json(allUsers) // will turn raw data into json format and sends it 
        
    } catch (error) {

        console.error(error.message || error)
        res.status(500).json({
            message : error.message ||error
        })
    }
})

userRouter.get('/username/:un', async (req, res) => {

    try {
        // const foundUser = await User.findOne({username: req.params.un})

        const query = {username: req.params.un}

        const projection = {email: 1, username: 1, _id: 0}

        const foundUser = await User.findOne(query, projection)

        res.json(foundUser)
        
    } catch (error) {
        console.error(error.message || error)
        res.status(500).json({
            message : error.message ||error
        })
    }
})

//put /updateinfo/:id *uses req.body to pass modifityin values of user
// what do we want to update, how is that info being passed to the REST api

//delete /delete/:id (mongodb ducoument id)
userRouter.delete('/delete/:id',
    findUser, 
    async (req, res) => {

    try {

        await User.findByIdAndDelete(req.userId)
        console.log('deleted user')
        res.send('Deleted User!')
        
    } catch (error) {
        console.error(error.message || error)
        res.status(500).json({
            message : error.message ||error
        })
    }
})

userRouter.put('/update/:id', 
findUser,
async (req, res) => {

    try {
    
         const update = await User.findByIdAndUpdate(
            req.params.id, 
            req.body,
            {new: true}
            );

                res.json({report: update})
                console.log("Updated!")
        
    } catch (error) {
        console.error(error.message || error)
        res.status(500).json({
            message : error.message ||error
        })
    }
})


//make viewable to other files

module.exports = userRouter;
// Packages
const express = require('express')
const mongoose = require('mongoose')
// Main application Var
const app = express()

//middleware
const middle = require('./middleware/middleware')

//routers
const homeRouter = require('./routes/homeRouter')
const userRouter = require('./routes/userRouter')

//Middleware and Routes in use
app.use(express.static('public')) // removes 404 error
app.use(middle);
app.use('/', homeRouter)
app.use('/user', userRouter)


// Start server listening
app.listen(3000, function () {
    console.log('Listening for port 3000')
})


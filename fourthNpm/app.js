// Packages
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

console.log(process.env.TEST);


// Main application Var
const app = express()

//middleware
const middle = require('./middleware/middleware')

//routers
const homeRouter = require('./routes/homeRouter')
const userRouter = require('./routes/userRouter')
const { request } = require('express')

// constants
const port = process.env.PORT || 3000;

//Middleware and Routes in use
app.use(express.static('public')) // allows you to view js and css files in public folder
app.use(express.json())
app.use(middle);
app.use('/', homeRouter)
app.use('/user', userRouter)



// Start server listening
// test
app.listen(port, function () {
    console.log('Listening on port ' + port)
})


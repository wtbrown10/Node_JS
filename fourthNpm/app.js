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


// constants
const port = process.env.PORT || 3000;
const URI = process.env.MONGO_URI

//Middleware and Routes in use
app.use(express.static('public')) // allows you to view js and css files in public folder
app.use(express.json())
app.use(middle);
app.use('/', homeRouter)
app.use('/user', userRouter)

if (typeof URI === 'string') {

    const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true }

    // Connection to database
    mongoose.connect(URI, mongoOptions, (err) => {

        if (err) {
            console.error(`\nError Connecting To MongoDB: ${err.message || err}\n`)
        } else {
            console.log('Server connected DB');
        }
    })


} else {
    console.error("Mongo URI missing or invalid, check node environment variables")
}

// Start server listening
app.listen(port, function () {
    console.log('Listening on port ' + port)
})


// Packages
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

// Main application Var
const app = express()

//middleware
const middle = require('./middleware/middleware')

//routers
const homeRouter = require('./routes/homeRouter')
const userRouter = require('./routes/userRouter')


// constants
const port = process.env.PORT || 3000;
const URI = process.env.MONGO

//Middleware and Routes in use
app.use(express.static('public')) // allows you to view js and css files in public folder
app.use(express.json()) //Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(middle);
app.use('/', homeRouter)
app.use('/user', userRouter)

if (typeof URI === 'string') {

    const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }

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
// test test
app.listen(port, function () {
    console.log('Listening on port ' + port)
})


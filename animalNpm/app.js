// packages
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const morgan = require('morgan')


// Main Application Variable
const app = express()

//Middleware

// Routers
const homeRouter = require('./routes/homeRouter')
const userRouter = require('./routes/userRouter')

// dotenv const
const port = process.env.PORT
const URI = process.env.MONGO || 3000

// Routes & Middle in use
app.use(express.static('./public'))
app.use(express.json())
app.use(morgan('dev'))

// Using router
app.use('/', homeRouter)
app.use('/user', userRouter)

if (typeof URI === 'string') {

    const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }

mongoose.connect(URI, mongoOptions, (err) => {
    if (err) {
        console.error(`\nError Connecting To MongoDB: ${err.message || err}\n`)
    } else {
        console.log('Server connected to DB');
    }
})
} else {
    console.error("Mongo URI missing or invalid, check node environment variables")
}
//server listening
app.listen(port, function() {
    console.log('Listening to Port: ' + port)
})
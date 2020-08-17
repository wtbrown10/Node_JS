// Packages
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

// Main Application Variable
const app = express()

// Middleware
const middleware = require('./middleware/middleware')

// Routers
const homeRouter = require('./routes/homeRouter')

// .Env Const
const port = process.env.PORT || 3000
const URI = process.env.MONGO

// Routes & Middleware In Use
app.use(express.static('public'))
app.use(express.json())
app.use(middleware)
app.use('/', homeRouter)

// Connection To Database
if(typeof URI === 'string') {
    const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }

    mongoose.connect(URI, mongooseOptions, function (err) {
        if(err) {
            console.error(`\nError connecting to MongoDB: ${err.message || err}\n`)
        } else {
            console.log("Connected to DataBase!");
        }
    })

} else {
    console.error("Mongo URI missing or invalid, check node environment variables")
}

// Server Listening
app.listen(port, function() {
    console.log(`Listening to port: ${port}`)
})
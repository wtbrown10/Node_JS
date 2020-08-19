// Packages
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

// Main Application Variables
const app = express()

// Middleware
const middle = require('./middleware/middleware')

// Routers
const homeRouter = require('./routes/homeRouter')

// .Env Const
const port = process.env.PORT || 3000
const URI = process.env.URI

// Routes & Middleware in use
app.use(express.static('public'))
app.use(express.json())
app.use(middle)
app.use('/', homeRouter)

// Connecting To Database
const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
mongoose.connect(URI, mongooseOptions, (err) => {
    if(err) {
        console.error(err.message || err)
        
    } else {
        console.log('Connected to Database')
        
    }
} )

// Server Listening
app.listen(port, () => {
    console.log(`Listening to port: ${port}`)
})

//packages
const express = require('express');
const mongoose = require('mongoose')

// middleware
const firstMid = require('./middleware/firstMiddleware')

// Routers
const homeRouter = require('./routes/homeRouter')

//Main application var
const app = express();
// Middlewares/Routers in use
app.use(firstMid)
app.use('/', homeRouter)

// start server listening
app.listen(3000, function () {
    console.log("Listening to port 3000")
});

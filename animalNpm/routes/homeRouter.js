const express = require('express')
const homeRouter = express.Router()

homeRouter.get('/', (req, res) => {
    res.send('HOME PAGE')
    console.log('HOME PAGE')
})




module.exports = homeRouter
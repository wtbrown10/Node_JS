const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {

    const filePath = process.cwd() + '\\public\\home.html' // 1 way to locate directory and file

    console.log(filePath);

    res.sendFile(filePath)


})

router.get(
    '/login',
    (req, res) => {

        const filePath = process.cwd() + '\\public\\login.html'

        res.sendFile(filePath)
    })

router.get('/environment', (req, res) => {

    if (process.env.PASSWORD === 'password123') {
        res.send('The Password: ' + process.env.PASSWORD + ' is too simple change your password!')
    } else {
        res.send(process.env.DEFAULT)
    }
})

module.exports = router
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

module.exports = router
const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {

    const filePath = process.cwd() + '\\public\\home.html' // 1 way to locate directory and file

    // console.log(filePath);

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

router.get('/update', 
    (req, res) => {
        try {
            // res.sendFile(process.cwd() + '/public/update.html')
            const filePath = process.cwd() + '\\public\\update.html'

            console.log(filePath)

            res.sendFile(filePath)

        } catch (error) {
            console.error(error.message || error)
            res.status(500).json({
                message : error.message ||error
        })
    }
    
})

module.exports = router
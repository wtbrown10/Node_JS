const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
    res.send('You are on the homepage')
})

module.exports = router
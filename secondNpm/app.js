const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', function (req, res) {
    res.send('this is the homepage')
})
app.get('/contact', function (req, res) {
    res.send('this is the contact page')
})

app.listen(3000);
const { Module } = require("module")

const middle = function(req, res, next) {
    console.log('The middleware!')
    next()
}

module.exports = middle
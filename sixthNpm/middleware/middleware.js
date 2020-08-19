const middle = function(req, res, next) {
    console.log('this is the middle')
    next()
}

module.exports = middle
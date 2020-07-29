const middle = function (req, res, next) {
    console.log("We in the middleware");
    next()
}

module.exports = middle
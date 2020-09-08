const jwt = require('jsonwebtoken')

const jwtSecret = process.env.JWT_SECRET

module.exports = (req, res, next) => {
    try {
        req.createdJWT = jwt.sign({id: req.userId}, jwtSecret, {expiresIn: '3h'})

        next()
        
    } catch (error) {
        console.error(error.message || error)

        res.status(500).json({
            message: error.message,
            error: error
        })
    }
}
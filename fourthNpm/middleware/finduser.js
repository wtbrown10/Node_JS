const User = require('../models/User')

const findUser = async (req, res, next) => {
    const userId = req.params.id

    try {
        
        if(typeof userId != 'string' || userId.length !== 24) {
            console.log('Invalid Id was given')
           return res.status(400).json({
                message: 'Invalid Id Given!'
            })
        }

        const user = await User.findById(userId)

        if (user === null) {
            console.log("No user was found");
           return res.status(404).json({
                message: 'No User Found'
            })
            
        }

        req.userId = userId

        next()

    } catch (error) {
        console.error(error.message || error)
        res.status(500).json({
            message : error.message ||error
        })
    }
}

module.exports = findUser
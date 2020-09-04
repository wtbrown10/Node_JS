const bcrypt = require('bcrypt')

module.exports = async (req, res, next) => {

    try {
        const salt = await bcrypt.genSalt(10)
        console.log("Salt: ", salt)
        
        const oldPass = req.newUser.password
        const encryptedPass = await bcrypt.hash(oldPass, 10)

        console.log('E-Pass: ', encryptedPass);

        req.newUser.password = encryptedPass

        

        console.log(req.newUser);
        next()


    } catch (error) {
        console.error(error.message || error)
        res.status(500).json({
            message: error.message,
            error: error
        })
    }

}
const validate = require('validator').default;

const bcrypt = require('bcrypt');

const User = require('../models/User')

module.exports = async (req, res, next) => {
        try {

            const { password: p, credential: c} = req.body

            p = p.trim()
            c = c.trim()

            // first is the user logging in with their email or their username
            const field = validate.isEmail(c) ? 'email' : 'username';

            const query = {}

            const projection =  {password: 1}

            query[field] = c

            const foundUser = await User.findOne(query, projection); // return obj with two props. password & _id

            if(foundUser == null) {
                return res.status(400).json({message: 'Credentials Do Not Match'})
            }


            // if email? check that the email is in use
            //if username? check that the username is in use

            const passwordMatches = bcrypt.compare(p, foundUser.password) // will return a boolen (true if the password matches)

            if(!passwordMatches) {
                return res.status(400).json({message: 'Credentials Do Not Match'})
            } // ath this point we have confirmed the user's credentials match and they can be logged in

            req.userId = foundUser._id
            
            next()

            //if they do exist, check the password

            //if pass mastches, then go to the next middleware, otherwise send a general message 'failed login'
            
        } catch (error) {
            console.error(error.message || error)

            res.json({
                message: error.message,
                error: error
            })
        }
}
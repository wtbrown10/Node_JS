const User = require('../models/User')

const validator = require('validator').default

module.exports = async (req, res, next) => {
    try {

        const { email: e, username: u, password: p} = req.body
        const validationErrors = []

        if (e === undefined || e.trim().length === 0) {
            validationErrors.push({key: 'email', error: 'Email Required'})
                } else if (e != undefined && !validator.isEmail(e)) {
                        validationErrors.push({key: 'email', error: " Must Be Valid Email Address"})
                } else {
                    const emailExist = await User.findOne({email: e}) !== null
                    if (emailExist) validationErrors.push({key: 'email', error: 'Email In Use'})
                } 

        if (u === undefined || u.trim().length === 0) {
            validationErrors.push({key: 'username', error: ' Username Required'})
                } else {
                    const userNameExist = await User.findOne({username: u}) !== null
                    if (userNameExist) validationErrors.push({key: 'username', error: ' Username In Use'})
                }

        if (p === undefined || p.trim().length === 0) {
            validationErrors.push({key: 'Password', error: ' Password Required'})
            } else if (p != undefined && p.length < 7) {
                validationErrors.push({key: 'password', error: ' Password Did Not Meet Requirements'})
                }

        if (validationErrors.length > 0) {
               return res.status(400).json(
                    validationErrors
               )    
           }

           // 1) sanitize individual fields
           const 
           username = u.trim(),
           email = e.trim(),
           password = p.trim()
        
           // create a new object, only include the fields we need (user, email, password)

           const sanitizedData = {
               username: username,
               email: email,
               password: password
           }

           req.newUser = sanitizedData

           // 2) remove unneeded/security risking fields
        //    delete req.body.password2 // defined on our frontend form

        //    delete req.body.emailValidated // could possibly be sent with postman 



           next()

    } catch (error) {

        res.status(500).json({message: error.message || 'Unknown Error',
                                error: error    
    })
        
    }
}
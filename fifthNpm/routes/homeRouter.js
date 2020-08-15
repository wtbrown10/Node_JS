// Packages
const express = require('express')

// Main App Varibles
const router = express.Router()

// Http Method
router.get('/', (req, res) => {
    try {
         const filePath = process.cwd() + "\\public\\home.html"
        // res.send("HomePage")
         res.sendFile(filePath)
    } 
    catch (error) { 
        console.error(error.message)
        res.status(500).json({message: error.message})
    }

})

module.exports = router
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    try {

        const filePath = process.cwd() + '\\public\\home.html'
        res.sendfile(filePath)

        // res.send('home page')
        
    } catch (error) {
        console.error(error.message || error)

        res.status(500).json({message: error.message || error})
        
    }
})

module.exports = router
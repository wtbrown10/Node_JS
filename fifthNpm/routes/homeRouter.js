// Packages
const express = require('express')

// Main App Varibles
const router = express.Router()

// Routes
const User = require('../model/users')

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

router.get('/collection', async (req, res) => {
    const docs = await User.find()
    const docsParsed = JSON.stringify(docs)
    console.log(docs)

    const arr = []

    for (let i = 0; i < docs.length; i++){
        arr.push(docs[i])
    }
    res.send(arr)
    
    // User.find(), function(err, doc) {
    //     if(err) {
    //         console.log(err)
    //     } else {
    //         console.log('Result:', doc)
    //     }}
})

router.post('/post', async (req, res) => {
    try { 
        const body = req.body;
        const username = body.username

        console.log(body);

            await User.create(req.body)

            res.json({ message: 'success!' })
        
    } catch (error) {
        console.error(error.message)

         res.status(500).json({message: error.message})
    }
})

module.exports = router
const express = require("express")
const mongoose = require("mongoose")

const app = express();

const port = 3000

// route handler
app.get(
    "/",
    (req, res) => {
        res.json({
            message: "this is in an object!"
        })

    }
)

app.listen(port, () => {
    console.log(`Server is now listening on port ${port}`)
})
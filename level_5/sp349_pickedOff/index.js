const express = require("express")
const app = express()

const Middleware = require("./middleware.js")


// Middleware
app.use(Middleware)


// Routes
app.get("/", (req, res) => {
    const responseObj = {
        message: "Hello",
        customMessage: req.customProperty
    }
    res.json(responseObj)
})

// Run Server 
app.listen(9000, () => {
    console.log("This server is running on port 9000")
})
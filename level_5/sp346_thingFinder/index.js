const express = require("express")
const app = express()

// Middleware
app.use(express.json())

// Routes
app.use("/things", require("./routes/thingRouter.js"))

// Run server 
app.listen(9000, () => {
    console.log("This server is running on port 9000")
})
const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const cors = require('cors')

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Middleware to allow cross-origin requests
app.use(cors())

// DB connect
mongoose.connect("mongodb+srv://s1sds28:FHcQQhMkoKBKdT9j@cluster0.rblfy6t.mongodb.net/",
    () => console.log("Connected to DB"))

// Routes
app.use("/bills", require("./routes/billRouter.js"))
app.use("/billProvider", require("./routes/billProviderRouter.js"))

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Server listen
app.listen(9000, () => {
    console.log("Server is running on port 9000")
})
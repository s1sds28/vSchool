const express = require("express")
const app = express()
const morgan =  require("morgan")
const mongoose = require('mongoose')

mongoose.set('strictQuery', true);




// Middleware for every request
app.use(express.json()) // Looks for a request body and turns it into 'req.body'
app.use(morgan("dev"))

// mongoosejs.com/docs/depreceations.html
// Connent to DB // 

mongoose.connect('mongodb+srv://s1sds28:vSchoolDB@cluster0.htqkfgj.mongodb.net/',


(err) => console.log("Connected to the db", err)
)



// Routes
app.use("/movie", require("./routes/movieRouter.js"))


// Error handler
app.use((err, req, res, next)=> {
    console.log(err)
    return res.send({errMsg: err.message})

})

// Server listen 
app.listen(9000, () => {
    console.log("This server is running on port 9000")
})
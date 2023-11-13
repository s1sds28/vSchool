const express = require("express")
const app = express()
const morgan =  require("morgan")
const mongoose = require('mongoose')




// Middleware for every request
app.use(express.json()) // Looks for a request body and turns it into 'req.body'
app.use(morgan("dev"))

// mongoosejs.com/docs/depreceations.html
// Connent to DB // 

mongoose.connect('mongodb://localhost:27017/moviesdb',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndMondifty: true
},
() => console.log("Connected to the db")
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
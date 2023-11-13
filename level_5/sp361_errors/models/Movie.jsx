const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Movie Blueprint key: datatype

const movieSchema = new Scheam({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true,
    },
    releaseYear: Number

})

// generate model name and schema

module.exports = mongoose.model("Movie", movieSchema)
// Error handling 

Start in server.js

// Error handler
expects 4 parameters
This is a global error handler and should be above the server listen



// Update the routes

example: 
movieRouter.route("/:id")
    .get((req, res, next) => {
        const movieId = req.params.id;
        const foundMovie = movies.find(movie => movie._id === movieId);
        if(!foundMovie){
            const error = new Error("The item was not found")
            // res.send(error) this is not DRY
            return next(error)
        }
        res.send(foundMovie)
    })
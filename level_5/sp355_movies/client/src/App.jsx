import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Movie from './components/Movie.jsx'
import AddMovieForm from './components/AddMovieForm.jsx';

import './styles.css'

export default function App(){

    const [movies, setMovies] = useState([])

    function getMovies(){
        axios.get("/movie")
        .then(res => setMovies(res.data))
        .catch(err => console.log(err))
    }

    function addMovie(newMovie){
        axios.post("/movie", newMovie)
        .then(res => setMovies((prev) => [...prev, res.data]))
        .catch(err => console.log(err))
    }

    function deleteMovie(movieId){
        axios.delete(`/movie/${movieId}`)
            .then(res => {
                setMovies(prev => prev.filter(movie => movie._id !== movieId) )
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <>
            <AddMovieForm 
                addMovie={ addMovie }

            />
            <div className='movie-container'>
                { movies.map(movie => <Movie
                    {...movie}
                    key={movie.title}
                    deleteMovie={deleteMovie}
                    />
                )}
            </div>
        </>
    )
}
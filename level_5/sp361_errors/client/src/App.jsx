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
        .catch(err => console.log(err.response.data.errMsg))
    }

    function addMovie(newMovie){
        axios.post("/movie", newMovie)
        .then(res => setMovies((prev) => [...prev, res.data]))
        .catch(err => console.log(err))
    }

    function deleteMovie(movieId){
        axios.delete(`/movie/${movieId}`)
            .then(res => {
                setMovies(prev => prev.filter(movie => movie._id !== movieId))
            })
            .catch(err => console.log(err))
    }

    function editMovie(updates, movieId) {
        axios.put(`/movie/${movieId}`, updates)
            .then(res => {
                setMovies(prevMovies => prevMovies.map(movie => movie._id !== movieId ? movie : res.data));
            })
            .catch(err => console.log(err));
    }

    function handleFilter(e) {
        if(e.target.value === "reset"){
            getMovies()

        } else {
            axios.get(`/movie/search/genre?genre=${e.target.value}`)
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))
        }}
    
    useEffect(() => {
        getMovies()
    }, [])

    return (
        <>
            <AddMovieForm 
                submit={ addMovie }
                btnText="Add Movie"

            />
            <>
            <h4>Filter by Genre</h4>
            <select onChange={ handleFilter } className="filter-form">
                <option value="reset">All Movies</option>
                <option value="action">Action</option>
                <option value="fantasy">Fantasy</option>
                <option value="horror">Horror</option>
            </select>
            </>
            <div className='movie-container'>
                { movies.map(movie => <Movie
                    {...movie}
                    key={movie.title}
                    deleteMovie={deleteMovie}
                    editMovie={editMovie}
                    />
                )}
            </div>
        </>
    )
}
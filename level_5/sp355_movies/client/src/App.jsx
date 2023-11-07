import React, { useState, useEffect } from 'react'

import axios from 'axios'

export default function App(){

    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get("/movie")
        .then(res => console.log(res))
    })
    return (
        <div>
            OKAY
        </div>
    )
}
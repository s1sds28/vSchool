import React from 'react';

import AddMovieForm from './AddMovieForm';

export default function Movie(props){
    const { title, genre, _id } = props
    // console.log(props)
    return(
        <div className='movie'>
            <h1>Title: { title }</h1>
            <p>Genre: { genre }</p>
            <button 
                className='delete-btn'
                onClick={()=> props.deleteMovie(_id)}
                >Delete</button>
        </div>
    )
}
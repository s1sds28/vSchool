import React, {useState} from 'react'

import './Badge'

function CardSolo(props) {

    const { firstName, lastName, phone, email, placeOfBirth, favoriteFood, comment } = props

    return (
        <div className='badge-container'>
        <h6> Name: {firstName} {lastName}</h6>
        <h6> Phone: {phone} </h6>
        <h6> Email: {email} </h6>
        <h6> Place of Birth: {placeOfBirth}</h6>
        <h6> Favorite Food: {favoriteFood}</h6>
        <p> Comment: {comment}</p>

        </div>
    )
}

export default CardSolo;
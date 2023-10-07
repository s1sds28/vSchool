import React, {useState} from 'react'

function CardSolo(props) {

    const { firstName } = props

    return (
        <div className='CardSolo'>
        <h1>{firstName}</h1>
        </div>
    )
}

export default CardSolo;
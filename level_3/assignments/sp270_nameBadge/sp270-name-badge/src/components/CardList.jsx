import React, {useState} from 'react'

import CardSolo from './CardSolo'

import './badge.css'

export default function CardList(props){

    const { submittedForms } = props

    const allCards = submittedForms.map(card => {

        const {firstName, lastName, phone, email, placeOfBirth, favoriteFood, comment} = card

        return <CardSolo 
                firstName={firstName}
                lastName={lastName}
                phone={phone}
                email={email}
                placeOfBirth={placeOfBirth}
                favoriteFood={favoriteFood}
                comment={comment}
                 />
    })

    return (
        <div>
            {allCards}
        </div>
    )
}
import React, {useState} from 'react'

import CardSolo from './CardSolo'

import './badge.css'

export default function CardList(props){

    const { submittedForms, handleDelete, handleEdit } = props

    const allCards = submittedForms.map(card => {

        const {firstName, lastName, phone, email, placeOfBirth, favoriteFood, comment, id} = card

        return <CardSolo 
                firstName={firstName}
                lastName={lastName}
                phone={phone}
                email={email}
                placeOfBirth={placeOfBirth}
                favoriteFood={favoriteFood}
                comment={comment}
                badgeId={id}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                 />
    })

    return (
        <div>
            {allCards}
        </div>
    )
}
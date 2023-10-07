import React, {useState} from 'react'

import CardSolo from './CardSolo'

import './badge.css'

export default function CardList(props){

    const { submittedForms } = props

    const allCards = submittedForms.map(card => {

        const {firstName} = card

        return <CardSolo firstName={firstName} />
    })

    return (
        <div>
            {allCards}
        </div>
    )
}
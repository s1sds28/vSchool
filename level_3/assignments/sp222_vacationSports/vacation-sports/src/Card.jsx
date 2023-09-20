import React from 'react'

import './Card.css'

function Card(props) {





    return (

        
        <div className="card">
            <p>{props.place}</p>
            <p>{props.price}</p>
            <p>{props.timeToGo}</p>
        </div>

    )
}

export default Card;

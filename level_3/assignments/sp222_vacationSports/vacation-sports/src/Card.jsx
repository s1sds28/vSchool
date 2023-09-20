import React from 'react'

import './Card.css'

function Card(props) {

    let priceCategory;

    if (props.price < 500) {
        priceCategory = "$";
    } else if (props.price < 1000) {
        priceCategory = "$$";
    } else {
        priceCategory = "$$$";
    }
    
    return (


        <div className="card">
            <p classname="card--place">Place: {props.place}</p>
            <p className="card--price"> Price: {priceCategory} {props.price}</p>
            <p className="card--season">Season: {props.timeToGo}</p>
        </div>

    )
}

export default Card;

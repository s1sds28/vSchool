import React from 'react'

function Card(props){
    const newColor = props.backgroundColor;
    return (
        <div style={{backgroundColor : `#${newColor}`}}>Component</div>
    )
}

export default Card;
import React from 'react'

import '../index.css'

function GradientBox(props){
    return (
        <div className='gradient--box'>
        {props.children}
        </div>
    )
}

export default GradientBox;
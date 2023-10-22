import React, { useState } from "react";

import { v4 as uuidv4 } from 'uuid';

import '../index.css'

function UglyThing(props){

    const { db_id, title, description } = props

    const [toggle, setToggle] = useState(true)

    // set State for uglyThing: 
    const [uglyThing, setUglyThing] = useState({
        id: uuidv4(),
        db_id: db_id,
        title: title,
        description: description,
    })

    function handleChange(e){
        e.preventDefault()

        const { name, value } = e.target

        setUglyThing(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log("handle submit")

        



        setToggle(prev => !prev)
    }

    function handleSave(e){
        e.preventDefault()
        console.log("Save")
    }

    function handleDelete(e){
        e.preventDefault()
        console.log("Delete")
    }

    function handleEdit(e){
        e.preventDefault()
        console.log("Edit")
    }

    

    return (
        <>{toggle ? (
            <div key={uglyThing.id}>
                {uglyThing.id}
                {uglyThing.title}
                {uglyThing.description}
                {uglyThing.db_id}
                <br/>
                <button className="button" onClick={() => setToggle(prevState => !prevState)}>Edit</button>
                <button className="button" onClick={handleDelete}>Delete</button>
            </div>
            ) : (
            <form onSubmit={handleSubmit}>
                <input
                value={uglyThing.title}
                name="title"
                onChange={handleChange}
                placeholder={uglyThing.title}
                />
     
            <button type="submit" className="button">Save</button>
            <button className="button" onClick={() => setToggle(prevState => !prevState)}>Cancel</button>        
            </form>
            )}
        </>
    )
}

export default UglyThing;
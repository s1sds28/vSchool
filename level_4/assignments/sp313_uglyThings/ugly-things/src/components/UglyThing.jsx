import React, { useState } from "react";

import { v4 as uuidv4 } from 'uuid';

import axios from 'axios'


import '../index.css'

function UglyThing(props){

    const { handleDelete, db_id, title, description, imgUrl } = props

    const [toggle, setToggle] = useState(true)

    // set State for uglyThing: 
    const [uglyThing, setUglyThing] = useState({
        id: uuidv4(),
        db_id: db_id,
        title: title,
        description: description,
    })

    // handle change by updating state
    function handleChange(e){
        e.preventDefault()
        const { name, value } = e.target

        setUglyThing(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    // handle submit by makeing axios put request
    function handleSubmit(e){
        e.preventDefault()
        const apiUrl = `https://api.vschool.io/steven/thing/${db_id}`

        const { title, description, imgUrl } = uglyThing

        const newData = {
            title: title,
            description: description,
            imgUrl: imgUrl
        }

        axios.put(apiUrl, newData)
        .then(response => {
            console.log('PUT Request Successful!', response.data);
        })
        .catch(error => {
            console.error('Error making PUT request:', error);
        });

        setToggle(prev => !prev)
    }

    function apiHandleDelete(e){
        e.preventDefault()
        console.log("handle Delete")
        console.log(db_id)
        const apiUrl = `https://api.vschool.io/steven/thing/${db_id}`

        axios.delete(apiUrl)
        .then(response => {
            console.log('PUT Request Successful!', response.data);
        })
        handleDelete(db_id)
        .catch(error => {
            console.error('Error making PUT request:', error);
        });

    }

    function handleSave(e){
        e.preventDefault()
        console.log("Save")
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
                <button className="button" onClick={apiHandleDelete}>Delete</button>
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
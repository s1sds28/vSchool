import React, { useState } from "react";

import { v4 as uuidv4 } from 'uuid';

import axios from 'axios'

import '../index.css'
import './components.css'

function UglyThing(props){

    const { handleDelete, db_id, title, description, imgUrl } = props

    // set toggle state
    const [toggle, setToggle] = useState(true)

    // set uglyThing state 
    const [uglyThing, setUglyThing] = useState({
        id: uuidv4(),
        db_id: db_id,
        title: title,
        description: description,
        imgUrl: imgUrl
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

    // handle submit by making axios put request
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

    return (
        <>{toggle ? (
            <div key={uglyThing.id}>
                <h1>{uglyThing.title}</h1>
                <p>{uglyThing.description}</p>
                <div className="uglyThing-image" style={{ backgroundImage: `url(${uglyThing.imgUrl})` }}></div>

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
                <input
                    value={uglyThing.description}
                    name="description"
                    onChange={handleChange}
                    placeholder={uglyThing.description}
                />
                <input
                    value={uglyThing.imgUrl}
                    name="imgUrl"
                    onChange={handleChange}
                    placeholder={uglyThing.imgUrl}
                />
                <div className="uglyThing-image" style={{ backgroundImage: `url(${uglyThing.imgUrl})` }}></div>


            <button type="submit" className="button">Save</button>
            <button className="button" onClick={() => setToggle(prevState => !prevState)}>Cancel</button>        
            </form>
            )}
        </>
    )
}

export default UglyThing;
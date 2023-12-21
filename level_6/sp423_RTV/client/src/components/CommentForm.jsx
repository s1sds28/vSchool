import React, { useContext, useState } from 'react'
import Issue from './Issue'
import { UserContext } from '../context/UserProvider'

const initInputs = {
    text: "",
}

export default function CommentForm(props){
    
    const [inputs, setInputs] = useState(initInputs)

    const { postNewComment } = useContext(UserContext)


    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        postNewComment(inputs, props.issue_Id)
            .then(() => setInputs(initInputs))
            .catch(error => console.error("Error posting comment:", error));
    }
    

const { text } = inputs
return (
    // <form onSubmit={handleSubmit}>
    //     <input 
    //         type="text" 
    //         name="text" 
    //         value={ text } 
    //         onChange={handleChange} 
    //         placeholder="comment"
    //     />
    //     <button>Save Comment</button>
    // </form>

    <div>
        <input 
            type="text" 
            name="text" 
            value={ text } 
            onChange={handleChange} 
            placeholder="comment"
        />
        <button onClick={handleSubmit}>Save Comment</button>
    </div>
    )
}
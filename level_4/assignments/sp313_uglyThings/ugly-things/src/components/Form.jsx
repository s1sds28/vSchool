import React, { useState } from "react";


import axios from 'axios';


function Form(props){

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        imgUrl:""
    })

    function handleChange(e){
        e.preventDefault()
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    
    }

    function handleSubmit(e){
        e.preventDefault();
        const url = "https://api.vschool.io/steven/thing";
        
        axios.post(url, formData)
        .then(response => {
            console.log('Success:', response.data);
            window.location.reload()
        })
        .catch(error => {
            console.log('Error:', error);
        });
    
        setFormData({
            title: "",
            description: "",
            imgUrl: ""
        });
    }
    
    console.log(formData)
    return (
        <>
            <form>
                <input
                    name="title"
                    value={formData.title}
                    placeholder="Title"
                    onChange={handleChange}
                    required
                ></input>
                <input
                    name="description"
                    value={formData.description}
                    placeholder="Description"
                    onChange={handleChange}
                ></input>
                <input
                    name="imgUrl"
                    value={formData.imgUrl}
                    placeholder="imgUrl"
                    onChange={handleChange}
                ></input>
                <button type="submit" onClick={handleSubmit}>Save Ugly Thing</button>
            </form>
        </>
    )
}

export default Form;

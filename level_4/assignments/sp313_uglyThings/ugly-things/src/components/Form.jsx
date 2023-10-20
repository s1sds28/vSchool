import React, { useState } from "react";



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
        e.preventDefault()
        const url = "https://api.vschool.io/steven/thing"
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);

        })
        .catch(error => {
            console.log('Error:', error)
        })
        setFormData({
            title: "",
            description: "",
            imgUrl: ""
        })


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

import React, { useState } from "react";

export default function AddBountyForm(props){
    const initInputs = { 
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        _id: props._id || "",
        isLiving: props.isLiving || "",
        bountyAmount: props.bountyAmount || "",
        type: props.type || ""
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        e.preventDefault()
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
            type="text"
            name="firstName"
            value={ inputs.firstName}
            onChange={ handleChange }
            placeholder="firstName"/>
            <input
            type="text"
            name="lastName"
            value={ inputs.lastName}
            onChange={ handleChange }
            placeholder="lastName"/>
            <input
            type="text"
            name="isLiving"
            value={ inputs.isLiving}
            onChange={ handleChange }
            placeholder="isLiving"/>
            <input
            type="text"
            name="bountyAmount"
            value={ inputs.bountyAmount}
            onChange={ handleChange }
            placeholder="bountyAmount"/>
            <input
            type="text"
            name="type"
            value={ inputs.type}
            onChange={ handleChange }
            placeholder="type"/>

            <button type="submit">{ props.btnText }</button>
            </form>
    )
}
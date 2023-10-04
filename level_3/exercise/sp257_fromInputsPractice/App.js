
//This was part of a scrimba exercise to practice Form inputs: 

import React from "react"

export default function Form() {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    /**
     * Challenge: Track the applicant's last name as well
     */
    
    function handleChange(event) {
        setFirstName(event.target.value)
    }
    
    function handleLastName(event) {
        setLastName(event.target.value)
    }
    
    console.log(firstName, lastName)
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleLastName}
            />

        </form>
    )
}



// vSchool's answer:
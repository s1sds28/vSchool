import React from "react"

export default function App() {
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    
    const [formData, setFormData] = React.useState(
        {
            email:"", 
            password:"",
            confirmPassword:"",
            okayToEmail: false
        })
    
    // console.log(formData)
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {

            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        const {name, value, type, checked} = event.target
        console.log(formData.confirmPassword, formData.password)
        const result = formData.password === formData.confirmPassword ? "Successfully signed up" : "passwords to not match"
        console.log(result)
        // return result

    }
    if(formData.okayToEmail === true){
        console.log("Thanks for signing up for our newsletter!")
    }
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    className="form--input"
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="form--input"

                />
                
                <div className="form--marketing">
                    <input
                        type="checkbox"
                        id="okayToEmail"
                        checked={formData.okayToEmail}
                        onChange={handleChange}
                        name="okayToEmail"
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
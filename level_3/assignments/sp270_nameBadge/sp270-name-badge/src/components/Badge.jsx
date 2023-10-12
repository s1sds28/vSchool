import React, {useState} from 'react';
import './badge.css';
import {v4 as uuidv4} from 'uuid'


export default function Badge(props) {
  const { submittedForms, handleFormSubmit } = props

  console.log(submittedForms)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    placeOfBirth: "",
    phone: "",
    favoriteFood: "",
    comment: "",
    id: uuidv4()
  })

  const handleChange = (event) => {
    event.preventDefault()
    const {name, value } = event.target;
    setFormData({
      ...formData, 
      [name]: value,
    });
  };

  const validatePhone = (value) => {
    return /^\d{10}$/.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(formData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      placeOfBirth: "",
      phone: "",
      favoriteFood: "",
      comment: "",  
      id: uuidv4()
    })
  }
 

  const isPhoneValid = validatePhone(formData.phone);

  return (
    <>
    <form className="badge-container" onSubmit={handleSubmit}>
      <span>Badge Text:</span>
      <div className="small-boxes">
      <input 
        minLength="3"
        type="text"
        className="input-box"
        placeholder="First Name"
        name="firstName"
        id="firstName"
        value={formData.firstName}
        onChange={handleChange}
        />
      <input 
        minLength="3"
        type="text" 
        className="input-box" 
        placeholder="Last Name"
        name='lastName'
        id='lastName'
        onChange={handleChange}
        value={formData.lastName} 
        />
      <input 
        minLength="3"
        type="email" 
        className="input-box" 
        placeholder="Email" 
        name='email'
        id='email'
        onChange={handleChange}
        value={formData.email}
        />
      <input 
        minLength="3"
        type="text" 
        className="input-box"
        placeholder="Place of Birth"
        name='placeOfBirth'
        id='placeOfBirth'
        onChange={handleChange}
        value={formData.placeOfBirth}
         />
      <input 
        minLength="3"
        type="text" 
        className={`input-box ${!isPhoneValid ? 'invalid' : ''}`}
        placeholder="Phone"
        name='phone'
        id='phone'
        onChange={handleChange}
        value={formData.phone}
        />
      <input 
        minLength="3"
        type="text" 
        className="input-box" 
        placeholder="Favorite Food"
        name='favoriteFood'
        onChange={handleChange}
        value={formData.favoriteFood}
        />
        </div>
        <div className='badge-container'>
        <label htmlFor="comment">Comment:</label><br />
        <textarea
          className='text-box'
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        />

      </div>
        <br />
      <button 
        disabled={
          !formData.firstName ||
          !formData.lastName ||
          !formData.email ||
          !formData.placeOfBirth ||
          !formData.phone ||
          !formData.favoriteFood ||
          !formData.comment}
        className="submit-button"
        type='submit'
        >
          Submit
        </button>
    </form>

    </>
  );
}

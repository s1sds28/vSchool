import React, {useState} from 'react';
import './badge.css';


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
  })


  const handleChange = (event) => {
    event.preventDefault()
    const {name, value } = event.target;
    setFormData({
      ...formData, 
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   setSubmittedForms([...submittedForms, formData])
  //   e.target.reset();
  //   formData.firstName = "";
  //   formData.lastName= "";
  //   formData.email= "";
  //   formData.placeOfBirth= "";
  //   formData.phone= "";
  //   formData.favoriteFood= "";
  //   formData.comment= "";
  //   console.log(submittedForms)
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(formData); // Call the function passed from parent with the form data
  //   formData.firstName = "";
  //   formData.lastName= "";
  //   formData.email= "";
  //   formData.placeOfBirth= "";
  //   formData.phone= "";
  //   formData.favoriteFood= "";
  //   formData.comment= "";

    e.target.reset();
  }

  return (
    <>
    <form className="badge-container" onSubmit={handleSubmit}>
      <span>Badge Text:</span>
      <div className="small-boxes">
      <input 
        type="text"
        className="input-box"
        placeholder="First Name"
        name="firstName"
        id="firstName"
        value={formData.firstName}
        onChange={handleChange}
        />
      <input 
        type="text" 
        className="input-box" 
        placeholder="Last Name"
        name='lastName'
        id='lastName'
        onChange={handleChange}
        value={formData.lastName} 
        />
      <input 
        type="email" 
        className="input-box" 
        placeholder="Email" 
        name='email'
        id='email'
        onChange={handleChange}
        value={formData.email}
        />
      <input 
        type="text" 
        className="input-box"
        placeholder="Place of Birth"
        name='placeOfBirth'
        id='placeOfBirth'
        onChange={handleChange}
        value={formData.placeOfBirth}
         />
      <input 
        type="text" 
        className="input-box" 
        placeholder="Phone"
        name='phone'
        id='phone'
        onChange={handleChange}
        value={formData.phone}
        />
      <input 
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
      <button className="submit-button" type='submit'>Submit</button>
    </form>

    </>
  );
}

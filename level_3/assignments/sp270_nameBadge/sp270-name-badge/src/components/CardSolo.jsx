import React, { useState, useEffect } from "react";

import "./Badge";

function CardSolo(props) {
  const {
    firstName,
    lastName,
    phone,
    email,
    placeOfBirth,
    favoriteFood,
    comment,
    badgeId,
    handleDelete,
    handleEdit
  } = props;

  const [toggle, setToggle] = useState(true);

  const [edit, setEdit] = useState({
    firstName,
    lastName,
    phone,
    email,
    placeOfBirth,
    favoriteFood,
    comment,
  })

  useEffect(() => {
    setEdit({
      firstName,
    lastName,
    phone,
    email,
    placeOfBirth,
    favoriteFood,
    comment,
    })
  }, [toggle])


  const handleChange = (e) => {
    const {name, value} = e.target
    setEdit(prevEdit => {
      return {
        ...prevEdit,
        [name]: value
      }
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    handleEdit(badgeId, edit)
    setToggle(prev => !prev)
  }


  return (
    <>
      {toggle ? (
        <div className="badge-container">
          <h6>
            Name: {firstName} {lastName}
          </h6>
          <h6> Phone: {phone} </h6>
          <h6> Email: {email} </h6>
          <h6> Place of Birth: {placeOfBirth}</h6>
          <h6> Favorite Food: {favoriteFood}</h6>
          <p> Comment: {comment}</p>
          <button onClick={() => setToggle(prev => !prev)}>Edit</button>
          <button onClick={() => handleDelete(badgeId)}>Delete</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input 
          value = {edit.firstName} 
          name="firstName"
          onChange={handleChange}
          />

          <input 
          value = {edit.lastName}
          name="lastName"
          onChange={handleChange}
          />

          <input 
          value={edit.phone}
          name="phone"
          onChange={handleChange}
          />

          <input 
          value={edit.email}
          name="email"
          onChange={handleChange}
          />

          <input  
          value={edit.placeOfBirth}
          name="placeOfBirth"
          onChange={handleChange}
          />

          <input 
          value={edit.favoriteFood} 
          name="favoriteFood"
          onChange={handleChange}
          />

          <textarea 
            value={edit.comment}
            name="comment"
            onChange={handleChange}
          />
          <button>Save</button>
          <button onClick={() => setToggle(prev => !prev)}>Cancel</button>
        </form>
      )}
    </>
  );
}

export default CardSolo;

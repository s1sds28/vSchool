import React, { useContext, useState } from 'react';
import { BillContext } from '../Context';
import Bill from './Bill';
import axios from 'axios';

function BillProvider({ provider, bills }) {
  const [displayBills, setDisplayBills] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProvider, setEditedProvider] = useState({ ...provider });

  const allBills = bills.map(bill => (
    <Bill key={bill._id} bill={bill} />
    ));

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProvider(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Extract only the desired properties from editedProvider
    const { name, frequency, category } = editedProvider;
    const updatedProvider = { name, frequency, category };
  
    // Perform the POST request to save changes
    const url = `http://localhost:9000/billProvider/${provider._id}`;
    
    axios.put(url, updatedProvider)
      .then(response => {
        setEditedProvider(response.data);
        setIsEditing(false);
      })
      .catch(error => console.error(error));
  };
  

  return (
    <div>
      <p>BILL PROVIDER COMPONENT</p>
      {isEditing ? (
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={editedProvider.name || ""}
              onChange={handleInputChange}
              placeholder='Name'
            />
          </label>
          <label>
            Frequency:
            <input
              type="text"
              name="frequency"
              value={editedProvider.frequency || ""}
              onChange={handleInputChange}
              placeholder='Frequency'
            />
          </label>
          <label>
            Category:
            <input
              type="text"
              name="category"
              value={editedProvider.category || ""}
              onChange={handleInputChange}
              placeholder='Category'
            />
          </label>
          <button type="button" onClick={handleSaveChanges}>
            Save Changes
          </button>
          <button type="button" onClick={() => setIsEditing(!isEditing)}>Cancel</button>
        </form>
      ) : (
        <>
          <p>Name: {editedProvider.name}</p>
          <p>Frequency: {editedProvider.frequency}</p>
          <p>Category: {editedProvider.category}</p>
          <button type="button" onClick={handleEditToggle}>
            Edit
          </button>
          <button type="button" onClick={() => setDisplayBills(!displayBills)}>
          Display Bills
        </button>
        {displayBills && allBills}
        </>
      )}
    </div>
  );
}

export default BillProvider;


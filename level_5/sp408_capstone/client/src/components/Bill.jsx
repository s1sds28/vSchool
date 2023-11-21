import React, { useState } from 'react';

const Bill = ({ bill }) => {
  // TOGGLE, ONCHANGE, EDIT STATE
  // console.log("BILL", bill)
  const [isEditing, setIsEditing] = useState(false)
  const [editedBill, setEditedBill] = useState({ ...bill })

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBill(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }
  return (
    <div>
      <form>
        <label>
          Name:
        </label>
      </form>
      <p>BILL COMPONENT</p>
      <p>{bill.issueDate}</p>
      <p>Amount: $ {bill.amount}</p>
      {/* Add more bill details as needed */}
    </div>
  );
};



export default Bill;
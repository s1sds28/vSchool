import React, { useContext, useState } from 'react';
import axios from 'axios';
import { BillContext } from '../Context';


const Bill = ({ bill, setArrayBills }) => {
  const { setBills } = useContext(BillContext);

  const [isEditing, setIsEditing] = useState(false)
  const [editedBill, setEditedBill] = useState({ ...bill })
  console.log(editedBill)

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
  const handleSaveChanges = () => {
    const {
      issueDate,
      amount,
      isPaid,
      paymentStatus,
      _id,
      billProvider
    } = editedBill
    const newBillBody = {
      issueDate,
      amount,
      isPaid,
      paymentStatus,
      _id,
      billProvider
    }

    const url = `http://localhost:9000/bills/${_id}`;
    axios.put(url, newBillBody)
      .then(res => {
        setEditedBill(res.data)
        setIsEditing(false)

      })
      .catch(error => console.log(error => console.error(error)))
  }
  const handleDeleteBill = async () => {
    const isConfirmed = window.confirm("Are you sure you want to delete the bill?")
    if(!isConfirmed) {
      return;
    }

    const { _id } = editedBill

    const url = `http://localhost:9000/bills/${_id}`;

    try {
      const response = await axios.delete(url);
      setArrayBills(prevBills => prevBills.filter(bill => _id !== bill._id))
      console.log(`Bill with ID ${editedBill._id} deleted successfully`);

    } catch (error) {
      console.error("Error deleting provider:", error);
    }


  }
  const handleCancel = () => {
    setIsEditing(!isEditing)
    setEditedBill({...bill})

  }
  return (
    <div>
      <p>BILL COMPONENT</p>
      {isEditing ? (      <form>
      <label>
        Issue Date:
          <input
            type="date"
            name="issueDate"
            value={editedBill.issueDate || ""}
            onChange={handleInputChange}
            placeholder='Issue Date'
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={editedBill.amount || ""}
            onChange={handleInputChange}
            placeholder={editedBill.amount}
          />
        </label>
        <label>
          Is Paid:
          <select
            name="isPaid"
            value={editedBill.isPaid || ""}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <label>
          Payment Status:
          <input
            type="text"
            name="paymentStatus"
            value={editedBill.paymentStatus || ""}
            onChange={handleInputChange}
            placeholder={editedBill.paymentStatus || ""}
          />
        </label>
        <button type='button' onClick={handleSaveChanges}>Save Changes</button>
        <button type='button' onClick={handleCancel}>Cancel</button>

      </form>
      ):(
        <>
          <p>Issue Date: {editedBill.issueDate}</p>
          <p>Due Date: {editedBill.dueDate}</p>
          <p>Bill Amount: {editedBill.amount}</p>
          <p>Is Paid: {editedBill.isPaid ? "True": "False"}</p>
          <p>Payment Status: {`${editedBill.paymentStatus}`}</p>
          <p>Bill ID: {editedBill._id}</p>
          <p>Bill ProviderID: {`${editedBill.billProvider}`}</p>
          <button type='button' onClick={handleEditToggle}>Edit</button>
          <button type='button' onClick={handleDeleteBill}>Delete</button>
        </>
      )}
    </div>
  );
};



export default Bill;
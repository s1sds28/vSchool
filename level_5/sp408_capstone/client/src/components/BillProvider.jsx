import React, { useContext, useState } from 'react';
import { BillContext } from '../Context';
import Bill from './Bill';
import axios from 'axios';

function BillProvider({ provider, bills, setBills }) {
  const [displayBills, setDisplayBills] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProvider, setEditedProvider] = useState({ ...provider });

  const [arrayBills, setArrayBills] = useState(bills)
  const [isAddingBill, setIsAddingBill] = useState(false)
  const [newBill, setNewBill] = useState({
    issueDate: null,
    amount: "",
    isPaid: false,
    dueDate: "",
    paymentStatus: "",
    billProvider: provider._id
  })
  // console.log(arrayBills)

  const allBills = arrayBills.map(bill => (
    <Bill key={bill._id} bill={bill} />
    ));

  const handleAddBillCancel = () => {
    setIsAddingBill(!isAddingBill)
  }

  const handleAddBillChange = (e) => {
    const { name, value } = e.target;
    setNewBill(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }
  const handleSaveBill = () => {
    const { issueDate, amount, isPaid, dueDate, paymentStatus, billProvider } = newBill;
    const newBillBody = { issueDate, amount, isPaid, dueDate, paymentStatus, billProvider };
    // console.log(setBills)
    const url = `http://localhost:9000/bills`;

    axios.post(url, newBillBody)

      .then(response => {
        setArrayBills(prev => [...prev, response.data])
        setIsAddingBill(false);
      })
      .catch(error => console.error(error));

  }

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
    const url = `http://localhost:9000/billProvider/${provider._id}`;
    
    axios.put(url, updatedProvider)
      .then(response => {
        setEditedProvider(response.data);
        setIsEditing(false);
      })
      .catch(error => console.error(error));
  };
  
  const handleCancel = () => {
    setIsEditing(!isEditing)
    setEditedProvider({ ...provider})
  }

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
          <button type="button" onClick={handleSaveChanges}>Save Changes</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
      ) : (
        <>
          <p>Name: {editedProvider.name}</p>
          <p>Frequency: {editedProvider.frequency}</p>
          <p>Category: {editedProvider.category}</p>
          <button type="button" onClick={handleEditToggle}>Edit</button>
          <button type="button" onClick={() => (setIsAddingBill(!isAddingBill))}>Add Bill</button>
          <button type="button" onClick={() => setDisplayBills(!displayBills)}>Display Bills</button>

{isAddingBill && (
  <form>
    <label>
      issueDate:
      <input
        type="date"
        name="issueDate"
        value={newBill.issueDate || ""}
        onChange={(e) => handleAddBillChange(e, 'issueDate')}
        placeholder='Issue Date'
      />
    </label>
    <label>
      Amount:
      <input
        type="number"
        name="amount"
        value={newBill.amount || ""}
        onChange={(e) => handleAddBillChange(e, 'amount')}
        placeholder='Amount'
      />
    </label>
    <label>
      Is Paid:
      <input
        type='radio'
        name="isPaid"
        checked={newBill.isPaid}
        onChange={() => handleAddBillChange({ target: { name: "isPaid", value: !newBill.isPaid } }, 'isPaid')}
      />
      Yes
      <input
        type='radio'
        name="isPaid"
        checked={!newBill.isPaid}
        onChange={() => handleAddBillChange({ target: { name: "isPaid", value: !newBill.isPaid } }, 'isPaid')}
      />
      No
    </label>
    <label>
      dueDate:
      <input
        type="date"
        name="dueDate"
        value={newBill.dueDate || ""}
        onChange={(e) => handleAddBillChange(e, 'dueDate')}
        placeholder='Due Date'
      />
    </label>
    <button type="button" onClick={handleSaveBill}>Save</button>
    <button type="button" onClick={handleAddBillCancel}>Cancel</button>
  </form>
)}
        
        {displayBills && allBills}
        </>
      )}
    </div>
  );
}

export default BillProvider;


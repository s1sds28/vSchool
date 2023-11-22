import React, { useState, useContext } from 'react';
import BillProvider from '../components/BillProvider';
import axios from 'axios';

import { BillContext } from '../Context';

const TrackBills = () => {
  const { billProviders, setBillProviders, bills, setBills } = useContext(BillContext);
  const [displayProviders, setDisplayProviders] = useState(false);
  const [newProviderForm, setNewProviderForm] = useState({
    name: '',
    frequency: '',
    category: '',
  });

  const allBillProviders = billProviders.map(provider => {
    const providerBills = bills.filter((bill) => bill.billProvider === provider._id)
    return (
      <BillProvider key={provider._id} id={provider._id} provider={provider} bills={providerBills} />
    );
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProviderForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleAddProvider = () => {
    const url = 'http://localhost:9000/billProvider'; // Adjust the URL based on your server endpoint

    axios.post(url, newProviderForm)
      .then(response => {
        // Update the billProviders state with the new provider
        setBillProviders(prevProviders => [...prevProviders, response.data]);
        // Reset the form after successful submission
        setNewProviderForm({
          name: '',
          frequency: '',
          category: '',
        });
      })
      .catch(error => console.error(error));
  };

  return (
    <>
    <p>BILL PROVIDER page</p>
    <div>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newProviderForm.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Frequency:
          <input
            type="text"
            name="frequency"
            value={newProviderForm.frequency}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={newProviderForm.category}
            onChange={handleInputChange}
          />
        </label>
        <button type='button' onClick={handleAddProvider}>
          Add Provider
        </button>
        <button type='button' onClick={() => setDisplayProviders(!displayProviders)}>
          Display Providers
        </button>
      </form>
      {displayProviders && allBillProviders}
    </div>
    </>
  );
};

export default TrackBills;

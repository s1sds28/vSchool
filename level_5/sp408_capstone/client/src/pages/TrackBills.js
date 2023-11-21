import React, { useState, useEffect } from 'react';
import BillProvider from '../components/BillProvider';
import axios from 'axios';

const TrackBills = () => {
  const [billProviders, setBillProviders] = useState([]);

  const [ bills, setBills ] = useState([])

  useEffect(() => {
    // Fetch data from the backend API
    const url = "http://localhost:9000/billProvider"
    axios.get(url)
      .then(response => setBillProviders(response.data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    // Fetch data from the backend API
    const url = "http://localhost:9000/bills"
    axios.get(url)
      .then(response => setBills(response.data))
      .catch(error => console.error(error));
  }, []);

  const allBillProviders = billProviders.map(provider => {
    const providerBills = bills.filter((bill) => bill.billProvider === provider._id)
    return (
    <BillProvider key={ provider._id } provider={ provider } bills={ providerBills } />
  )})

  console.log(billProviders)
  console.log(bills)
  return (
    <div>
      <p>BILL PROVIDER page</p>
      { allBillProviders }
    </div>
  );
};

export default TrackBills;
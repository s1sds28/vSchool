import React, { useState, useEffect, useContext } from 'react';
import BillProvider from '../components/BillProvider';
import axios from 'axios';

import { BillContext } from '../Context';

const TrackBills = () => {

  const { billProviders, setBillProviders, bills, setBills } = useContext(BillContext);

  const allBillProviders = billProviders.map(provider => {
    const providerBills = bills.filter((bill) => bill.billProvider === provider._id)
    return (
    <BillProvider key={ provider._id } id={provider._id} provider={ provider } bills={ providerBills } />
  )})

  // console.log(billProviders)
  // console.log(bills)
  return (
    <div>
      <p>BILL PROVIDER page</p>
      { allBillProviders }
    </div>
  );
};

export default TrackBills;
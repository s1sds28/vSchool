import React from 'react';
import Bill from './Bill';

const BillProvider = ({ provider, bills }) => {
  const providerBills = bills.map(bill => (<Bill key={bill._id} bill={bill}></Bill>))
  return (
    <div>
      <p>Bill Provider component
      { provider.name }
      { provider.frequency }
      { provider.catagory }
      {providerBills}
      </p>
      {/* {provider.bills.map(bill => (
        <Bill key={bill._id} bill={ bill } />
      ))} */}
    </div>
  );
};

export default BillProvider;
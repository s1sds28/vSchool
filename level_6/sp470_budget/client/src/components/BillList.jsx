import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider.jsx";

import Bill from "./Bill.jsx";

export default function BillList() {
  const {
    bills,
    filteredBills: contextFilteredBills
  } = useContext(UserContext);


  const sortedFilteredBills = [...contextFilteredBills].sort((a, b) => b.issueDate - a.issueDate);


  return (
    <>
    {sortedFilteredBills.length !== 0 ? (    
    <div>
      {sortedFilteredBills.map((bill) => (
        <Bill {...bill} key={bill._id} />
      ))}
    </div>
    ):(
    <div className="add-bill">
      <p>Display bills on an Account to show bills</p>
    </div>
    )}

    </>
  );
}

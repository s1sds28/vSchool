import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider.jsx";
import Account from "./Account.jsx";

export default function AccountList() {
  const {
    user: { username, accounts },
  } = useContext(UserContext);
  console.log(accounts)
//   const sortedAccounts = [...accounts].sort((a, b) => a.budgetAmount - b.budgetAmount);
//   console.log(sortedAccounts)

  return (
    <div>
      <p>{username}</p>
      {/* {sortedAccounts.map((account) => (
        <Account {...account} key={account._id} />
      ))} */}
    </div>
  );
}

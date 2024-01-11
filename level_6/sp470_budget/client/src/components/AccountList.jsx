import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider.jsx";
import Account from "./Account.jsx";

export default function AccountList() {
  const {
    user: { username },
    updateAccount,
    accounts
  } = useContext(UserContext);

  const sortedAccounts = [...accounts].sort((a, b) => a.budgetAmount - b.budgetAmount);

  return (
    <div>
        <p>{username}</p>
        {sortedAccounts.map((account) => (
        <Account updateAccount={updateAccount} {...account} key={account._id} />
      ))}
    </div>
  );
}
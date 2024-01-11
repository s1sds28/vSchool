import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider.jsx";
import Account from "./Account.jsx";

export default function AccountList() {
  const {
    deleteAccount,
    updateAccount,
    accounts
  } = useContext(UserContext);

  const sortedAccounts = [...accounts].sort((a, b) => b.budgetAmount - a.budgetAmount);

  return (
    <div>
        {sortedAccounts.map((account) => (
        <Account deleteAccount={deleteAccount} updateAccount={updateAccount} {...account} key={account._id} />
      ))}
    </div>
  );
}

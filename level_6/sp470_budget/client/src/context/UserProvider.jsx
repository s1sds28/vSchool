import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const UserContext = React.createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props) {
  const initState = {
    user: JSON.parse(localStorage.getItem('user')) || {},
    token: localStorage.getItem('token') || '',
    accounts: [],
    bills: [],
    errMsg: ""
  };

  const [userState, setUserState] = useState(initState);
  const [filteredBills, setFilteredBills] = useState([])
  const [accountNumforBill, setAccountNumbforBill] = useState(null)

  function signup(credentials){
    axios.post("/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  function login(credentials){
    axios.post("/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: "",
      accounts: [],
      bills: []
    })
  }

  function handleAuthErr(errMsg){
    setUserState(prevState => ({
      ...prevState,
      errMsg
    }))
  }

  function resetAuthErr(){
    setUserState(prevState => ({
      ...prevState,
      errMsg: ""
    }))
  }

  const getUserData = async () => {
    try {
      const [accountsResponse, billsResponse] = await Promise.all([
        userAxios.get("/api/account"),
        userAxios.get("/api/bill")
      ]);
      // define userId
      const userId = userState.user._id;
      // filter out for user based on userId
      const accounts = accountsResponse.data.filter(account => account.user === userId);
      const bills = billsResponse.data.filter(bill => bill.user === userId);
      // update state
      setUserState(prevUserState => ({
        ...prevUserState,
        accounts,
        bills
      }));
  
    } catch (error) {
      handleAuthErr("Failed to fetch user data");
    }
  };

  function addAccount(newAccount){
    const userId = userState.user._id;
    userAxios.post("/api/account", newAccount)
    .then(res => {
      setUserState(prev => ({
        ...prev,
        accounts: [...prev.accounts, res.data]
      }))
    })
    .catch((err) => console.log(err.response.data.errMsg));
  }

  function updateAccount(accountId, updatedAccount) {
    userAxios
      .put(`/api/account/${accountId}`, updatedAccount)
      .then((res) => {
        setUserState((prevState) => ({
          ...prevState,
          accounts: prevState.accounts.map((account) =>
            account._id !== accountId ? account : res.data
          ),
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }
  
  function deleteAccount(accountId){
    userAxios.delete(`api/account/${accountId}`)
    .then(res => {
      setUserState(prevState => {
        const updatedAccounts = prevState.accounts.filter(account => account._id !== accountId)
        return {
          ...prevState,
          accounts: updatedAccounts
        };
      });
    })
    .catch((err) => console.log(err.response.data.errMsg));
  }
  
  function filterBills(accountId) {
    const newBills = userState.bills.filter(bill => bill.account === accountId);
    setAccountNumbforBill(accountId)
    setFilteredBills(newBills);
  }

  async function addBill(newBill) {
    // use async function
    try {
      const userId = userState.user._id;
      const res = await userAxios.post("/api/bill", newBill);
    
      setUserState(prev => ({
        ...prev,
        bills: [...prev.bills, res.data]
      }));

      setFilteredBills(prev => [...prev, res.data])

    } catch (err) {
      console.log(err.response.data.errMsg);
    }
  }
  
  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        addAccount,
        updateAccount,
        deleteAccount,
        addBill,
        filterBills,
        filteredBills,
        getUserData,
        accountNumforBill,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
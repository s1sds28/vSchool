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
  }

  function updateAccount(accountId, updatedAccount) {
    userAxios
      .put(`/api/account/${accountId}`, updatedAccount)  // Fix: change /api/issue to /api/account
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
  
  
  

  useEffect(() => {
    getUserData();
  }, []);
  // console.log("User state in useEffect:", userState);

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        addAccount,
        updateAccount
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
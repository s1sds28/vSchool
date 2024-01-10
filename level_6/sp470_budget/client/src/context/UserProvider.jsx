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


  const getUserAccounts = async () => {
    try {
      const response = await userAxios.get("/api/account");
  
      const userId = userState.user._id;
      const accounts = response.data.filter(account => account.user === userId);
      console.log(accounts)
      
      setUserState(prevUserState => ({
        ...prevUserState,
        accounts
      }));
  
    } catch (error) {
      handleAuthErr("Failed to fetch user accounts");
    }
  };
  


  useEffect(() => {
    getUserAccounts()
  }, []);

  console.log("User state in useEffect:", userState);

  
  


  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout, 

      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
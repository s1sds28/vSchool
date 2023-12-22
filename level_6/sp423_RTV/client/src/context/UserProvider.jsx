import React, { useState } from 'react';
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
    issues: [],
    errMsg: ""
  };

  const [userState, setUserState] = useState(initState);
  const [comments, setComments] = useState([])


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
      issues: []
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

  function getUserIssues(){
    userAxios.get("/api/issue/user")
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          issues: res.data
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function addIssue(newIssue){
    userAxios.post("/api/issue", newIssue)
      .then(res => {
        setUserState(prevState=> ({
          ...prevState,
          issues: [...prevState.issues, res.data]
        }))
      })
  }

  function getAllComments() {
    userAxios.get("/api/comment")
      .then(res => {
        setComments(
          res.data
        );
        
      })
      .catch(err => console.log(err.response.data.errMsg));
  }

  function postNewComment(newComment, issueId) {
    return userAxios.post(`/api/comment/${issueId}`, newComment)
      .then(res => {
        setComments(prev => [...prev, res.data]);
        return res.data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }
  
  function upVoteIssue(issueId) {
    return userAxios.put(`/api/issue/upVote/${issueId}`)
        .then(res => {
            // setAllIssues(prevIssues => prevIssues.map(issue => issueId !== issue._id ? issue : res.data))
            setUserState(prevUserState => ({ ...prevUserState, issues: prevUserState.issues.map(issue => issueId !== issue._id ? issue : res.data) }))
        })
        .catch(err => console.log(err))
  }

  function downVoteIssue(issueId) {
    return userAxios.put(`/api/issue/downVote/${issueId}`)
        .then(res => {
            // setAllIssues(prevIssues => prevIssues.map(issue => issueId !== issue._id ?  issue : res.data))
            setUserState(prevUserState => ({ ...prevUserState, issues: prevUserState.issues.map(issue => issueId !== issue._id ? issue : res.data) }))
        })
        .catch(err => console.log(err))
  }

  
  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        addIssue,
        resetAuthErr,
        getAllComments,
        postNewComment,
        comments,
        setComments,
        getUserIssues,
        upVoteIssue,
        downVoteIssue
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
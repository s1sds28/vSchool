import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";

import "../css/issues.css"
import CommentList from "./CommentList";

export default function Issue(props) {
  const { comments, upVoteIssue, downVoteIssue, editIssue } = useContext(UserContext);
  const { _id, likedUsers, dislikedUsers, isProfile, title, description } = props;

  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    title: title,
    description: description
  })

  function handleEditClick(e){
    e.preventDefault()
    setIsEditing(prev => !prev)
    setFormData({
      title: title,
      description: description
  
    })
  }

  function handleInputChange(e){
    const {name, value} = e.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  };

  function handleSubmit(e){
    e.preventDefault()
    editIssue(_id, formData)
    setIsEditing(false)
  }

  const filteredComments = comments.filter(comment => comment.issue === _id);

  function handleUpVote(e, _id) {
    e.preventDefault();
    upVoteIssue(_id);
  }
  
  function handleDownVote(e, _id) {
    e.preventDefault();
    downVoteIssue(_id);
  }
  

  return (
    <>
      {isEditing ? (
        <form className="issue" onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Description:
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </label>

          <button onClick={handleEditClick}>Exit</button>
          <button type="submit">Save</button>
      <div className="vote-container">
      <div>
        <button onClick={(e) => handleUpVote(e, _id)} className="up-vote">Up Vote</button>
        <span>Upvotes: {likedUsers.length}</span>
      </div>
      <div>
        <button onClick={(e) => handleDownVote(e, _id)} className="down-vote">DownVote</button>
        <span>Downvotes: {dislikedUsers.length}</span>
      </div>
    </div>
  
    <div className="comments-container">
      <CommentList filteredComments={ filteredComments } issue_Id={_id}/>
    </div>


    </form>
    ):(
    <form className="issue">
    <h1>{props.title}</h1>
    <h3>{props.description}</h3>
    {isProfile && <button onClick={handleEditClick}>Edit</button>}

    <div className="vote-container">
      <div>
        <button onClick={(e) => handleUpVote(e, _id)} className="up-vote">Up Vote</button>
        <span>Upvotes: {likedUsers.length}</span>
      </div>
      <div>
        <button onClick={(e) => handleDownVote(e, _id)} className="down-vote">DownVote</button>
        <span>Downvotes: {dislikedUsers.length}</span>
      </div>
    </div>
  
    <div className="comments-container">
      <CommentList filteredComments={ filteredComments } issue_Id={_id}/>
    </div>
    </form>
    )}
    </>
  );
}

import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";

import "../css/issues.css"
import CommentList from "./CommentList";

export default function Issue(props) {
  const { comments, upVoteIssue, downVoteIssue } = useContext(UserContext);
  const { _id, likedUsers, dislikedUsers } = props;

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
      <form className="issue">
        <h1>{props.title}</h1>
        <h3>{props.description}</h3>
        

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
    </>
  );
}

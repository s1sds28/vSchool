import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";

import "../css/issues.css"
import CommentList from "./CommentList";

export default function Issue(props) {
  const { comments } = useContext(UserContext);
  const { _id, upVotes, downVotes } = props;

  // Check if comments have the expected structure before filtering
  const filteredComments = comments.filter(comment => comment.issue === _id);

  return (
    <>
      <form className="issue">
        <h1>{props.title}</h1>
        <h3>{props.description}</h3>
        

        <div className="vote-container">
          <div>
            <button className="up-vote">Up Vote</button>
            <span>Upvotes: {upVotes.length}</span>
          </div>
          <div>
            <button className="down-vote">DownVote</button>
            <span>Downvotes: {downVotes.length}</span>
          </div>
        </div>
      
        <div className="comments-container">
          <CommentList filteredComments={ filteredComments } issue_Id={_id}/>
        </div>
      </form>
    </>
  );
}

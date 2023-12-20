import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";

import "../css/issues.css"
import CommentList from "./CommentList";

export default function Issue(props) {
  const { comments } = useContext(UserContext);
  const { _id } = props;

  // Check if comments have the expected structure before filtering
  const filteredComments = comments.filter(comment => comment.issue === _id);

  console.log("filtered comments:", filteredComments)

  return (
    <>
      <form className="issue">
        <h1>{props.title}</h1>
        <h3>{props.description}</h3>
        <div className="votes-container"><button>Up Vote</button></div>
        <div className="down-vote"><button>DownVote</button></div>
      
        <div className="comments-container">
          <CommentList filteredComments={ filteredComments }/>
        </div>
      </form>
    </>
  );
}

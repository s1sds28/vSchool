import React, { useState } from "react";
import CommentForm from "./CommentForm.jsx";
import Comment from "./Comment.jsx";

export default function CommentList(props) {
  const { filteredComments, issue_Id } = props;
  const [toggle, setToggle] = useState(false);

  function displayCommentForm(e){
    e.preventDefault()
    setToggle(prev => !prev)
  }

  return (
    <div>
      <button onClick={displayCommentForm}>Add Comment</button>
      {toggle && <CommentForm issue_Id={ issue_Id }/>}
      {filteredComments.map((comment) => {
        return (<Comment {...comment} key={comment._id} />);
      })}
    </div>
  );
}

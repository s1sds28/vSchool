import React from "react";
import Comment from "./Comment.jsx";

export default function CommentList(props) {
  const { filteredComments } = props;

  return (
    <div>
      <p>Comment list</p>
      {filteredComments.map((comment) => {
        console.log("comment", comment)
        return (<Comment {...comment} key={comment._id} />);
      })}

    </div>
  );
}

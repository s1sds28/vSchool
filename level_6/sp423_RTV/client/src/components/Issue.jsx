import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";

export default function Issue(props) {
  const { comments } = useContext(UserContext);
  const { _id } = props;

  // Check if comments have the expected structure before filtering
  const filteredComments = comments.filter(comment => comment.issue === _id);

  console.log(comments);
  console.log(_id);
  console.log("filtered comments:", filteredComments)

  return (
    <div className="issue">
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
      <h5>test</h5>
    </div>
  );
}

// return (
//     <div className="issue-list">
//         { issues.map(issue => <Issue {...issue} key={issue._id}/>) }
//     </div>
// )
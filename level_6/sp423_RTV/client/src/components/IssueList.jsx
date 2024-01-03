import React from "react";
import Issue from "./Issue.jsx";

export default function IssueList(props) {
    const { issues, isProfile } = props;

    // Sort the issues based on upVotes in descending order
    const sortedIssues = issues.slice().sort((a, b) => b.likedUsers.length - a.likedUsers.length);

    return (
        <div className="issue-list">
            {sortedIssues.map(issue => (
                <Issue {...issue} isProfile={isProfile} key={issue._id} />
            ))}
        </div>
    );
}

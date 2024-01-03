import React from "react";
import Issue from "./Issue.jsx"

export default function IssueList(props){
    const { issues, isProfile } = props
    return (
        <div className="issue-list">
            { issues.map(issue => <Issue {...issue} isProfile={ isProfile } key={issue._id}/>) }
        </div>
    )
}
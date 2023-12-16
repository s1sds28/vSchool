import React from "react";
import Issue from "./Issue.jsx"

export default function IssueList(props){
    const { issues } = props
    return (
        <div className="issue-list">
            { issues.map(issue => <Todo {...issue} key={issue._id}/>) }
        </div>
    )
}
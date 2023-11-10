import React, { useState } from "react";

import AddBountyForm from "./AddBountyForm";
import "../styles.css"

export default function Bounty(props){
    const { firstName, lastName, _id, isLiving, bountyAmount, type } = props
    const [editToggle, setEditToggle] = useState(false)



    return (
        <div className="bounty">
            {!editToggle ? 
            <>
                <h1>{firstName}</h1>
                <h1>{lastName}</h1>
                <p>{_id}</p>
                <p>{isLiving}</p>
                <p>{bountyAmount}</p>
                <p>{type}</p>
                <button 
                    className="delete-btn"
                    onClick={() => props.deleteBounty(_id)}>
                    Delete
                </button>
                <button
                    className="edit-btn"
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Edit
                </button>
            </>
            :
            <>
                <AddBountyForm 
                    firstName={firstName}
                    lastName={lastName}
                    _id={_id}
                    isLiving={isLiving}
                    bountyAmount={bountyAmount}
                    type={type}
                    submit={props.editBounty}
                    btnText="Submit Edit"
                />
                <button 
                    onClick={() => setEditToggle(prev => !prev)}>
                    Cancel
                </button>
            </>
            }
        </div>
    )
}
import React, { useState } from "react";

import AddBountyForm from "./AddBountyForm";

export default function Bounty(props){
    const { firstName, lastName, _id, isLiving, bountyAmount, type } = props
    const [editToggle, setEditToggle] = useState(false)



    return (
        <div>
            {!editToggle ? 
            <>
            this
            <h1>{firstName}</h1>
            <button onClick={() => props.deleteBounty(_id)}>
                Delete
            </button>
            <button
                className=""
                onClick={() => setEditToggle(prev => !prev)}>
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
                />
                <button onClick={() => setEditToggle(prev => !prev)}>
                Cancel
                </button>
            </>
            }
        </div>
    )
}
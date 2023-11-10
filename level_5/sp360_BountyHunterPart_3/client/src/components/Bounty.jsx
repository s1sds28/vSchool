import React, { useState } from "react";

import AddBountyForm from "./AddBountyForm";

export default function Bounty(props){
    const { firstName, lastName, _id, isLiving, bountyAmount, type } = props
    const [editToggle, setEditToggle] = useState(false)



    return (
        <div>
            {!editToggle ? 
            <>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
            <p>{_id}</p>
            <p>{isLiving}</p>
            <p>{bountyAmount}</p>
            <p>{type}</p>
            <button onClick={() => props.deleteBounty(_id)}>
                Delete
            </button>
            <button
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
                    submit={props.editBounty}
                    btnText="Submit Edit"
                />
                <button onClick={() => setEditToggle(prev => !prev)}>
                    Cancel
                </button>
            </>
            }
        </div>
    )
}
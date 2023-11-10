import React, { useState, useEffect } from "react";

import axios from 'axios'

import Bounty from "./components/Bounty";
import AddBountyForm from  './components/AddBountyForm'


export default function App() {


    const [bounties, setBounties] = useState([])

    function getBounties(){
        axios.get("/bounty")
        .then(res => setBounties(res.data))
        .catch(err => console.log(err))
    }

    function addBounty(newBounty){
        axios.post("/bounty", newBounty)
        .then(res => setBounties(prevBounties => [...prevBounties, res.data]))
        .catch(err => console.log(err))
        
    }

    function deleteBounty(bountyId){
        axios.delete(`/bounty/${bountyId}`)
            .then(res => {
                setBounties(prev => prev.filter(bounty => bounty._id !== bountyId))
            })
            .catch(err => console.log(err))
    }

    function editBounty(updates, bountyId){
        axios.put(`/bounty/${bountyId}`, updates)
            // .then(res => {
            //     console.log(res.data)
            //     setBounties(prev => prev.map(bounty => {
            //         return (bounty._id !== bountyId ? bounty : res.data)
            //     }))}
            // )
            // .then(res => setBounties([]))
            .then(res => {
                setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data));
            })
            .catch(err => console.log(err))
    }

    

    useEffect(() => {
        getBounties()
    }, [])

    const allBounties = bounties.map(bounty => <Bounty 
        {...bounty}
        key={bounty._id}
        deleteBounty={deleteBounty}
        editBounty={editBounty}
        />)

    return (
    <>
        <AddBountyForm 
            submit={ addBounty }
            btnText="Add Bounty"
        />
        <div>
            { allBounties }
        </div>
    </>
    )
}

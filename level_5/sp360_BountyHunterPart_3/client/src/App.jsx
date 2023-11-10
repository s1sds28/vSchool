import React, { useState, useEffect } from "react";

import axios from 'axios'

import './styles.css'

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



    async function editBounty(updates, bountyId) {
        try {
            const res = await axios.put(`/bounty/${bountyId}`, updates);
            setBounties(prevBounties =>
                prevBounties.map(bounty => (bounty._id !== bountyId ? bounty : res.data))
            );
            setBounties(prevBounties => [...prevBounties]);

            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
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
    <div>
        <AddBountyForm 
            submit={ addBounty }
            btnText="Add Bounty"
        />
        <div>
            { allBounties }
        </div>
    </div>
    )
}

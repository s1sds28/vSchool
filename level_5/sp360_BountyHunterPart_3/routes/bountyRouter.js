const express = require("express")
const bountyRouter = express.Router()
// const uuid = require("uuid").v4;
const {v4: uuidv4} = require('uuid')

// Fake Data 
const bounties = [
    { firstName: "1 Name", lastName: "Last Name", _id: "123", isLiving: true, bountyAmount: 1, type: "Sith" },
    { firstName: "2 Name", lastName: "Last Name", _id: uuidv4(), isLiving: true, bountyAmount: 1, type: "Jedi" },
    { firstName: "3 Name", lastName: "Last Name", _id: uuidv4(), isLiving: true, bountyAmount: 1, type: "Sith" }    
]

bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(newBounty)
    })

bountyRouter.route("/:id")
    .get((req, res) => {
        const { id } = req.params;
        const bounty = bounties.find(bounty => bounty._id === id);
        if (bounty) {
            res.send(bounty);
        } else {
            res.status(404).send(`Bounty with ID ${id} not found`);
        }
    })

    .put(((req, res) => {
        const bountyId = req.params.id;
        const updateObject = req.body
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        const updatedBounty = Object.assign(bounties[bountyIndex], updateObject)
        console.log(updatedBounty)
        res.send(updatedBounty)
    }))

    .delete((req, res) => {
        const { id } = req.params;
        const bountyIndex = bounties.findIndex(bounty => bounty._id === id);

        if (bountyIndex !== -1) {
            const deletedBounty = bounties.splice(bountyIndex, 1)[0];
            res.send(`Successfully deleted bounty with ID ${id}`);
        } else {
            res.status(404).send(`Bounty with ID ${id} not found`);
        }
    });

module.exports = bountyRouter;

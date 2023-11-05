const express = require("express")
const bountyRouter = express.Router()
const uuid = require("uuid").v4;

// Fake Data 
const bounties = [
    { firstName: "First Name", lastName: "Last Name", _id: uuid(), isLiving: true, bountyAmount: 1, type: "Sith" },
    { firstName: "First Name", lastName: "Last Name", _id: uuid(), isLiving: true, bountyAmount: 1, type: "Sith" },
    { firstName: "First Name", lastName: "Last Name", _id: uuid(), isLiving: true, bountyAmount: 1, type: "Sith" }    
]

bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuid()
        bounties.push(newBounty)
        res.send(`Successfully added ${newBounty.firstName} to the bounty array`)
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
    .put((req, res) => {
        const { id } = req.params;
        const updatedBounty = req.body;

        const bountyIndex = bounties.findIndex(bounty => bounty._id === id);

        if (bountyIndex !== -1) {
            bounties[bountyIndex] = { ...bounties[bountyIndex], ...updatedBounty };
            res.send(`Successfully updated bounty with ID ${id}`);
        } else {
            res.status(404).send(`Bounty with ID ${id} not found`);
        }
    })
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

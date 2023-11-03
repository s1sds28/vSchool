const express = require("express")
const thingRouter = express.Router()
// const uuid = require("uuid").v4;

// Fake data
const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]

// Routes

thingRouter.route("/")
    .get((req, res) => {
        res.send(inventoryItems)
    })

    thingRouter.route("/search/")
    .get((req, res) => {
        const { name, type, price, lessThan, greaterThan } = req.query;

        if (name) {
            // Filter items by name http://localhost:9000/things/search?name=soup
            const filteredItems = inventoryItems.filter(item => item.name === name);
            res.send(filteredItems)
        } else if (type) {
            // Filter items by type http://localhost:9000/things/search?type=food
            const filteredItems = inventoryItems.filter(item => item.type === type);
            res.send(filteredItems);
        } else if (price) {
            // Filter items by price http://localhost:9000/things/search?price=200
            const filteredItems = inventoryItems.filter(item => item.price === Number(price));
            res.send(filteredItems);
            // Filter items by lessThan http://localhost:9000/things/search?lessThan=500
        } else if (lessThan) {
            const filteredItems = inventoryItems.filter(item => item.price < Number(lessThan))
            res.send(filteredItems)
            // Filter items by greaterThan http://localhost:9000/things/search?greaterThan=200
        } else if (greaterThan) {
            const filteredItems = inventoryItems.filter(item => item.price > Number(greaterThan));
            res.send(filteredItems)
    
        } else {
            res.status(400).send("Invalid query parameter");
        }
    });
module.exports = thingRouter;
// let and const replace var with let and const so the pet's name is spot and the man's name is John
const name = "John"
const age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])
// console.log(runForLoop(["cat", "dog"]))

//Task 1 Re-write this .map() using an arrow function:
const carrots = ["bright orange", "ripe", "rotten"]
// function mapVegetables(arr) {
//     return arr.map(carrot => {
//         return { type: "carrot", name: carrot }
//     })
// }
const mapVegetables = arr => arr.map(carrot => {
    return { type: "carrot", name: carrot }
})
console.log(mapVegetables(carrots))

// task 2
// Re-write this .map() using an arrow function:
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => {
        return person.friendly
    })
}

console.log(filterForFriendly(people))

// Task 3 Re-write the following functions to be arrow functions:

const doMathSum =  (a, b) => a + b

const produceProduct = (a,b) => a * b

console.log(doMathSum(5,6))
console.log(produceProduct(5,6))

//Task 4 Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:

const printString = (firstName='Jane', lastName='Doe', age=100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}`

console.log(printString("first", "last", 1))
console.log(printString())

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
//  function filterForDogs(arr) {
//      return arr.filter(animal => {
//          if (animal.type === "dog") {
//              return true
//          } else {
//              return false
//          }
//      })
//  }
const filterForDogs = arr => arr.filter(animal => animal.type === "dog")

console.log(filterForDogs(animals))

// Template Literals Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:
const welcomeMessage = (location, name) => `\nHi ${name}!\n\nWelcome to ${location}.\n\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything`

console.log(welcomeMessage("Hawaii", "Janice"))
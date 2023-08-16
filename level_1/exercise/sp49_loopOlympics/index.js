// Write a for loop that prints to the console the numbers 0 through 9.
console.log("log 0 to 9")
for (let i = 0; i < 10; i++) {console.log(i)}

// Write a for loop that prints to the console 9 throungh 0. 
console.log("log 9 to 0")
for (let i = 9; i >= 0; i--) {console.log(i)}

//Write a for loop that prings these fruits to the console. 
// const fruit = ["banana", "orange", "apple", "kiwi"]
// for(let i = 0; i < fruit.length; i++) {console.log(fruit[i])}

// Write a for loop that will push the numbers 0 to 9 to an array
myArr1 = []
for(let i = 0; i < 10; i++){myArr1.push(i)}
console.log(myArr1)

// Write a for loop that print to the console only even numbers 0 to 100. 
for(let i = 0; i <= 100; i++) {if(i % 2 === 0){console.log(i)}}

// Write a for loop that will push every other fruit to an array.
const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
let newFruit = [] //hash
let bool = true
for (let i = 0; i < fruit.length; i++) {
    if(bool === true){
        newFruit.push(fruit[i])
        bool = false} 
        else {bool = true}
    }
console.log(newFruit)

// Write a loop that pushes the names into a names array, and the occupants into an occupations array
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
]

// var names = []
// var occupations = []
// for(let i = 0; i < peopleArray.length; i ++){
//     names.push(peopleArray[i].name)
//     occupations.push(peopleArray[i].occupation)
// }
// console.log(names, occupations)

var names = []
var occupations = []
var nameBool = true;
var occupationBool = false;
for(let i = 0; i < peopleArray.length; i++){
    if(nameBool){
        names.push(peopleArray[i].name)
        nameBool = false
    } else nameBool = true
    if(occupationBool){
        occupations.push(peopleArray[i].occupation)
        occupationBool = false
    } else occupationBool = true
}
console.log(names)
console.log(occupations)


// Create an array that mimics a grid like the following using nested for loops [[0,0,0],[0,0,0],[0,0,0]]

// let grid = []
// for(let i = 0; i < 3; i++){
//     grid.push([])
//     for(let j = 0; j<3; j++){
//         grid[i].push(0)
//     }
// }
// console.log(grid)

// Create an array [[0,0,0],[1,1,1].[2,2,2]]
// let grid = []
// for(let i = 0; i < 3; i++){
//     grid.push([])
//     for(let j = 0; j < 3; j++){
//         grid[i].push(i)
//     }
// }
// console.log(grid)

// Create an array [[0,1,2],[0,1,2],[0,1,2]]
// let grid = []
// for(let i = 0; i < 3; i++){
//     grid.push([])
//     for(let j = 0; j < 3; j++){
//         grid[i].push(j)
//     }
// }
// console.log(grid)

// Given a grid like the previous one, write a nested for loop that would change every number to an x
grid = [[0,0,0],[1,1,1],[2,2,2]]
for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length; j++){
        grid[i][j] = "x"
    }
};
console.log(grid)
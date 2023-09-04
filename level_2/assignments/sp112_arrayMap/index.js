// Make an array of numbers that are doubles of the first array
function doubleNumbers(arr) {
    // first 
    // const doubledNumbers = arr.map(function(foo) {
    //     return foo * 2
    // })
    // return doubledNumbers

    // second 
    // return arr.map(function(foo){return foo * 2})

    // thrid
    return arr.map(num => num * 2)
}
console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// Take an array of numbers and make them strings
function stringItUp(arr) {
    // First
    // const stringNumbers = arr.map(function(foo) {
    //     return String(foo)
    // })
    // return stringNumbers
    
    // Second
    // return arr.map(function(foo){ return String(foo) })

    // Thrid
    return arr.map(foo => String(foo))
}
console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// Capitalize the first letter of each name and make the rest of the characters lowercase
function capitalizeNames(arr){
    // let fixedNames = []
    // arr.map(function(foo) {
    //     fixedNames.push(foo[0].toUpperCase() + foo.slice(1).toLowerCase())
    // })
    // return fixedNames

    // let fixedNames = []
    // arr.map(names => fixedNames.push(names[0].toUpperCase() + names.slice(1).toLowerCase()))
    // return fixedNames

    return arr.map(names => names[0].toUpperCase() + names.slice(1).toLowerCase())
}   
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
// Output:
// ["John", "Jacob", "Jingleheimer", "Schmidt"]
  

// Make an array of strings of the names
function namesOnly(arr){
// const result = arr.map(function(foo) { return foo.name })
// return result
return arr.map(foo => foo.name)
}
  
console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr){
    // let result = []
    // for(i = 0; i < arr.length; i ++) {
    //     if(arr[i].age < 18) {
    //         result.push(arr[i].name + "is under age!!")
    //     } else { result.push(arr[i].name + "can go to The Matrix")}
    // }
    // return result
    return arr.map(foo => foo.age < 18 ? foo.name + "is under age!!" : foo.name + "can go in the matrix")
}
  
console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

// Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(arr){
    return arr.map(index => `<h1>${index.name}</h1><h2>${index.age}</h2>`)
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]
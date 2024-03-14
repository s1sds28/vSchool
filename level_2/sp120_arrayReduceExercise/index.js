// Use the built-in .reduce() method on arrays to solve all of these problems

// Turn an array of numbers into a total of all the numbers
function total(arr) {
//     return arr.reduce(function(final, current){
//             final += current
//             return final
//         })
//  }
    return arr.reduce((final, current) => { final += current
        return final
    })
}
console.log(total([1,2,3])); // 6


// Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
//     return arr.reduce(function(final, current) {
//         final += String(current)
//         return final
//     })
//  }
    return arr.reduce((final, current) => { final += String(current)
        return final
    })
}
console.log(stringConcat([1,2,3])); // "123"


// Turn an array of voter objects into a count of how many people voted
function totalVotes(arr) {
    // return arr.reduce(function(final, current) {
    //     if(current.voted) { final++ }
    //         return final
    // },0)
    
    // Second way
    // let qtyVoted = 0;
    // arr.forEach(person => { if(person.voted) { qtyVoted++ } })
    // return qtyVoted

    return arr.reduce(((final, current) => current.voted ? final + 1 : final), 0);
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7

// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
function shoppingSpree(arr) {
//     return arr.reduce(function(final, current){
//         final += current.price
//         return final
//     },0)
    return arr.reduce(((final, current) => final += current.price), 0);
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
console.log(shoppingSpree(wishlist)); // 227005


// Given an array of arrays, flatten them into a single array
function flatten(arr) {
return arr.reduce((final, current) => { final.push(current)
    return final }, [])
}
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];


// Given an array of potential voters, return an object representing the results of the vote
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   return arr.reduce(function(final, current){
        if(current.age >= 18 && current.age < 26){
            final.numYoungPeople += 1;
            if(current.voted) {
                final.numYoungVoters +=1;
            }
        } else if(current.age > 25 && current.age < 36){
            final.numMidsPeople += 1;
            if(current.voted) {
                final.numMidVotesPeople += 1;
            }
        } else {
            final.numOldsPeople += 1;
            if(current.voted){
                final.numOldVotesPeople += 1;
            }
        }
        return final

   }, {
        numYoungVoters: 0,
        numYoungPeople: 0,
        numMidVotesPeople: 0,
        numMidsPeople: 0,
        numOldVotesPeople: 0,
        numOldsPeople: 0
    })
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/

// Last
const axios = require('axios');

axios.get('https://api.github.com/users/s1sds28/repos')
    .then(response => {
    // WIP
    // let repos = response.data
    // let watchers = repos.reduce(function(final, current){
    //     console.log(typeof current.watchers)
    //     final += current.watchers
    //     return final
    // }, 0)
    // console.log(`watchers: ${watchers}`)

    // Complete
    let totalWatchers = response.data.reduce((total, reop) => total += reop.watchers, 0)
    console.log(`watchers: ${totalWatchers}`)
    })

    .catch(error => {
    console.error('Request failed:', error.message);
    });

//Write a function called **`extractUniqueCharacters`** that takes an array of strings and returns a new array containing only the unique characters from all the strings.

function extractUniqueCharacters(strings) {

    var result = []
    for(let i = 0; i < strings.length; i++){
        for(let j = 0; j < strings[i].length; j++){
            result.push(strings[i][j])
        }
    }
    return result.filter((value, index, array) => array.indexOf(value) === index);
}

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']

// NOT MINE
// function extractUniqueCharacters(strings) {
//     let result = new Set();
//     for (let i = 0; i < strings.length; i++) {
//         for (let j = 0; j < strings[i].length; j++) {
//             result.add(strings[i][j]);
//         }
//     }
//     return Array.from(result);
// }
// const words = ['apple', 'banana', 'cherry'];
// const uniqueChars = extractUniqueCharacters(words);
// console.log(uniqueChars);

// function sortByProperty(objects, propertyName) {
//   const result = objects.sort((a,b) => {
//     return a[propertyName] - b[propertyName]
//   })
//   return result
// }

function sortByProperty(objects, propertyName) {
    return objects.sort((a,b) => {
        return a[propertyName] - b[propertyName]
    })
  }

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 28 },
];

const sortedByAge = sortByProperty(people, 'age');
console.log(sortedByAge);
/*
define result = []
Loop through the list of names
for each name --
 split each into 2 arrays split by a " "
    grab the first letter with array[0]
    push the two letters into result
*/

// function extractInitials(names) {
//     const result = []
//     for(let i = 0; i < names.length; i++){
//         const name = names[i]
//         newName = name.split(" ")
//         result.push(String(newName[0][0] + newName[1][0]))
//     }
//   return result
// };

// const fullNames = ['John Doe', 'Alice Johnson', 'Bob Smith'];
// const initialsArray = extractInitials(fullNames);
// console.log(initialsArray); // Output: ['JD', 'AJ', 'BS']

/*
define result = []
loop through array and push object where attribute key, value == object key, value
return result
*/

// function filterByProperty(objects, propertyName, propertyValue) {
//   const result = []
//   for(let i = 0; i < objects.length; i++){
//     if(objects[i][propertyName] == propertyValue){
//         result.push(objects[i])
//     }
//   }
//   return result 
// }

// const people = [
//   { name: 'Alice', age: 30, country: 'USA' },
//   { name: 'Bob', age: 25, country: 'Canada' },
//   { name: 'Charlie', age: 35, country: 'USA' },
//   { name: 'David', age: 28, country: 'Australia' },
// ];

// const filteredByCountry = filterByProperty(people, 'country', 'USA');
// console.log(filteredByCountry);

// use array method .filter .map ES6 

// Write a function called createTable(rows, columns) that takes two parameters: rows (number of rows) and columns (number of columns). The function should generate a table represented as an array of arrays, where each inner array represents a row and contains the row's data. Each cell in the table should contain the product of its row index and column index.

// Start with result 
// use a loop for the first parameter and create an array 
  // in a nested loop push the value for each cell value is going to come from the index of each array




function createTable(rows, columns) {
  const result = []
  for(let i = 0; i < rows; i++){
    const column = []
    for(let j = 0; j < columns; j++){
      column.push(j * i)
      
    }
  result.push(column)
  
  }

  return result
  }

// Test the function with different values
const table1 = createTable(3, 4);
console.log(table1);

/* Expected Outcome:
[
  [0, 0, 0, 0],
  [0, 1, 2, 3],
  [0, 2, 4, 6]
]
 */

const table2 = createTable(5, 5);
console.log(table2);
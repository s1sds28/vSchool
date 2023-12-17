/*
define result = []
Loop through the list of names
for each name --
 split each into 2 arrays split by a " "
    grab the first letter with array[0]
    push the two letters into result
*/

function extractInitials(names) {
    const result = []
    for(let i = 0; i < names.length; i++){
        const name = names[i]
        newName = name.split(" ")
        result.push(String(newName[0][0] + newName[1][0]))
    }
  return result
};

const fullNames = ['John Doe', 'Alice Johnson', 'Bob Smith'];
const initialsArray = extractInitials(fullNames);
console.log(initialsArray); // Output: ['JD', 'AJ', 'BS']

/*
define result = []
loop through array and push object where attribute key, value == object key, value
return result
*/

function filterByProperty(objects, propertyName, propertyValue) {
  const result = []
  for(let i = 0; i < objects.length; i++){
    if(objects[i][propertyName] == propertyValue){
        result.push(objects[i])
    }
  }
  return result 
}

const people = [
  { name: 'Alice', age: 30, country: 'USA' },
  { name: 'Bob', age: 25, country: 'Canada' },
  { name: 'Charlie', age: 35, country: 'USA' },
  { name: 'David', age: 28, country: 'Australia' },
];

const filteredByCountry = filterByProperty(people, 'country', 'USA');
console.log(filteredByCountry);
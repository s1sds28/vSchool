// Returns a list of everyone older than 18, which is
// Sorted alphabetically by last name, and where
// Each name and age is embedded in a string that looks like an HTML `<li>` element.


function sortedOfAge(arr){
    // Returns a list of everyone older than 18
    let adults = arr.filter(person => person.age > 18)
   
    // Sorted alphabetically by last name
    adults.sort((a, b) => a.lastName.localeCompare(b.lastName));

    // each name and age is embedded in a string that looks like an HTML <li> element
    return adults.map(person => `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`)
}   

var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

console.log(sortedOfAge(peopleArray));

/*
Output:
[
    "<li>Kyle Mooney is 27</li>",
    "<li>Sarah Palin is 47</li>",
    "<li>Rick Sanchez is 78</li>",
    "<li>Morty Smith is 29</li>",
    "<li>Lev Tolstoy is 82</li>"
]
*/

// Second Question 

// Create another array of one or more individuals and add it to the original array.
var secondQuestionPeople = [
    {
        firstName: "John",
        lastName: "Doe_a",
        age: 100
    },
    {
        firstName: "firstName",
        lastName: "lastName_y",
        age: 100
    },
    {
        firstName: "Johnny",
        lastName: "Moon",
        age: 5
    },
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
// Create a function that filters out all people who's last names end with "y" or "a" and save those people in another array
let lastNameEnds_y_OR_a = []
function lastNameFilter(arr) {
    // Assign the people with last names ending in y or a to the var lastNameEnds_y_OR_a
    lastNameEnds_y_OR_a = arr.filter(person => person.lastName.endsWith('y') || person.lastName.endsWith('a'));

    // Assing the people with last names not ending in y or a
    filteredNames = arr.filter(person => !(person.lastName.endsWith('y') || person.lastName.endsWith('a')));

    // Remove the second individual from the array.
    filteredNames.splice(1,1)

    // Return the array in reverse order
    return filteredNames.reverse()
}

// Console log the filtered array
console.log(lastNameFilter(secondQuestionPeople))

// Console log the array of people with last names ending in "y" or "a" 
// console.log(lastNameEnds_y_OR_a)
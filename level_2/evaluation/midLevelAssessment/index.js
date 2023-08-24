// Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
function sortNumbers(numbers) {
    return numbers.sort()
}
// const sortNumbers = numbers => numbers.sort()
// Example usage:
const numbers = [4, 2, 7, 1, 9, 5];
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers);  // Output: [1, 2, 4, 5, 7, 9]

// Write a function that takes an array of strings and returns a new array where each string is converted to uppercase.
function convertToUppercase(strings) {
    return strings.map(function(string) {
        return string.toUpperCase()
    })
}

// const convertToUppercase = strings => strings.map(string => string.toUpperCase())
// Example usage:
const strings = ['hello', 'world', 'javascript'];
const uppercaseStrings = convertToUppercase(strings);
console.log(uppercaseStrings);  // Output: ['HELLO', 'WORLD', 'JAVASCRIPT']
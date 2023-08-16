// Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters
function capitalizeAndLowercase(text){
    return text.toUpperCase() + text.toLowerCase()
}
// console.log(capitalizeAndLowercase("HelLo"))

// Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
function findMiddleIndex(text){
    return Math.floor(text.split("").length / 2)
}
// console.log(findMiddleIndex("Hello"))
// console.log(findMiddleIndex("Hello World"))

// Write a function that uses slice() and the other functions you've written to return the first half of the given string.
function returnFirstHalf(text){
    return text.slice(0, findMiddleIndex(text))
}
// console.log(returnFirstHalf("Hello"))
// console.log(returnFirstHalf("Hello World"))

// This function is a utility  for capitalizeAndLowercase function
function returnSecondHalf(text){
    return text.slice(findMiddleIndex(text))
}

// Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
function capitalizeAndLowercase(text){
    return returnFirstHalf(text).toUpperCase() + returnSecondHalf(text).toLowerCase()
}
// console.log(capitalizeAndLowercase("Hello"))
// console.log(capitalizeAndLowercase("Hello World"))

// Write a function that takes a string as a parameter and capitalizes any character that follows a space.
function capitalize(text){
    // Define variables
    text = text.split(" ")
    var result = []
    // Loop over text, push first letter capitalized and the reminder lower case
    for(let i = 0; i < text.length; i++){
        firstLetter = text[i].slice(0,1)
        remainder = text[i].slice(1)
        result.push(firstLetter.toUpperCase() + remainder)
    }
    return result.join(" ")
}
text = "hey friends! practice practice practice!"
console.log(capitalize(text))

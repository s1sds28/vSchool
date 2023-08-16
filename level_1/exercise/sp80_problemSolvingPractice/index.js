// Write a function that takes an array of numbers and returns the largest (without using Math.max())
function largest(arrLargest) {
    let largestnum = 0;
    for(let i = 0; i < arrLargest.length; i++){
        if(arrLargest[i] > largestnum) {
            largestnum = arrLargest[i]
        }
    } return largestnum
}
// test data
console.log(largest([6, 13, 250, 3]))
console.log(largest([3, 5, 2, 8, 1]))
console.log(largest([-13, 40, 3, 0, 19, 22]))

// Write a function that takes an array of words and a character and returns each word that has that character present.
function lettersWithStrings(arrWords, character) {
    arrContainsCharacter = []
    for(let i = 0; i < arrWords.length; i++){
        if(arrWords[i].includes(character)) {
            arrContainsCharacter.push(arrWords[i])
        }
    } return arrContainsCharacter
} 
// test data
console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!"))
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))
console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))

// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2
function isDivisible(num1, num2) {
    return num1 % num2 === 0 
}
// test data
console.log(isDivisible(4, 2)) // => true
console.log(isDivisible(9, 3)) // => true
console.log(isDivisible(15, 4)) // => false

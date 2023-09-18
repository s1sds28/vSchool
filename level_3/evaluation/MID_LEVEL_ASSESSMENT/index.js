/**
Challenge 1: Sort Array with Preserved Index for -1 Values
-All non -1 values in the array should be sorted in ascending order.
-The -1 values should retain their original index positions in the sorted array.
*/
//My understanding is... solution([100, -1, 50, -1, 75]) // => [50,-1,75, -1, 100]

function solution(arr){
    let result = []

    // Negative indexes
    const negIdx = []

    // Find negative indexes and push other numbers too result
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === -1) {
            negIdx.push(i)
        } else result.push(arr[i])
    }

    // Sort result
    result = result.sort((a, b) => a - b)

    // push -1 to the appropriate index 
    for(let i = 0; i < negIdx.length; i++ ) {
        result.splice((negIdx[i]), 0, -1)
    }
    return result
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
console.log(solution([5, 3, 1]))
console.log(solution([-1, -1, -1, -1]))
console.log(solution([100, -1, 50, -1, 75]))

/**
Challenge 2: Count Vowels

-Write a JavaScript function called **`countVowels`** that takes a string as input and counts the number of vowels (a, e, i, o, u) in the string. The function should return the count.
-Implement the **`countVowels`** function using either the provided example solutions or your own solution.
-reference: https://stackoverflow.com/questions/5488028/how-do-i-check-for-vowels-in-javascript
*/

// function countVowels(input) {
//     let count = 0
//     const letters = input.split("")
//     letters.forEach(element => {
//         if((/^[aeiou]$/i).test(element)) {
//             count +=1
//         }
//     });
//     return count 
// }

function countVowels(input) {
    let count = 0
    input.split("").forEach(letter => { if((/^[aeiou]$/i).test(letter)) count += 1 });
    return count 
}

// const countVowels = input =>  input.split("").reduce((final, letter) => { if((/^[aeiou]$/i).test(letter)) final++ 
//         return final }, 0)

const test1 = 'Hello, World!';
const test2 = 'Counting Vowels';

console.log(countVowels(test1)); // Output: 3
console.log(countVowels(test2)); // Output: 5
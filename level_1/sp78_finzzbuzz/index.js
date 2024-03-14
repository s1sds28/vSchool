/**
 * write a loop for numbers 1 to 100
 * if number divisible by 3 and 5 log FizzBuzz
 * else if divisible by 3 log Fizz
 * else if divisible by 5 log Buzz
 * else log number
 */
// define variable for optional part
let optional = {
    fizzbuzz: 0,
    fizz: 0, 
    buzz: 0
}

/**
 * For each multiple of 3 returns "Fizz"
 * For each multiple of 5 returns "Buzz"
 * For numbers which are multiples of both 3 and 5 returns "FizzBuzz"
 * Add 1 to optional object for optional part
 */
const FizzBuzz = i => {
    const moduloThree = i % 3
    const moduloFive = i % 5
    if(moduloThree === 0 && moduloFive === 0) {
        optional.fizzbuzz += 1
        return "FizzBuzz"
    } else if (moduloThree === 0) {
        optional.fizz += 1
        return "Fizz"
    } else if (moduloFive === 0) {
        optional.buzz += 1
        return "Buzz"
    } else return i

}

// For numbers 1 through 100 prints "Fizz", "Buzz", "FizzBuzz", or Number
for(let i = 1; i < 101; i++) {
    console.log(FizzBuzz(i))
} 

// log the optional part
console.log(optional)

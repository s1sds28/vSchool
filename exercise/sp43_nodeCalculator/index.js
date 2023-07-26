const readline = require("readline-sync");

// Store the required variables
const num1 = Number(readline.question("Please enter your first number "));
const num2 = Number(readline.question("Please enter your second number "));
const operation = readline.question("Please enter the operation to perform: add, sub, mul, div ");
const answer = "The result is: "

// if -> else if -> else to determine what function to call
if (operation === "add") {
    console.log(add(num1,num2))
} else if (operation === "sub") {
    console.log(sub(num1,num2))
} else if (operation === "mul") {
    console.log(mul(num1,num2))
} else if (operation === "div") {
    console.log(div(num1,num2))
} else {
    console.log(notValid())
}

// Define all functions
function add(num1, num2){
    return answer + (num1 + num2)
}

function sub(num1, num2){
    return answer + (num1 - num2)
}

function mul(num1,num2){
    return answer + (num1 * num2)
}

function div(num1,num2){
    return answer + (num1 / num2)
}

function notValid() {
    return "Invalid inputs, please try again"
}

// To test functions comment everything else except var answer
// console.log(add(0,1))
// console.log(sub(3,1))
// console.log(mul(3,1))
// console.log(div(4,1))
// console.log(notValid())
// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:
console.log("\nquestion 1a)\n")
const sum = (x, y) => {
    try {
        if(((typeof x) !== "number") || (typeof y !== "number")){
            throw "Returns false if either argument is not of the data type number"
        } else return x + y  
    }
    catch(err) {
        console.log(err)
        return false
    }
}

// all numbers
console.log(`${sum(1, 2)}`)
// not all numbers
console.log(sum("1",2))
console.log(sum(2, "2"))
console.log(sum("1", "2"))

// 1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.
console.log("\nquestion 1b\n")
try {
    let sumCheck = sum("1", "2")
    if(sumCheck === false) throw 'Error becuase the stings "1" and "2" are not numbers'
}
catch(err) {
    console.log(err)
}

// 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"
console.log("\nquestion 2a\n")
var user = {username: "sam", password: "123abc"};
function login(username, password){
    const loginAttempt = (username === user.username) && (password === user.password) ? true : false;
    try {
        if(!loginAttempt) {
            throw "Error check credentials"
    }   else console.log("login successful!")
    }
    catch(err) {
        console.log(err)
    }
    return loginAttempt
}
// Correct Login
console.log(login("sam", "123abc"))
// Incorrect Login
console.log(login("notsam", "456def"))

// 2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!
console.log("\nquestion 2b\n")
const correctCredentials = login("sam", "123abc")
const incorrectCredentials = login("notsam", "456def")
try {
    if(correctCredentials) {
        console.log("No error")
    } else throw "Big Error"
}
catch(err) {
    console.log(err)
}

try {
    if(incorrectCredentials) {
        console.log("No error")
    } else throw "Big Error"
}
catch(err) {
    console.log(err)
}

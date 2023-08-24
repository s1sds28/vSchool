//a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

const sum = (x, y) => {
    try {
        if(((typeof x) !== "number") || (typeof y !== "number")){
            throw "x or y is not a number"
        } else return x + y;
    }
    catch(err) {
        console.log(err)
        return "broken"
    }
}
// all numbers
console.log(`${sum(1, 2)}`)
// not all numbers
console.log(sum("1",2))
console.log(sum(2, "2"))
console.log(sum("1", "2"))



console.log("\nProblem 2")
// Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"
var user = {username: "sam", password: "123abc"};
const login = (username, password) => (username === user.username) && (password === user.password) ? true : false;

const login1 = login("sam", "123abc")
const login2 = login("notsam", "123abc")


try {
    if(login1){
        console.log("login successful!")
    } else throw "Check Credentials!"
}
catch(err) {
    console.log(err)
}

try {
    if(login2){
        console.log("login successful!")
    } else throw "Check Credentials!"
}
catch(err) {
    console.log(err)
}

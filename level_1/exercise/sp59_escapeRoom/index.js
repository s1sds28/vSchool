const readline = require("readline-sync");

// Ask player to press "y" to play 
let playGame = readline.question("Do you want to play the Escape Room Game? [y/n] ");

// If player types "y" playGame assigned to true and we will play the game
if(playGame==='y'){
} else playGame = false;

// Variable for game
let hasKey = false;

// Determine if we want to play the Escape Room Game
if(playGame){
    // Display the rules
    displayRules()

    // While playing, pick 1, 2, or 3 for a valid choice or stay in the loop
    while(playGame){
        // Assign playerChoice based on input
        let playerChoice = readline.question("What's your choice? [1, 2, 3] ")

        // Call a function based on the playerChoice OR stay in the loop
        if(playerChoice==="1"){
            choice1()
        } else if(playerChoice==="2") {
            choice2()
        } else if(playerChoice==="3") {
            choice3()
            break
        }
    }
};

// End Game
console.log("Bye!")

// Utility functions below
function displayRules() {
    console.log("You have 3 options: ")
    console.log("1 Find a key")
    console.log("2 Open the door")
    console.log("3 Put your hand in the hole")
};

function choice1() {
    console.log("You have a key")
    hasKey = true;
};

function choice2() {
    if(hasKey){
        console.log("Congratulations, You're out!")
        playGame = false;
    } else {
        console.log("The door is locked!")
    }
};

function choice3() {
    console.log("You died!")
};
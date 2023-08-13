const readline = require("readline-sync");
const playerName = readline.question("Hello! What is your name?")
console.log(`Welcome ${playerName} to the RPG game!!!`)

// Set up Character 
class Character{
    constructor(name, healthPoints, attackPoints, inventory) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.attackPoints = attackPoints;
        this.inventory = inventory;
    }
    playerInventory() {
        console.log(`Invenory: ${this.inventory}`)
    }
    
}

// Define global variable for player's inventory
let playerInventory = ["hands"]

// Create the RPG games Characters
const hero = new Character(playerName, 100, 25, playerInventory)
const enemy1 = new Character("Batman", 50, 25, ["bat"])
const enemy2 = new Character("Edward Scissorhands", 50, 25, ["Scissors"])
const enemy3 = new Character("Billy the Kid", 50, 25, ["Gun"])

// Array of enemies
let arrEnemies = [enemy1, enemy2, enemy3]

// Display the rules
console.log("You have to press \"w\" to walk or die")

//TODO: put this in another loop to store the time to win and ask to play again

// Enter the loop to play the game 
let alive = true;
while(alive){
    // Player must press w to walk if not die
    let isWalking = readline.question("press \"w\" to walk: ")
    if(isWalking !== "w") {
        alive = false;
        break
    }
    // One in three chance to get attacked
    if(chanceOneIn(3)) {
        console.log("changeOneIn(3)")
        // Get attacked by a random enemy
        const randomEnemy = getAttacked()
        // Choose run or attack if not die
        const runOrAttack = pickRunOrAttack()
        console.log(`Your choice is ${runOrAttack}!!`)


        // if player runs 50% chance of winning or get in fight loop

        // player attacks enter fight loop 



    }
}

console.log("You died!")

//example: chanceOneIn(4) returns true 25% of the time
function chanceOneIn(outOfNumber){
    return Math.floor(Math.random() * outOfNumber) === 0;
}
// returns an attacker at random at tells you who it is
function getAttacked() {
    const attacker = arrEnemies[(Math.floor(Math.random() * arrEnemies.length))]
    console.log(`Your getting attacked by ${attacker.name}`)
    return attacker
}

function pickRunOrAttack() {
    const choiceRunOrAttack = readline.question("You must pick: To \"r\" for Run or \"a\" for Attack- Choose[r/a]")
    if(choiceRunOrAttack === "r") {
        return "run"
    } else if(choiceRunOrAttack === "a") {
        return "attack"
    } else {
        alive = false;
        return "The Wrong Answer!"
    }
}
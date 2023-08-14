// RPG 1. Story point 82
const readline = require("readline-sync");

// Console must ask for the player's name and store it 
const playerName = readline.question("Hello! What is your name?");

// Console must greet player with a fun message
console.log(`Welcome ${playerName} to the RPG game!!!\n`)

// Set up Character 
class Character{
    constructor(name, healthPoints, attackPoints, inventory) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.attackPoints = attackPoints;
        this.inventory = inventory;
    }
    playerInventory() {
        console.log(`Inventory: ${this.inventory}`)
    }
    
}

// Define global variable for player's inventory
let playerInventory = ["hands"]

// Create the RPG game Characters
const hero = new Character(playerName, 100, 25, playerInventory)
const enemy1 = new Character("Batman", 100, 25, ["bat"])
const enemy2 = new Character("Edward Scissorhands", 100, 25, ["Scissors"])
const enemy3 = new Character("Top Gun", 100, 25, ["Gun"])

// Array of enemies
let arrEnemies = [enemy1, enemy2, enemy3];
// Game variables
let enemy = NaN;
let alive = true;
let playAgainQuestion = true;

// Display the rules
console.log("You have to press \"w\" to walk and answer the questions correctly OR YOU DIE...Press \"p\" to print the player's name, HP, and inventory items ")

//print the players name, HP, and each item in their inventory
//TODO: put this in another loop to store the time to win and ask to play again
while(playAgainQuestion) {
    // Use a while loop to control this flow (of walking and fighting)
    while(alive){
        // Player must press w to walk if not die
        let isWalking = readline.question("press \"w\" to walk: \n")
        if(isWalking !== "w" && isWalking !== "p") {
            alive = false;
            break
        }

        if(isWalking == "p") {
            console.log(`Name: ${playerName}\nHP: ${hero.healthPoints}\nInventory: ${playerInventory}\n`)
            continue;
        }

        // One in three chance to get attacked
        if(chanceOneIn(3)) {
            // If a wild enemy appears 
            console.log("A wild enemy appears!!")

            // The enemy is random (can be chosen out of a minimum of 3 different enemy names)
            enemy = randomAttacker()

            // The user can decide to attack or run
            const runOrAttack = pickRunOrAttack()

            // After the player attacks or runs the enemy attacks back for a random damage amount -> Need to apply the damage now, before hero escapes
            randomDamageAmountToHero(5, 25)

            // If attacking, a random amount of damage will be dealt between a min and max
            if(runOrAttack === "attack") {
                console.log(`${hero.name} and ${enemy.name} are going to fight!`)
                randomDamageAmountToEnemy(50, 100)
            }   else if(runOrAttack === "run") {
                    if(chanceOneIn(2) === true) {
                        console.log("The Hero got caught!")
                    } else {
                        console.log(`You escaped, but ${enemy.name} is still out there! and you got hit on the way out! The hero has ${hero.healthPoints} health points`)
                        // Continue the loop walking
                        continue
                    }
                }
            // else catch all: player dies
            else {
                break;
            }

            // The player and enemy will attack each other in a loop until one of them passes out or dies.
            displayHealth()
            let winOrLose = fightLoop()
        }

        if(hero.healthPoints <= 0){
            break;
        }

        // Game play + health points for walking
        console.log("You found some healthPoints")
        hero.healthPoints += 10

        // Winner when Hero kills all enemies:
        if(arrEnemies <= 0) {
            const arsenal = playerInventory.join(", ")
            console.log("You're the Boss and have all the weapons." + `\nYour arsenal includes ${arsenal}!`)
            break;
        }
        

    } 
    console.log("Game Over")

    let playAgain = readline.question("Press \"y\" to play again")
    if(playAgain === "y"){
        alive = true;
        arrEnemies = [enemy1, enemy2, enemy3];

    } else {
        playAgainQuestion = false;
        break
    }

}
//example: chanceOneIn(4) returns true 25% of the time
function chanceOneIn(outOfNumber){
    return Math.floor(Math.random() * outOfNumber) === 0;
}
// returns an attacker at random at tells you who it is
function randomAttacker() {
    const attacker = arrEnemies[(Math.floor(Math.random() * arrEnemies.length))]
    console.log(`Your getting attacked by ${attacker.name}`)
    return attacker
}

function pickRunOrAttack() {
    const choiceRunOrAttack = readline.question("You must pick \"r\" to Run OR \"a\" to Attack. Choose Now [r/a]: ")
    if(choiceRunOrAttack === "r") {
        console.log("The Hero is going to run!")
        return "run"
    } else if(choiceRunOrAttack === "a") {
        console.log("The Hero is going to attack!")
        return "attack"
    } else {
        return false;
    }
}

function displayHealth() { 
    console.log("HEALTH STATUS")
    console.log(`Enemy health: ${enemy.healthPoints}\n` + `Hero health: ${hero.healthPoints}`)
}

function randomDamageAmountToHero(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    let damageAmount = Math.floor(Math.random() * (max - min) + min);

    hero.healthPoints -= damageAmount
    console.log("The Hero got hit!")
}

function randomDamageAmountToEnemy(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    let damageAmount = Math.floor(Math.random() * (max - min) + min);

    enemy.healthPoints -= damageAmount
    console.log("The Enemy got hit!")
}

function fightLoop() {
    // who is hero && who is enemy
    console.log(`${hero.name} VS. ${enemy.name}`)
    let fighting = true;
    // make a loop of random damage unill health of one player less than 0
    while(fighting) {
        console.log("Press enter to FIGHT")
        // Press enter for fight
        readline.prompt()

        // Determine who gets hit and decrease their health at random
        if(chanceOneIn(2) === true){
            console.log("The Hero lands a hit")
            randomDamageAmountToEnemy(10, 25)
        } else {
            console.log("The Enemy lands a hit")
            randomDamageAmountToHero(10, 25)
        }
        // Display health
        displayHealth()

        // Break loop if either healthPoints < 0
        if(hero.healthPoints <= 0 || enemy.healthPoints <= 0) {
            fighting = false;
        }
    }

    console.log("OUT OF FIGHT LOOP")
    // If the player kills the enemy you can give the Player some HP and special item that is stored in the inventory. After this, the player will continue walking. 
    if(hero.healthPoints >= enemy.healthPoints) {
        hero.inventory.push(enemy.inventory[0])
        hero.healthPoints += 100
        // Remove dead enemy from arrEnemies array
        // arrEnemies.splice(arrEnemies.findIndex(item => item.field === enemy.name), 1)
        // arrEnemies.shift(arrEnemies.findIndex(Character => Character.name === enemy.name))
        let indexArrEnemy = arrEnemies.findIndex(obj => obj.name === enemy.name)
        arrEnemies.splice(indexArrEnemy, 1)
        console.log(`The Hero Wins! and took ${enemy.name}'s ${enemy.inventory}`)

        return true;
    }   else return false;
}
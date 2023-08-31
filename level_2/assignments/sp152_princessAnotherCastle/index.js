const readlineSync = require('readline-sync')

// What a player is
class Player{
    constructor(name, totalCoins, status, hasStar){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }
    // What a player can do
    setName(name){
        if(name === "Mario" || name === "Luigi"){
            this.name = name
        }   else {
            this.name = "Mario";
        }
    }  
    gotHit(){
        this.status -=1;
    }
    gotPowerup(){
        this.status +=1;
        if(this.status > 3){
            this.hasStar = true;
        }
    }
    addCoin(){
        this.totalCoins += 1;
    }
    print(){
        console.log(`Name: ${this.name}\nStatus: ${this.getStatus()}\nTotal Coins: ${this.totalCoins}\nHas Star: ${this.hasStar}\n\n\n`)
    }
    getStatus(){
        // Catch edge cases
        if(this.status <= 0){
            this.status = 0;
        } else if(this.status >=3){
            this.status = 3;
        }
        const valueMap = {
            0: "Dead",
            1: "Small",
            2: "Big",
            3: "Powered Up",
        };
        return valueMap[this.status] || "Unknown Mapping";
    }
}

// Ask player to pick a character defaults to Mario
const name = readlineSync.question("Player's Name: ")

// Create the player
const player = new Player("player", 0, 3, false)

// Set the player's name ... defaults to Mario
player.setName(name)


// The game function to be called on an interval
const playGame = () => {
    // Pick a random number to call a function
    const randomNum = Math.floor(Math.random() * 3);
    const valueMap = {
        0: "gotHit",
        1: "gotPowerup",
        2: "addCoin"
    }
    // Call a function based on a random number
    const action = valueMap[randomNum]
    
    player[action]();
    // Print the player's status
    player.print()
    if(player.status <= 0){
        console.log("You Died")
        clearInterval(intervalId)
        process.exit()
    } else if(player.totalCoins > 10){
        console.log(`You win!`)
        process.exit()
    }
}

  
const intervalId = setInterval(playGame, 1000); // Execute myFunction every 1000 milliseconds (1 second)

// To clear the interval after a certain time
// setTimeout(() => {
// clearInterval(intervalId); // Clear the interval using the interval ID
// }, 10000); // Clear the interval after 10 seconds

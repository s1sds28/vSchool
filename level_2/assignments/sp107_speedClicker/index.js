
const startDisplay = document.getElementById("displayOnStart").textContent

const display = document.getElementById("time-display")
const start = document.getElementById('start')
const clicker = document.getElementById("clicker")
const clearAll = document.getElementById("clearAll")

//Session Storage 
const sessionClickerText = document.getElementById("sessionClickerText")
sessionStorage.setItem("sessionStorage", JSON.stringify([]))
sessionClickerText.textContent = `Session Clicks: ${sessionStorage.getItem("sessionStorage")}`

//Local Storage
const localClickerText = document.getElementById("localClickerText")
// localStorage.setItem("localStorage", JSON.stringify([]))
localClickerText.textContent = `Local Clicks: ${localStorage.getItem("localStorage")}`

let numClicks = 0;
let seconds = 5;

start.addEventListener('click', () => {
    // clear Interval after 5 sec and start timer 
    function timeUp(){
        clearInterval(intervalID)
        display.textContent = `You go ${numClicks} Clicks!`
        seconds = 5;

        // Save and display local storage
        SaveDataToLocalStorage(numClicks)
        let arrLocalStorage = localStorage.getItem('localStorage')
        localClickerText.textContent = `Local Clicks: ${arrLocalStorage}`

        // Save and display session storage
        SaveDataToSessionStorage(numClicks)
        let arrSessionStorage = sessionStorage.getItem('sessionStorage')
        sessionClickerText.textContent = `Session Clicks: ${arrSessionStorage}`
    }
    
    // Set time interval
    var intervalID = setInterval(startTimer, 1000);
    setTimeout(timeUp,  6000)

    // Reset numClicks
    numClicks = 0;

});

clicker.addEventListener("click", function() {
    numClicks += 1
});

clearAll.addEventListener("click", function() {
    // Local Storage 
    localStorage.setItem("localStorage", JSON.stringify([]))
    // Session Storage
    sessionStorage.setItem("sessionStorage", JSON.stringify([]))
    location.reload()
});

function startTimer() {
    let s = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = ` ${s}`;
    seconds -= 1;
}

function SaveDataToLocalStorage(data) {
    // Parse the serialized data back into an aray of objects
    var a = JSON.parse(localStorage.getItem('localStorage')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(data);
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('localStorage', JSON.stringify(a));
}

function SaveDataToSessionStorage(data) {
    var b = JSON.parse(sessionStorage.getItem('sessionStorage')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    b.push(data);
    // Re-serialize the array back into a string and store it in localStorage
    sessionStorage.setItem('sessionStorage', JSON.stringify(b));
}
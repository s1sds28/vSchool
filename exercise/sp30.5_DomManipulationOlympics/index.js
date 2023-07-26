// Add header text and headerclass
let headerText = "JavaScript Make This!!"
document.getElementById("header").textContent = headerText
document.getElementById("header").classList.add("header");

// Add headerName and style the "name" and text
var headerName = document.createElement("header");
headerName.innerHTML += "<p><span class='name'>Steven</span> wrote the JavaScript</p>"
headerName.id = "headerName"
headerName.style.fontSize = "small"
document.getElementById("header").appendChild(headerName);

// Change the messages on left
var messagesLeft = document.getElementsByClassName("message left");
messagesLeft[0].textContent = "What did the computer say to the spider?"
messagesLeft[1].textContent = "Show me the web!"

// Change the messages on right
var messagesRight = document.getElementsByClassName("message right");
messagesRight[0].textContent = "I don't know, what?"
messagesRight[1].textContent = "lol, They'll have fun crawling together :)"

// Delete messages
var clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function(){
    while (messagesLeft.length > 0 ){
        messagesLeft[0].parentNode.removeChild(messagesLeft[0])
    };
    while (messagesRight.length > 0 ){
        messagesRight[0].parentNode.removeChild(messagesRight[0])
    };
});

// Change Theme based on dropdown
var themeDropDown = document.getElementById("theme-drop-down")

var messagesRight = document.getElementsByClassName("message right")
var messagesLeft = document.getElementsByClassName("message left")

var messagesRightRed = document.getElementsByClassName("message rightRed")
var messagesLeftBlack = document.getElementsByClassName("message leftBlack")

themeDropDown.addEventListener("change", function(){
    if (themeDropDown.value === "theme-two"){
        for(i = 0; messagesRight.length > 0; i++){
            messagesRight[0].classList = "message rightRed"
        };
        for(i = 0; messagesLeft.length > 0; i++){
            messagesLeft[0].classList = "message leftBlack"
        };
        console.log("complete-two")
    };
    if (themeDropDown.value === "theme-one") {
        for(i = 0; messagesRightRed.length > 0; i++){
            messagesRightRed[0].classList = "message right"
        };
        for(i = 0; messagesLeftBlack.length > 0; i++){
            messagesLeftBlack[0].classList = "message left"
        };
        console.log("complete-one")
    };
});


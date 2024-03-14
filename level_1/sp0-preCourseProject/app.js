//basic function
function myFunction() {
    var THE_TIME = "GO TIME!"
    alert(THE_TIME);
}

//Array 
const buttonBackground = document.getElementById("idBackgroundButton");
buttonBackground.addEventListener("click", function() {
    
    const myColorArray = ["red", "white", "blue", "black"];
    const lenthMyColorArray = myColorArray.length;
    //var randomColor = myColorArray[Math.floor(Math.random() * lenthMyColorArray)];
    let randomColor = myColorArray[Math.random() * myColorArray.length | 0];
    
    document.body.style.backgroundColor = randomColor
})

// Conditional statement
var count = 0;
var isIncreasing = true;
idCounter.addEventListener("click", function() {

    if(isIncreasing && count < 10){
        count++
    } else if(count >= 10){
        isIncreasing = false;
    }
    if(isIncreasing === false && count > 0){
        count--
    } else if(count <=0){
        isIncreasing = true
    }

    document.getElementById("idCounterDisplay").innerText = count;
})

//Log an arry using a for loop
idArray.addEventListener("click", function(){
    const arrayElements = ["first", "second", "third"];
    for (const element of arrayElements){
        console.log({element});
    }
    const text = "Array bracket notation " + arrayElements[0]
    console.log(text)
})

//Log an object using bracket and dot notation 
idObject.addEventListener("click", function(){
    const lunchBoxObject = {
        name: 'bob',
        qty_drinks: 2,
        cold: true,
        slimjim_flavors: ["original", "teriyki"],
        sandwich_contents: {
            bread: "white",
            meat: "ham",
            cheese: "American"
        } 
    }
    console.log(lunchBoxObject)
    console.log(lunchBoxObject.sandwich_contents.cheese)
    console.log(lunchBoxObject["slimjim_flavors"][0])
})





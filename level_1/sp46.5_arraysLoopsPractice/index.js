//Loop through the following array and count how many "computers" there are. Log the final count:

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var numComputer = 0
for(let i = 0; i < officeItems.length; i++){
    if(officeItems[i] === "computer"){
        numComputer += 1
    }
}
console.log(numComputer)

//Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

function findPronoun(item){
    if(item.gender === "male"){return "HIM"} else {return "HER"}
}

for(let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age > 17){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ": is old enough to see Mad Max let " + String(findPronoun(peopleWhoWantToSeeMadMaxFuryRoad[i])) + " in" )
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ": is NOT old enough to see Mad Max DO NOT let " + String(findPronoun(peopleWhoWantToSeeMadMaxFuryRoad[i])) + " in")
    }
}

var nums1 = [2, 5, 435, 4, 3] // "The light is on"
var nums2 = [1, 1, 1, 1, 3]   // "The light is on"
var nums3 = [9, 3, 4, 2]      // "The light is off"

function isLightOn(aList){
    var sumAList = 0
    for(let i = 0; i < aList.length; i++){
        sumAList += aList[i]
    }
    if(sumAList % 2 === 0){
        return "light off"
    } else {
        return "light on"
    }
}
console.log(isLightOn(nums1))
console.log(isLightOn(nums2))
console.log(isLightOn(nums3))

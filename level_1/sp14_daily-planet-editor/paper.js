/* # daily-planet-editor

This is the file associated with the Daily Planet Editor project, which can be found at [coursework.vschool.io/daily-planet-editor/](http://coursework.vschool.io/daily-planet-editor/)
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.

Written by Kent, Clark */

const enemies = ["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"];

function Who_Wins(isKryptonite, enemyName){
    if (!isKryptonite) {
        return "Superman beats " + enemyName + ", of course";
    } else {
        return "Depends on how quick Superman can get rid of the Kryptonite. "+ enemyName +" could possibly win this one.";}
    }

    for (var i=0; i < enemies.length; i++) {
        if ( i%2 === 0) {
            isKryptonite = true;
        } else {
            isKryptonite = false;
        }
        console.log(Who_Wins(isKryptonite, enemies[i]));
        }


    function HowAttractedIsLoisLaneToMe (){
    /* 1 is not at all attracted, 10 is "super" attracted...*/
        return Math.floor((Math.random()*10)+1);
    }

console.log("1 is not at all attracted, 10 is \"super\" attracted...", HowAttractedIsLoisLaneToMe()) ;

var clarkKent =true;
var superman =false;

while (clarkKent){
    console.log("I'm just a nerdy columnist");

    var phoneBoothQuickChange =Math.random();
    if (phoneBoothQuickChange>= 0.5) {
        clarkKent=false;
        superman=true;
        console.log("Now I'm Superman!");}}

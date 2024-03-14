// const form = document.getElementById("form")
const form = document.form
const goombas = form.goombas
const bobomb = form.bobomb
const cheepCheep = form.cheepCheep
const submit = form.submit
const resetbtn = document.getElementById("reset")

const submitbtn = document.getElementById("submit")

console.log(form)
//Total
const coinsElement = document.getElementById("totalCoins")

// document.addEventListener("DOMContentLoaded", function(){
//     const form = document.getElementById("form")
// })
//Submit buttons finds total coins and adds it to coins element
form.addEventListener("submit", function(event) {
    event.preventDefault()
    const coinsNumber = Number(goombas.value) * 5 + Number(bobomb.value) * 7 + Number(cheepCheep.value) * 11
    coinsElement.textContent = coinsNumber
});

// Reset button resets all baddies and inputs
resetbtn.addEventListener("click", function(event) {
    event.preventDefault()
    coinsElement.textContent = "";
    goombas.value = "";
    bobomb.value = "";
    cheepCheep.value ="";
});
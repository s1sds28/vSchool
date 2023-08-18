const form = document.form
const goombas = form.goombas
const bobomb = form.bobomb
const cheepCheep = form.cheepCheep
const submit = form.submit
const resetbtn = document.getElementById("reset")

//Total
const coinsElement = document.getElementById("totalCoins")

//Submit buttons finds total coins and adds it to coins element
submit.addEventListener("click", function(event) {
    event.preventDefault()
    const coinsNumber = Number(goombas.value) * 5 + Number(bobomb.value) * 7 + Number(cheepCheep.value) * 11
    coinsElement.textContent = String(coinsNumber)
});

//Reset button resets all baddies and inputs
resetbtn.addEventListener("click", function(event) {
    event.preventDefault()
    coinsElement.textContent = "";
    goombas.value = "";
    bobomb.value = "";
    cheepCheep.value ="";
});
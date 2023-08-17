const form = document.form

const goombas = form.goombas
const bobomb = form.bobomb
const cheepCheep = form.cheepCheep
const submit = form.submit
const coinsElement = document.getElementById("totalCoins")

submit.addEventListener("click", function(event) {
    event.preventDefault()
    const coinsNumber = Number(goombas.value) * 5 + Number(bobomb.value) * 7 + Number(cheepCheep.value) * 11
    coinsElement.textContent = String(coinsNumber)
});


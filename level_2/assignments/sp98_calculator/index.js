const form = document.calculatorForm

const addbtn = document.getElementById("addbtn")
const subbtn = document.getElementById("subbtn")
const mulbtn = document.getElementById("mulbtn")

const result = document.getElementById("result")

addbtn.addEventListener("click", function(event) {
    event.preventDefault()
    const answer = Number(form.inputAdd1.value) + Number(form.inputAdd2.value)
    result.textContent = `result: ${answer}`
});

subbtn.addEventListener("click", function(event) {
    event.preventDefault()
    const answer = Number(form.inputSub1.value) - Number(form.inputSub2.value)
    result.textContent = `result: ${answer}`
});

mulbtn.addEventListener("click", function(event) {
    event.preventDefault()
    const answer = Number(form.inputMul1.value) * Number(form.inputMul2.value)
    result.textContent = `result: ${answer}`
});


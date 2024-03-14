const button = document.getElementById("button")



const xhr = new XMLHttpRequest()

button.addEventListener("click", () => {

    xhr.open("GET", "https://api.vschool.io/pokemon", true)
    xhr.send()
    // xhr.onreadystatechange = () => {
    //     if(xhr.readyState === 4 && xhr.status === 200){
    //         const JSONdata = xhr.responseText
    //         const data = JSON.parse(JSONdata)
    //         const arrPokemon = data.objects[0].pokemon
    //         arrPokemon.map((pokemon) => {
    //             const h1 = document.createElement("h1")
    //             h1.textContent = pokemon.name
    //             document.body.appendChild(h1)
    //         })
    //     } 
    // }
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200){
            JSON.parse(xhr.responseText).objects[0].pokemon.map((pokemon) => {
                const h1 = document.createElement("h1")
                h1.textContent = pokemon.name
                document.body.appendChild(h1)
            })
        } 
    }
})

function getData(){
    axios.get("https://api.vschool.io/pokemon")
        .then(res => console.log(res.data.objects[0].pokemon))
        .catch(err => console.log(err))
}

getData()

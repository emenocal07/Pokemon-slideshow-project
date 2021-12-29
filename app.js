let count = 12

function render(){
    let pokemonContainer = document.getElementById('pokemon')
pokemonContainer.innerHTML = `<img class="poke" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${count}.svg">`
}

let prev = document.getElementById('prev')
let next = document.getElementById('next')

prev.onclick = function(){
    if (count > 1) {
        count = count -1
        render()
    }
    
}
next.onclick = function(){
    if (count < 650) {
        count = count +1
        render()
    }
    
}

render()
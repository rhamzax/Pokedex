const mainGrid = document.querySelector('main');


function createEntry(){
    const gridEntry = document.createElement('div');
    gridEntry.className = 'entry';
    gridEntry.innerHTML = 
    `
    <div class="top">
        <div class="left">
            <h2 class="pokeID">1</h2>
            <h3 class="pokeName">Charmander</h3>
        </div>
        <div class="right">
            <h3 class="https://pokeapi.co/api/v2/type/13/"></h3>
        </div>
    </div>
    <div class="pokeImg">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" alt="Pokemon" class="pokeImg">
    </div>
    `
    mainGrid.appendChild(gridEntry);
}


function createPokedex(){
    for(let i = 0; i < 900; i++){
        createEntry();
    }
    
}

function ApiRequest(randomPokemon){
    let urlGen = `https://pokeapi.co/api/v2/pokemon/${randomPokemon}`
    const pokeimg = document.querySelector(".main-img")
    
    fetch(urlGen)
      .then(response => {
        // indicates whether the response is successful (status code 200-299) or not
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        pokeName = data.species.name
        pokeName = pokeName.replace("-", " ")
        errorBox.textContent = ""
        // document.querySelector(".name").textContent = data.name
        document.querySelector(".main-img").src = data.sprites.front_default
      })
      .catch(error => console.log(error))
}
createPokedex();
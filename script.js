const mainGrid = document.querySelector('main');

function createEntry(index, pokeName){
    const gridEntry = document.createElement('div');
    gridEntry.addEventListener('click', showInfo)
    gridEntry.className = 'entry';
    gridEntry.innerHTML = 
    `
    <div class="top">
        <div class="left">
            <h2 class="pokeID">${index}</h2>
            <h3 class="pokeName">${pokeName}</h3>
        </div>
        <div class="right">
            <h3 class="https://pokeapi.co/api/v2/type/13/"></h3>
        </div>
    </div>
    <div class="pokeImg">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png" alt="Pokemon" class="pokeImg">
    </div>
    
    `
    mainGrid.appendChild(gridEntry);
}

function showInfo(){
    console.log("1")
    
}
function createPokedex(){
    for(let i = 1; i < 20; i++){
        ApiRequest(i).then(pokeName => (createEntry(i, pokeName)))
    }
    
}

// function ApiRequest(pokeIndex){
//     let urlGen = `https://pokeapi.co/api/v2/pokemon/${pokeIndex}`

//     fetch(urlGen)
//       .then(response => {
//         // indicates whether the response is successful (status code 200-299) or not
//         if (!response.ok) {
//           throw new Error(`Request failed with status ${response.status}`)
//         }
//         return response.json()
//       })
//       .then(data => {
//         let pokeName = ""
//         pokeName = data.species.name;
//         // pokeName = pokeName.replace("-", " ");
//         createEntry(pokeIndex, pokeName)
//       })
//       .catch(error => console.log(error))
// }

async function ApiRequest(pokeIndex) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeIndex}`, {});
    const json = await response.json();
    let pokeName = json.species.name
    return pokeName
}

createPokedex();
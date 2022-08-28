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

function createTop(){

}

function createImg(){

}
function createPokedex(){
    for(let i = 0; i < 900; i++){
        createEntry();
    }
    
}
createPokedex();
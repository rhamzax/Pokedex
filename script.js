const mainGrid = document.querySelector('main');
const modal = document.querySelector(".pokeModal");
const btn = document.querySelector(".btn");
const span = document.querySelector(".close");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
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
let pokedex = []
async function createPokedex(){
    for(let i = 1; i < 899; i++){
      let pokemon = new Pokemon(i)
      // ApiRequest(i).then(data => {
      //   // console.log(data)
      //   pokemon.setData(data);
      //   console.log(pokemon.data)
      // }).catch(err => {
      //   console.log(err);
      // });
      pokemon.setData(await ApiRequest(i))
      pokedex.push(pokemon)
      mainGrid.appendChild(pokemon.createEntry());
      
    }
    
}


/* $(".animated-progress span").each(function () {
    $(this).animate(
      {
        width: $(this).attr("data-progress") + "%",
      },
      1000
    );
    $(this).text($(this).attr("data-progress") + "%");
  });

*/


async function ApiRequest(pokeIndex) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeIndex}`, {});
    const json = await response.json();
    return json
}

// async function SpeciesRequest(url){
//     const response = await fetch(url, {});
//     const json = await response.json();
//     console.log(json)
// }


createPokedex();
console.log(pokedex)
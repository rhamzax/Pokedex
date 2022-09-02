const mainGrid = document.querySelector('main');
const modal = document.querySelector(".pokeModal");




// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

let pokedex = []
async function createPokedex(){
    for(let i = 1; i < 200; i++){
      let pokemon = new Pokemon(i)
      pokemon.setData(await ApiRequest(i))
      pokedex.push(pokemon)
      mainGrid.appendChild(pokemon.createEntry());
      
    }
    
}
function showInfo(){
  let pokemon = pokedex[this.id-1]  
  modal.innerHTML = ''
  console.log(pokemon.createModal())
  modal.appendChild(pokemon.createModal())
  modal.style.display = "block";
  enableCloseBtn();
  
}

function enableCloseBtn(){
  const span = document.querySelector(".close");
  span.onclick = function() {
    modal.style.display = "none";
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
const mainGrid = document.querySelector('main');
const modal = document.querySelector(".pokeModal");

// Get the button that opens the modal
const btn = document.querySelector(".btn");

// Get the <span> element that closes the modal
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
function createPokedex(){
    for(let i = 1; i < 30; i++){
        ApiRequest(i).then(pokeName => (createEntry(i, pokeName)))
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
    console.log(json)
    // SpeciesRequest(json.species.url)
    return pokeName
}

// async function SpeciesRequest(url){
//     const response = await fetch(url, {});
//     const json = await response.json();
//     console.log(json)
// }


createPokedex();
class Pokemon{
    constructor(index) {
        this.index = index;
    }

    setData(data){
        this.data = data;
        this.setName();
    }

    setName(){
        this.pokeName = this.data.species.name
    }

    createEntry(){
        const gridEntry = document.createElement('div');
        gridEntry.addEventListener('click', showInfo)
        gridEntry.className = 'entry';
        gridEntry.innerHTML = 
        `
        <div class="top">
            <div class="left">
                <h2 class="pokeID">${this.index}</h2>
                <h3 class="pokeName">${this.pokeName}</h3>
            </div>
            <div class="right">
                <h3 class="https://pokeapi.co/api/v2/type/13/"></h3>
            </div>
        </div>
        <div class="pokeImg">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.index}.png" alt="Pokemon" class="pokeImg">
        </div>
        
        `
        return gridEntry;
    }

    
}
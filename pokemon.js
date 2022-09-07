class Pokemon{
    constructor(index) {
        this.index = index;
    }

    setData(data){
        this.data = data;
        this.setName();
        this.setStats();
        this.setCharisteristic();
    }

    setName(){
        this.pokeName = this.data.species.name
    }

    setCharisteristic(){
        this.height = this.data.height/10
        this.weight = this.data.weight/10
        this.abilities = this.data.abilities
    }

    setStats(){
        this.hp = this.data.stats[0].base_stat
        this.attack = this.data.stats[1].base_stat
        this.defense = this.data.stats[2].base_stat
        this.spAttack = this.data.stats[3].base_stat
        this.spDefense = this.data.stats[4].base_stat
        this.speed = this.data.stats[5].base_stat
        this.total = this.hp + this.attack + this.defense + this.spAttack + this.spDefense + this.speed
        this.max_stat = Math.max(this.hp, this.attack, this.defense, this.spAttack, this.spDefense, this.speed)

    }

    createWidthsForStatsBar(){
        this.hpWidth = Math.round(this.hp/this.max_stat*100)
        this.attackWidth = Math.round(this.attack/this.max_stat*100)
        this.defenseWidth = Math.round(this.defense/this.max_stat*100)
        this.spAttackWidth = Math.round(this.spAttack/this.max_stat*100)
        this.spDefenseWidth = Math.round(this.spDefense/this.max_stat*100)
        this.speedWidth = Math.round(this.speed/this.max_stat*100)
    }

    createEntry(){
        const gridEntry = document.createElement('div');
        gridEntry.className = 'entry';
        gridEntry.id = `${this.index}`
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
        gridEntry.addEventListener('click', showInfo)
        return gridEntry;
    }
    createModal(){
        this.createWidthsForStatsBar()
        const modalContent = document.createElement('div');
        modalContent.className = 'pokeModalContent'
        modalContent.innerHTML =
        `
            <span class="close" id="left">&times;</span>
            <h3 class="pokeName">${this.pokeName} #${this.index}</h3>
            <div class="pokeImg">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.index}.png" alt="Pokemon" class="pokeImg">
            </div>
            <div class="pokeCharacteristic">
                <p class="CharacteristicTitle">Type</p>
                <div class="pokeTypes">
                    <p>Fire</p>
                    <p>Flying</p>
                </div>
                <p class="CharacteristicTitle">Height</p>
                <p>${this.height}m ( 1'12" )</p>
                <p class="CharacteristicTitle">Weight</p>
                <p>${this.weight}kg ( 18.7lbs. )</p>
                <p class="CharacteristicTitle">Abilities</p>
                <div class="pokeAbilities">
                    <p>Blaze</p>
                    <p>Solar-Power</p>    
                    <p>Solar-Power</p> 
                </div>
            </div>
            <p class="StatisticTitle">Stats</p>
            <div class="stats">
                <p class="stat-title">Hp</p>
                <div class="animated-progress progress-blue">
                    <span data-progress="45" style="width: ${this.hpWidth}%;">${this.hp}</span>
                </div>    
                <p class="stat-title">Attack</p>
                <div class="animated-progress progress-blue">
                    <span data-progress="45" style="width: ${this.attackWidth}%;">${this.attack}</span>
                </div>    
                <p class="stat-title">Defense</p>
                <div class="animated-progress progress-blue">
                    <span data-progress="45" style="width: ${this.defenseWidth}%;">${this.defense}</span>
                </div>    
                <p class="stat-title">Sp. Attack</p>
                <div class="animated-progress progress-blue">
                    <span data-progress="45" style="width: ${this.spAttackWidth}%;">${this.spAttack}</span>
                </div>    
                <p class="stat-title">Sp. Defense</p>
                <div class="animated-progress progress-blue">
                    <span data-progress="45" style="width: ${this.spDefenseWidth}%;">${this.spDefense}</span>
                </div>    
                <p class="stat-title">Speed</p>
                <div class="animated-progress progress-blue">
                    <span data-progress="45" style="width: ${this.speedWidth}%;">${this.speed}</span>
                </div>    
                <p class="stat-title">Total</p>
                <p>${this.total}</p>         
            </div>
        `
        return modalContent
    }
}
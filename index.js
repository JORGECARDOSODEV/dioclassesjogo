class adventureHero{
	constructor(heroName, heroAge, heroType, heroPower){
    	this.heroName = heroName
        this.heroAge = heroAge
        this.heroType = heroType
        this.heroPower = heroPower
   }
 	atacar(){
 		console.log(`O ${this.heroType} atacou usando ${this.heroPower}`)
    }  
}

let heroWarrior = new adventureHero("Josué", 28, "guerreiro", "espada")
let heroMago = new adventureHero("Gandalf", 67, "mago", "magia")
let heroMonk = new adventureHero("Telemous", 54, "monge", "artes marciais")
let heroNinja = new adventureHero("Hanashiro", 39, "ninja", "shuriken")

heroWarrior.atacar()

//para opcoes de tipos
//heroMago.atacar()
//heroMonk.atacar()
//heroNinja.atacar()
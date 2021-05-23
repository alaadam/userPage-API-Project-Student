//This is the class that will manage all your APIs
class APIManager {
    constructor() {
        this.listOfFriends = []
    }

    addUserInfo(userInfo){
        this.name = userInfo.results[0].name.first
        this.lastName = userInfo.results[0].name.last
        this.city = userInfo.results[0].location.city
        this.state = userInfo.results[0].location.state
        this.img = userInfo.results[0].picture.medium
        userInfo.results.forEach(element => this.listOfFriends.push(element.name.first+" "+ element.name.last))
        this.listOfFriends.splice(0,1)
    }

    addQuote(userQuote){
        this.quote = userQuote.quote
    }

    addPokemon(userPokemon){
        this.pokemon = userPokemon.name
        this.pokemonImg = userPokemon.sprites.front_default
    }

    addAboutme(userAboutMe){
        this.aboutMe = userAboutMe
    }

    getDataFromAPI(){
        this.getUserAPI()
        this.getQuoteApi()
        this.getPokemonApi()
        this.getAboutMe()
    }
        
    getUserAPI(){ 
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/?results=7',
            success:(data) => {
            this.addUserInfo(data)
            }
        })
    }

    getQuoteApi(){
        $.ajax({
            method: "GET",
            url: 'https://api.kanye.rest',
            success:(data) => {
                this.addQuote(data)
            }
        })
    }
     
    getPokemonApi(){   
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 898)+1}`,
            success:(data) => {
                this.addPokemon(data)
            }
        })
    }

    getAboutMe(){
        $.ajax({
            method: "GET",
            url: `https://baconipsum.com/api/?type=meat-and-filler`,
            success:(data) => {
                this.addAboutme(data)
            }
        })

    }
}


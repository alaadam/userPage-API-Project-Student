class Renderer {
    renderPageData(user){
        this.renderInfo(user,'.user-container','#user-template')
        this.renderInfo(user,'.friends-container','#friends-template')
        this.renderInfo(user,'.quote-container','#quote-template')
        this.renderInfo(user,'.pokemon-container','#pokemon-template')
        this.renderInfo(user,'.meat-container','#meat-template')

    }

    renderInfo = function(user,dist,from){
        if(dist == '.pokemon-container')
            this.HandleBarHelper()
        $(dist).empty()
        const source = $(from).html();
        const template = Handlebars.compile(source);
        const newHTML = template(user);
        $(dist).append(newHTML);
    }
    HandleBarHelper = function(){
        Handlebars.registerHelper('capitalize', function (nameOfPokemon) {
            let res = nameOfPokemon.charAt(0).toUpperCase()  + nameOfPokemon.slice(1);
            return res
        })
    
    }
}


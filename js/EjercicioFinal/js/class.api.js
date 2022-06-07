export default class ApiMorty {
    async getData ( url ) {
        let response = await fetch( url, { method: 'get' } )
        if ( response.status === 200 ) {
            let data = await response.json()
            return data
        }
        return response.statusText
    }
    printCharacters ( list, dom ) {
        dom.innerHTML = ''
        list.forEach( character => {
            this.printOneCharacter( character, dom )
        } );
    }
    printOneCharacter ( character, dom ) {
        let article = document.createElement( 'article' )
        article.classList.add( 'card', 'col-12', 'col-md-6', 'col-lg-3', 'border-0', 'p-1', 'bg-light', 'bg-white', 'shadow-sm' )
        let claseColor = ""
        if ( character.status.toLowerCase() === 'alive' ) {
            claseColor = 'text-success'
        } else if ( character.status.toLowerCase() === 'dead' ) {
            claseColor = 'text-danger'
        } else if ( character.status.toLowerCase() === 'unknown' ) {
            claseColor = 'text-warning'
        }
        article.innerHTML = `<img src="${ character.image }" class="card-img-top p-2" alt="${ character.name }">
                            <div class="card-body">
                                <h5 class="card-title">${ character.name }</h5>
                                <p class="card-text">Estado : <span class="${ claseColor }">${ character.status }</span></p>
                            </div>`
        dom.appendChild( article )
    }
}
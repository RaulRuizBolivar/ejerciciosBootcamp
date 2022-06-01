const url = 'https://api.giphy.com/v1/gifs/search?lang=es&q='
const urlTrending = 'https://api.giphy.com/v1/gifs/trending?'
const token = 'BaSL4UINo562DAc55frWf3OkgCoKHfG7'
const inputBusqueda = document.querySelector( '#search .search' )
const sectionMemes = document.querySelector( '#memes' )

inputBusqueda.addEventListener( 'keydown', recogerTecla )

function recogerTecla ( event ) {
    if ( event.keyCode === 13 ) {
        buscarMemes( url, token, sectionMemes, inputBusqueda.value )
    }
}
async function pintarTodosMemes ( url, token, dom, busqueda ) {
    inputBusqueda.value = ''
    sectionMemes.innerHTML = ''
    let memes = await buscarMemes( url, token, busqueda )
    memes.data.forEach( meme => pintarUnMeme( meme, dom ) );
}
async function buscarTrending () {
    const result = await fetch( urlTrending, { method: 'get' } )
    const gifs = await result.json()
    pintarTodosMemes( gifs.data )
}
async function buscarMemes ( url, token, busqueda ) {
    urlFinal = url + busqueda + '&api_key=' + token
    let response = await fetch( urlFinal, { method: 'get' } )
    let memes = await response.json()
    return memes
}

function pintarUnMeme ( meme, dom ) {
    let article = document.createElement( 'article' )
    let h2 = document.createElement( 'h2' )
    h2.innerText = meme.username
    let img = document.createElement( 'img' )
    img.src = meme.images.original.url
    img.alt = meme.title
    let p = document.createElement( 'p' )
    p.innerText = meme.title
    article.append( h2, img, p )
    dom.appendChild( article )
}

//Quiero que me hagais un buscador de gifs, el buscador funciona cuando demos al intro
//En la seccion correspondiente me pintaran todos los gifs de la busqueda
//Bola curva: pintarme inicialmente los gifs trending


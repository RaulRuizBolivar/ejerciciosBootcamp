import ApiMorty from "./class.api.js";

const selectEstado = document.querySelector( '#estado' )
const sectionPersonajes = document.querySelector( '#personajes' )
const botones = document.querySelectorAll( 'footer button' )
selectEstado.addEventListener( 'change', filtrarStatus )
const api = new ApiMorty()
const url = 'https://rickandmortyapi.com/api/character/'

async function cargarContenido ( url ) {
    let personajes = await api.getData( url )
    buttonCharge( personajes.info.prev, personajes.info.next )
    api.printCharacters( personajes.results, sectionPersonajes )
    console.log( personajes )
}
cargarContenido( url )

function buttonCharge ( urlPrev, urlNext ) {
    botones[ 0 ].disabled = ( urlPrev === null ) ? true : false
    botones[ 1 ].disabled = ( urlNext === null ) ? true : false
    botones[ 0 ].dataset.url = urlPrev
    botones[ 1 ].dataset.url = urlNext
    botones.forEach( boton => {
        boton.addEventListener( 'click', irPagina )
    } );
}
async function irPagina ( event ) {
    let url = event.target.dataset.url
    const data = await api.getData( url )
    await api.printCharacters( data.results, sectionPersonajes )
    buttonCharge( data.info.prev, data.info.next )
}
function filtrarStatus ( event ) {
    let urlFiltrada = ( event.target.value !== '' ) ? url + '?status=' + event.target.value : url
    cargarContenido( urlFiltrada )
}
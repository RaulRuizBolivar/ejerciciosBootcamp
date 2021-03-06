const btnAlfabetico = document.querySelector( '#alfabetico' )
const btnHabitantes = document.querySelector( '#habitantes' )
let ulCiudades = document.querySelector( '.ciudades' )
let divMapa = document.querySelector( '.mapa' )
let ordenAZ = false
let ordenNum = false

function pintarCiudades ( lista, dom ) {
    dom.innerHTML = ''
    lista.forEach( ciudad => pintarUnaCiudad( ciudad, dom ) )
}
function pintarUnaCiudad ( ciudad, dom ) {
    let li = document.createElement( 'li' )
    li.innerText = `${ ciudad.nombre } - ${ ciudad.habitantes } habitantes`
    li.dataset.mapa = ciudad.mapa
    li.addEventListener( 'click', cambiarMapa )
    dom.appendChild( li )
}

pintarCiudades( ciudades, ulCiudades )


//Ordenar alfabeticamente

btnAlfabetico.addEventListener( 'click', ordenarAZ )

function ordenarAZ () {
    let listaOrdenada = []
    listaOrdenada = ciudades.sort( ( actual, siguiente ) => { return actual.nombre.toLowerCase() > siguiente.nombre.toLowerCase() } )
    if ( !ordenAZ ) {
        listaOrdenada.reverse()
    }
    ordenAZ = !ordenAZ
    console.log( listaOrdenada )
    pintarCiudades( listaOrdenada, ulCiudades )
}

//Ordenar por numero
btnHabitantes.addEventListener( 'click', ordenarNumericamente )
function ordenarNumericamente () {
    let listaOrdenada = []
    if ( ordenNum ) {
        listaOrdenada = ciudades.sort( ( actual, siguiente ) => {
            return actual.habitantes - siguiente.habitantes
        } )
    } else {
        listaOrdenada = ciudades.sort( ( actual, siguiente ) => {
            return siguiente.habitantes - actual.habitantes
        } )
    }
    ordenNum = !ordenNum
    pintarCiudades( listaOrdenada, ulCiudades )
}


// Cambiar el foco del mapa

let mapa = document.querySelector( 'iframe' )


function cambiarMapa ( event ) {
    mapa.src += event.target.dataset.mapa
}
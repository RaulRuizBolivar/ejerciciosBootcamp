const crearLista = () => {
    let lista = []
    while ( lista.length < 20 ) {
        let numeroAleatorio = Math.floor( ( Math.random() ) * 51 )
        lista.push( numeroAleatorio )
    }
    return lista
}

const filtrarLista = lista => {
    let listaFiltrada = []
    lista.forEach( numero => {
        if ( numero % 10 !== 0 ) {
            listaFiltrada.push( numero )
        }
    } );
    return listaFiltrada
}

let lista = []
lista = crearLista()
const listaFiltrada = filtrarLista( lista )
console.log( listaFiltrada )
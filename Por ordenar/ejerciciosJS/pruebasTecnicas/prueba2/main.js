const listaNombres = [ 'Jorge', 'Rosa', 'Ana', 'Juan', 'Alfredo', 'Bernardino', 'Gorka', 'Raúl', 'Alejandro', 'asjdhasjkdvajshvdkjasbdjasgbd' ]
const listaListaNombre = []
const filtrarPorLongitud = ( lista, longitud ) => lista.filter( nombre => nombre.length === longitud )
const nombreMasLargo = lista => {
    let longitud = 0
    for ( nombre of lista ) {
        if ( nombre.length > longitud ) {
            longitud = nombre.length
        }
    }
    return longitud
}
const crearArrayMultidimensional = ( lista ) => {
    let listaMultidimensional = []
    for ( let i = nombreMasLargo( lista ); i > 2; i-- ) {
        if ( filtrarPorLongitud( lista, i ).length !== 0 ) {
            listaMultidimensional.push( filtrarPorLongitud( lista, i ) )
        }
    }
    return listaMultidimensional
}

console.log( crearArrayMultidimensional( listaNombres ) )
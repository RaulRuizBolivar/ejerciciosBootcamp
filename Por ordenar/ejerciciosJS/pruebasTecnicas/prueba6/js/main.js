const valores = new Array( true, 5, false, 'hola', 'adios', 2, 3 )

function filtrarPorTipo ( lista, filtro ) {
    const listaFiltrada = new Array()
    for ( let item of lista ) {
        if ( typeof item === filtro ) {
            listaFiltrada.push( item )
        }
    }
    return listaFiltrada
}


function filtroMasLargo ( lista ) {
    let elementoMasLargo = ''
    for ( item of lista ) {
        if ( item.length > elementoMasLargo.length ) {
            elementoMasLargo = item
        }
    }
    return elementoMasLargo
}

function calcular ( lista, operacion ) {
    let resultado = 0;
    if ( operacion === 'sumar' ) {
        for ( numero of lista ) {
            resultado += numero
        }
    }
    if ( operacion === 'multiplicar' ) {
        for ( numero of lista ) {
            resultado *= numero
        }
    }
    return resultado
}

let listaStrings = filtrarPorTipo( valores, 'string' )
let listaNumeros = filtrarPorTipo( valores, 'number' )
let listaBoolean = filtrarPorTipo( valores, 'boolean' )

console.log( filtroMasLargo( listaStrings ) )
console.log( calcular( listaNumeros, 'sumar' ) )
console.log( calcular( listaNumeros, 'multiplicar' ) )
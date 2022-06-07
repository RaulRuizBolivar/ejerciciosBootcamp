const palabra = 'f*r*am bues%a$s'
function limpiarCadena ( string ) {
    let cadena = string.replaceAll( "*", "" )
    cadena = cadena.replaceAll( "%", "" )
    cadena = cadena.replaceAll( "$", "" )
    cadena = cadena.replaceAll( " ", "" )
    cadena = cadena.replaceAll( "&", "" )
    cadena = cadena.replaceAll( "+", "" )
    cadena = cadena.replaceAll( "(", "" )
    cadena = cadena.replaceAll( ")", "" )
    return cadena
}

console.log( limpiarCadena( palabra ) )
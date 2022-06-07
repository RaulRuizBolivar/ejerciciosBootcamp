let numDNI: number = 09067580
function obtenerLetraDNI ( dni: number ): string {
    if ( dni < 0 || dni > 99999999 ) {
        return 'DNI no valido'
    }
    let letras: string[] = [ 'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z',
        'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T' ];
    return letras[ dni % 23 ]
}
console.log( obtenerLetraDNI( numDNI ) )
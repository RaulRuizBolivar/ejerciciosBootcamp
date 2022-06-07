function reverseString ( cadena: string ): string {
    let arrayCadena: string[] = cadena.split( '' )
    let arrayReverse: string[] = [ ...arrayCadena.reverse() ]
    return arrayReverse.join( '' )
}
const nombre: string = 'Raul'
console.log( reverseString( nombre ) )
let dniRaul: string = '09067580Z'
function devolverLetra ( dni: string ): string {
    return dni[ dni.length - 1 ]
}
console.log( devolverLetra( dniRaul ) )
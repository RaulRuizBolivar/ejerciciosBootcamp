//Dada una frase cualquiera (En un lugar de la mancha) , pedir una letra, y decirme cuantas veces se repite dentro de mi cadena de caracteres

const contarLetras = ( string, letra ) =>
{
    let contador = 0
    for ( letraString of string )
    {
        if ( letraString.toLowerCase() === letra.toLowerCase() )
        {
            contador++
        }
    }
    return contador
}
document.write( contarLetras( 'En un lugar de la mancha', prompt( 'Dime una letra' ) ) )
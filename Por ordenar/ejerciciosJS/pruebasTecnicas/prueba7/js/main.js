let frase = 'La ruta nos aporto otro paso natural'
const esPalindromo = string => {
    let palindromo = false
    const sinEspacios = string.replaceAll( " ", "" ).toLowerCase()
    const arrayCaracteres = sinEspacios.split( "" )
    const reverseCaracteres = [ ...arrayCaracteres ].reverse()
    const stringCaracter = arrayCaracteres.join( '' )
    const stringReverseCaracter = reverseCaracteres.join( '' )
    if ( stringCaracter === stringReverseCaracter ) {
        palindromo = true
    }
    return palindromo
}

console.log( esPalindromo( frase ) )
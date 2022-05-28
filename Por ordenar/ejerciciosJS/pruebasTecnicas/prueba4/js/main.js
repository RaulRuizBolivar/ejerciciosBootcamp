function getBBDDRestored ( pBbdd ) {
    const bbdd_stock = pBbdd.filter( product => product.stock === true )
    const bbdd_limpia = bbdd_stock.map( producto => {
        return {
            id: producto.id,
            nombre: cleanName( producto.name ),
            stock: producto.stock
        }
    } )
    return bbdd_limpia
}

function cleanName ( nombre ) {
    const nameWithoutCharacters = nombre.replace( /[+*$%=& ]/g, '' )

    const arrayCharacters = nameWithoutCharacters.split( '' )

    const unicos = new Array()

    let contadorL, contadorR, contadorC = 0
    for ( let i = 0; i < arrayCharacters.length; i++ ) {
        const elemento = arrayCharacters[ i ]
        const elementoAnterior = arrayCharacters[ i - 1 ]
        if ( elemento === 'l' && elementoAnterior === 'l' && contadorL === 0 ) {
            unicos.push( elemento )
            contadorL = 1
        } else if ( elemento === 'r' && elementoAnterior === 'r' && contadorR === 0 ) {
            unicos.push( elemento )
            contadorR = 1
        } else if ( elemento === 'c' && elementoAnterior === 'c' && contadorC === 0 ) {
            unicos.push( elemento )
            contadorC = 1
        } else if ( elemento !== elementoAnterior ) {
            unicos.push( elemento )
            contadorL, contadorC, contadorR = 0
        }
        return arrayCharacters.join( '' )
    }
}

console.log( getBBDDRestored( base_datos ) )
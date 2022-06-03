const numeros = []
const pedirNumeros = ( lista ) => {
    for ( let i = 0; i < 10; i++ ) {
        lista.push( parseInt( prompt( 'Dime un numero' ) ) )
    }
}

const multiplicar = ( lista ) => {
    let resultado = 1
    for ( numero of lista ) {
        resultado *= numero
    }
    return resultado
}
const sumar = ( lista ) => {
    let resultado = 0
    for ( numero of lista ) {
        resultado += numero
    }
    return resultado
}
const restar = ( lista ) => {
    let resultado = 0
    for ( numero of lista ) {
        resultado -= numero
    }
    return resultado
}
const dividir = ( lista ) => {
    let resultado = 1
    for ( numero of lista ) {
        resultado /= numero
    }
    return resultado
}
pedirNumeros( numeros )
document.write( sumar( numeros ), ' ', multiplicar( numeros ), ' ', dividir( numeros ), ' ', restar( numeros ) )

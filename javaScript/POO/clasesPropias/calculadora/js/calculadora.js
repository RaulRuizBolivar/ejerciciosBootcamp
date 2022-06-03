class Calculadora {
    constructor ( marca ) {
        this.marca = marca
        this.estado = 'apagada'
    }
    encender () {
        this.estado = 'encendida'
    }
    apagar () {
        this.estado = 'apagada'
    }
    sumar ( ...numeros ) {
        if ( this.estado === 'encendida' ) {
            let resultado = 0
            numeros.forEach( numero => resultado += numero )
            console.log( resultado )
        } else {
            console.log( '...' )
        }
    }
    restar ( a, b ) {
        if ( this.estado === 'encendida' ) {
            console.log( a - b )
        } else {
            console.log( '...' )
        }
    }
    multiplicar ( ...numeros ) {
        if ( this.estado === 'encendida' ) {
            let resultado = 1
            numeros.forEach( numero => resultado *= numero )
            console.log( resultado )
        } else {
            console.log( '...' )
        }
    }
    dividir ( a, b ) {
        if ( this.estado === 'encendida' ) {
            console.log( a / b )
        } else {
            console.log( '...' )
        }
    }
    elevar ( a, b ) {
        if ( this.estado === 'encendida' ) {
            console.log( Math.pow( a, b ) )
        } else {
            console.log( '...' )
        }
    }
}
class Ordenador {
    //propiedades --> variables
    constructor ( disco, ram, height, width, procesador, pantalla = false, teclado = false ) {
        //Dentro de este metodo se inicializan las propiedades
        this.disco = disco
        this.ram = ram
        this.height = height
        this.width = width
        this.procesador = procesador
        this.pantalla = pantalla
        this.teclado = teclado
        this.estado = 'apagado'
    }
    //metodos --> funciones que le dan acciones a la clase
    encenderse () {
        this.estado = 'encendido'
    }
    apagarse () {
        this.estado = 'apagado'
    }
    sumar ( ...numeros ) {
        if ( this.estado === 'encendido' ) {
            let suma = 0
            numeros.forEach( numero => suma += numero )
            console.log( suma )
        } else {
            console.log( 'El ordenador no funciona, esta apagado' )
        }
    }
    navegarPorInternet ( url ) {
        if ( this.estado === 'encendido' ) {
            window.open( url )
        } else {
            console.log( 'El ordenador no funciona, esta apagado' )
        }
    }
}
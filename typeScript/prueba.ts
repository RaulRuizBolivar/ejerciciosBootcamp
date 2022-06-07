let nombre: string = 'Raúl'
let edad: number
edad = 40
let estado: boolean = true
console.log( edad * 5 )

//Tengo 2 formas de definir un array:

const arrNum: number[] = new Array( 1, 2, 3, 4, 5 ) // []

const arrNombres: Array<string> = [ nombre, 'Juan', 'Pepe' ]

//Funciones 
function sumar ( numeroA: number, numeroB: number ): number {
    let resultado = numeroA + numeroB
    return resultado
}

//Funcion flecha
const restar = ( num1: number, num2: number ): number => {
    return num1 - num2
}

//Si quiero que la funcion no retorne nada ponemos un void
function saludar ( nombre: string ): void {
    console.log( 'Hola ,' + nombre )
}
saludar( 'pepe' )

let peticion: any = 2
peticion = '2'
//any es un tipado de datos abierto

// TypeScript inicia un tipo concreto de Array que se llama TUPLA

let tupla: [ string, number, boolean ] = [ 'Raul', 25, true ]


//Typescript tambie añade el concepto de enumerado
enum Talla {
    s,
    sm,
    m,
    l,
    xl,
    xxl
}
console.log( Talla )
console.log( Talla[ '0' ] )
console.log( Talla.xl )
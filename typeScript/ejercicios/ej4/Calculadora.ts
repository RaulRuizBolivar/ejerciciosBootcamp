interface ICalculadora {
    marca: string
    sumar (): number
    restar (): number
    multiplicar ( a: number, b: number ): number
}

class Calculadora implements ICalculadora {
    marca: string = ''
    constructor ( marca = 'LG' ) {
        this.marca = marca;
    }

    sumar ( ...Numeros: number[] ): number {
        let resultado: number = 0
        Numeros.forEach( numero => resultado += numero )
        return resultado
    }
    restar ( ...Numeros: number[] ): number {
        let resultado: number = 0
        Numeros.forEach( numero => resultado -= numero )
        return resultado
    }
    multiplicar ( ...Numeros: number[] ): number {
        let resultado: number = 1
        resultado = Numeros.reduce( ( prev, next ) => prev * next )
        return resultado
    }
}


const miCalculadora = new Calculadora( 'CASIO' )
console.log( miCalculadora.sumar( 1, 2, 3, 4, 5, 6, 7 ) )
console.log( miCalculadora.restar( 45, 3, 12 ) )
console.log( miCalculadora.multiplicar( 3, 4, 5, 6 ) )
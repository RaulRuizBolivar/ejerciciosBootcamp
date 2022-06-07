interface iTransformer {
    contarLetras ( frase: string, letra: string ): number
    cuantasVeces ( frase: string ): number
    sinEspacios ( frase: string ): string
}
class Transformer implements iTransformer {
    sinEspacios ( frase: string ): string {
        let resultado: string = frase.trim().split( ' ' ).join( '' ).toLocaleLowerCase()
        return resultado
    }
    cuantasVeces ( frase: string ): number {
        let fraseSinEspacios: string = this.sinEspacios( frase )
        let resultado: number = fraseSinEspacios.length
        return resultado
    }
    contarLetras ( frase: string, letra: string ): number {
        let fraseSinEspacios: string = this.sinEspacios( frase )
        let resultado: string[] = fraseSinEspacios.split( letra )
        return resultado.length - 1
    }
}

let mensaje: string = 'En un lugar de la mancha'
const bumblebee = new Transformer()
console.log( bumblebee.cuantasVeces( mensaje ) )
console.log( bumblebee.contarLetras( mensaje, 'a' ) )
console.log( bumblebee.sinEspacios( mensaje ) )
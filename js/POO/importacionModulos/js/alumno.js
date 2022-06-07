export default class Alumno {
    constructor ( nombre, edad, nota ) {
        this.nombre = nombre
        this.edad = edad
        this.nota = nota
    }
    presentar () {
        return 'Hola, mi nombre es ' + this.nombre + ', tengo ' + this.edad + ' años y tengo una nota de ' + this.nota
    }
}
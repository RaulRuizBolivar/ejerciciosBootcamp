export default class Profesor {
    constructor ( nombre, apellidos, experiencia ) {
        this.nombre = nombre
        this.apellidos = apellidos
        this.experiencia = experiencia
    }
    mostrarProfesor () {
        let mensaje = `PROFESOR (nombre: ${ this.nombre }, apellidos: ${ this.apellidos }, experiencia: ${ this.experiencia })`
        console.log( mensaje )
    }
}


// PROFESOR (nombre: Ramón, apellidos: García, experiencia: 5)
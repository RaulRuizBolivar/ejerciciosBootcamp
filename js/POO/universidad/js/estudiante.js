export default class Estudiante {
    constructor ( nombre, apellidos ) {
        this.nombre = nombre
        this.apellidos = apellidos
        this.asignatura = []
    }
    agregarAsignatura ( Asignatura ) {
        this.asignatura.push( Asignatura )
    }
    mostrarEstudiante () {
        console.log( `ESTUDIANTE (nombre: ${ this.nombre }, apellidos: ${ this.apellidos })` )
        this.asignatura.forEach( asignatura => asignatura.mostrarAsignatura( true ) )
    }
}
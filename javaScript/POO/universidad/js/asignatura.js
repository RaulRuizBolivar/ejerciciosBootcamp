export default class Asignatura {
    constructor ( nombre, profesor ) {
        this.nombre = nombre
        this.profesor = profesor
    }
    mostrarAsignatura ( mostrarProfesor ) {
        console.log( `ASIGNATURA (nombre: ${ this.nombre })` )
        if ( mostrarProfesor ) {
            console.log( `Asignatura impartida por: ` )
            this.profesor.mostrarProfesor()
        }
    }
}

// ASIGNATURA (nombre: Álgebra)
// ASIGNATURA (nombre: Electrónica)
// Asignatura impartida por:
// PROFESOR (nombre: Rosa, apellidos: Martinez, experiencia: 9)
// ASIGNATURA (nombre: Física)
// Asignatura impartida por:
// PROFESOR (nombre: Rosa, apellidos: Martinez, experiencia: 9)
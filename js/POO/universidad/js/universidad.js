export default class Universidad {
    constructor ( nombre ) {
        this.nombre = nombre
        this.alumnos = []
    }
    agregarAlumno ( Alumno ) {
        this.alumnos.push( Alumno )
    }
    mostrarUniversidad () {
        console.log( `UNIVERSIDAD(nombre: ${ this.nombre })` )
        this.alumnos.forEach( alumno => alumno.mostrarEstudiante )
    }
    obtenerAlumnosAsignatura ( nombreAsignatura ) {
        let contador = 0
        this.alumnos.forEach( alumno => {
            alumno.asignatura.forEach( asignatura => {
                contador = ( asignatura.nombre === nombreAsignatura ) ? contador + 1 : contador
            } )
        } )
        return contador
    }
}
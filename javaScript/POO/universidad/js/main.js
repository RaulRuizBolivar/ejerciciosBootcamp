import Profesor from './profesor.js'
import Asignatura from './asignatura.js'
import Estudiante from './estudiante.js'
import Universidad from './universidad.js'

let profesor1 = new Profesor( 'Ramón', 'García', 5 )
let profesor2 = new Profesor( 'Rosa', 'Martinez', 9 )
profesor1.mostrarProfesor()
profesor2.mostrarProfesor()

let algebra = new Asignatura( 'Álgebra', profesor1 )
let electronica = new Asignatura( 'Electrónica', profesor2 )
let fisica = new Asignatura( 'Física', profesor2 )
let estudiante1 = new Estudiante( 'Pepe', 'Ortiz' )
let estudiante2 = new Estudiante( 'Ana', 'Jiménez' )
let estudiante3 = new Estudiante( 'Lola', 'López' )
estudiante1.agregarAsignatura( algebra )
estudiante1.agregarAsignatura( fisica )
estudiante2.agregarAsignatura( electronica )
estudiante3.agregarAsignatura( algebra )
estudiante3.agregarAsignatura( electronica )
estudiante3.agregarAsignatura( fisica )
let uni1 = new Universidad( 'UC3M' )
uni1.agregarAlumno( estudiante1 )
uni1.agregarAlumno( estudiante2 )
uni1.agregarAlumno( estudiante3 )
uni1.mostrarUniversidad()
console.log( uni1.obtenerAlumnosAsignatura( 'Electrónica' ) )
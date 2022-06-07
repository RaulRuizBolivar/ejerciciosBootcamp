import Tarea from "./tarea.js";
import Producto from "./producto.js";

const sectionTareas = document.querySelector( '#tasks' )
const sectionProductos = document.querySelector( '#listaCompra' )

const tareas = [
    new Tarea( 1, 'Estudiar javaScript', 'urgente' ),
    new Tarea( 2, 'Sacar al perro', 'diaria' ),
    new Tarea( 3, 'plantar un arbol', 'mensual' )
]

const productos = [
    new Producto( 15, 'leche desnatada', 'diaria', 0.5, 10 ),
    new Producto( 16, 'pan', 'urgente', 0.15, 3 ),
    new Producto( 17, 'carne', 'mensual', 4.15 )
]
function pintar ( dom, lista ) {
    lista.forEach( item => item.mostrar( dom ) )
}
pintar( sectionTareas, tareas )
pintar( sectionProductos, productos )
tareas[ 2 ].completar()
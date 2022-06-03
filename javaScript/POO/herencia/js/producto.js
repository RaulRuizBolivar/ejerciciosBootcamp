import Tarea from "./tarea.js";

export default class Producto extends Tarea {
    constructor ( id, titulo, prioridad, precio, cantidad = 1 ) {
        //super se refiere al metodo de la clase tarea, en este caso, al contructor
        super( id, titulo, prioridad )
        this.precio = precio
        this.cantidad = cantidad
    }
    calcularPrecio () {
        return this.precio * this.cantidad
    }
    //Podemos sobreescribir un metodo del padre, lo unico necesario para sobreescribir un metodo es llamarlo igual que el del padre
    mostrar ( dom ) {
        dom.innerHTML += `<article id="tarea_${ this.id }">
                                <h3>${ this.titulo }</h3>
                                <ul>
                                    <li>${ this.prioridad }</li>
                                    <li>${ this.cantidad }</li>
                                    <li>${ this.calcularPrecio().toFixed( 2 ) }</li>
                                    <li class="${ ( this.completado ) ? 'verde' : 'rojo' }">${ ( this.completado ) ? 'completado' : 'No completado' }</li>
                                </ul>
                            </article>`
    }
}
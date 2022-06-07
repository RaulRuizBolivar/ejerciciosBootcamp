export default class Tarea {
    constructor ( id, titulo, prioridad ) {
        this.id = id
        this.titulo = titulo
        this.prioridad = prioridad
        this.completado = false
    }
    mostrar ( dom ) {
        dom.innerHTML += `<article id="tarea_${ this.id }">
                                <h3>${ this.titulo }</h3>
                                <ul>
                                    <li>${ this.prioridad }</li>
                                    <li class="${ ( this.completado ) ? 'verde' : 'rojo' }">${ ( this.completado ) ? 'completado' : 'No completado' }</li>
                                </ul>
                            </article>`
    }
    completar () {
        this.completado = true
        let actualizarTarea = document.querySelector( '#tarea_' + this.id )
        let li = actualizarTarea.querySelector( 'li:last-child' )
        if ( this.completado ) {
            li.classList.replace( 'rojo', 'verde' )
            li.innerText = 'completado'
        }
    }
}

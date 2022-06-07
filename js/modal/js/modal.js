let articulos = document.querySelectorAll( 'section article' )
let modal = document.querySelector( '.modal' )
let botonCerrar = document.querySelector( '.icon' )

botonCerrar.addEventListener( 'click', ocultarModal )
articulos.forEach( imagen => imagen.addEventListener( 'click', mostrarModal ) )

function mostrarModal ( event ) {
    //articulos.forEach( imagen => imagen.removeEventListener( 'click', mostrarModal ) )
    let titulo = event.target.children[ 0 ].innerText
    let descripcion = event.target.children[ 1 ].innerText
    let imagen = event.target.parentElement.firstElementChild
    modal.classList.add( 'activo' )
    modal.children[ 1 ].src = imagen.src
    modal.children[ 1 ].alt = imagen.alt
    modal.children[ 2 ].innerText = titulo
    modal.children[ 3 ].innerText = descripcion
}

function ocultarModal () {
    //articulos.forEach( imagen => imagen.addEventListener( 'click', mostrarModal ) )
    modal.classList.remove( 'activo' )
}
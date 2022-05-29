let articulos = document.querySelectorAll( 'article' )
let modal = document.querySelector( '.modal' )

articulos.forEach( imagen => imagen.addEventListener( 'click', mostrarModal ) )

function mostrarModal ( event ) {
    articulos.forEach( imagen => imagen.removeEventListener( 'click', mostrarModal ) )
    let titulo = event.target.children[ 0 ].innerText
    let descripcion = event.target.children[ 1 ].innerText
    let imagen = event.target.parentElement.firstElementChild
    modal.classList.add( 'activo' )
    modal.children[ 1 ].src = imagen.src
    modal.children[ 1 ].alt = imagen.alt
    modal.children[ 2 ].children[ 0 ].innerText = descripcion
    modal.children[ 2 ].children[ 1 ].innerText = titulo
}
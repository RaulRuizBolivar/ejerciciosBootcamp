function pintarGaleria ( lista, lugar ) {
    lista.forEach( imagen => { pintarImagen( imagen, lugar ) } );
}

function pintarImagen ( imagen, lugar ) {
    lugar.innerHTML += `<article class="imagen" style="width: ${ imagen.ancho }px ; height: ${ imagen.altura }px ; background-image : url('${ imagen.url }')">
                            <h2>${ imagen.titulo }</h2>
                        </article>`
}

function destacarImagen ( numero ) {
    imagenes[ numero - 1 ].setAttribute( 'class', 'destacado imagen' )
}
const divGaleria = document.querySelector( '.galeria' )
pintarGaleria( galeria, divGaleria )
const imagenes = document.querySelectorAll( '.galeria .imagen' )
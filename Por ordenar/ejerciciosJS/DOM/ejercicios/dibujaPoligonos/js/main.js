const pintarUnPoligono = ( poligono, lugar ) => {
    lugar.innerHTML += `<div id="poligono${ poligono.id }" class="poligono" style="width:${ poligono.ancho }px ; height:${ poligono.alto }px; border-radius:${ poligono.radio }%; background-color: ${ poligono.colorFondo }; border: ${ poligono.border }"></div>`
}

const pintarVariosPoligonos = ( lista, lugar ) => { lista.forEach( poligono => pintarUnPoligono( poligono, lugar ) ) }

const moverPoligono = ( numero, pixeles ) => {
    const poligonoSeleccionado = document.querySelector( `#poligono${ numero }` )
    poligonoSeleccionado.style.marginLeft = `${ pixeles }px`
    poligonoSeleccionado.style.transition = '1s'
}

const sectionTablero = document.querySelector( '#tablero' )

pintarVariosPoligonos( poligonos, sectionTablero )


//Capturamos los elementos con los que interactuamos

let botones = document.querySelectorAll( '.menu a' )
let secciones = document.querySelectorAll( '.contenedor section' )

//listeners

botones.forEach( boton => boton.addEventListener( 'click', capturarBoton ) )


//Event handler
//Esta funcion captura los elementos HTML
function capturarBoton ( event ) {
    //Los enlaces href y los formularios tienen una accion por defecto, que es llevarme a otra pagina o regargar la actual
    //Tengo que evitar esta accion por defecto siempre que sea necesario
    event.preventDefault()
    let seccion = event.target.innerText.toLowerCase()
    cambiarSeccion( seccion, event.target );
}

//Esta funcion es la que ejecuta la accion con los datos que 
function cambiarSeccion ( seccionSeleccionada, boton ) {
    secciones.forEach( seccion => seccion.style.display = 'none' )
    botones.forEach( boton => boton.classList.remove( 'activo' ) );
    document.getElementById( seccionSeleccionada ).style.display = 'block'
    boton.classList.add( 'activo' )


}
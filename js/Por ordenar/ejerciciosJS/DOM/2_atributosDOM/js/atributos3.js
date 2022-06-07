const cuadrado = document.querySelector( '.cuadrado' )
function cambiarEstado () {
    cuadrado.style.margin = '100px'
    cuadrado.style.backgroundColor = 'lightcoral'
    cuadrado.style.borderRadius = '50%'
    cuadrado.style.transition = '1s'
}
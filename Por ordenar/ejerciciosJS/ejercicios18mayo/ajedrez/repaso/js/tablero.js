// Voy a ir de problemas pequeños a problemas grandes,
//primero voy a pintar un cuadrado en pantalla, luego una fila y mas adelante el tablero
const ancho = parseInt( prompt( 'Dime un ancho en pixeles de la casilla' ) )
const numeroCuadrados = parseInt( prompt( 'Dime de cuantas casillas sea el lado' ) )
const color1 = prompt( 'Dime en ingles el color principal' )
const color2 = prompt( 'Dime en ingles el color secundario' )
const pregunta = prompt( 'Con que color quieres empezar? el primero o el segundo?' )
const colorInicial = ( pregunta === 1 ) ? color1 : color2
const colorFinal = ( pregunta === 1 ) ? color2 : color1
const crearCuadrado = ( ancho, color ) =>
{
    return ' <div style="background-color:  ' + color + '; width: ' + ancho + 'px; height: ' + ancho + 'px"></div>'
}


const crearFila = ( numeroCuadrados, ancho, color1, color2, contador ) =>
{
    let fila = '<div class="fila" style="display: flex">'
    for ( let i = 0; i < numeroCuadrados; i++ )
    {
        let color = ''
        if ( contador )
        {
            color = ( i % 2 === 0 ) ? color1 : color2
        } else
        {
            color = ( i % 2 === 0 ) ? color2 : color1
        }
        fila += crearCuadrado( ancho, color )
    }
    fila += '</div>'
    return fila
}


const crearTablero = ( numeroCuadrados, ancho, color1, color2 ) =>
{
    let tablero = '<div class="tablero">'
    for ( let i = 0; i < numeroCuadrados; i++ )
    {
        let contador = ( i % 2 === 0 ) ? true : false
        tablero += crearFila( numeroCuadrados, ancho, color1, color2, contador )
    }
    tablero += '</div>'
    return tablero
}


const imprimir = ( cosa ) => { document.write( cosa ) }

imprimir( crearTablero( numeroCuadrados, ancho, colorInicial, colorFinal ) )
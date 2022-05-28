//Quiero que pinteis un tablero de ajedrez donde se pueda elegir la cantidad de casillas por lado , el color por el que empieza (negro o gris) y el tamaño en px de la casilla

//Premisas
//Quiero que encapsuleis, NO quiero una funcion que lo haga todo
//Primero pintar una casilla
//Segundo pintar una fila
//Tercero, pintar tablero

//Primero plantear como lo hariais en html y luego pasarlo a js

const cantidadCasillas = 5
const colorInicial = 'black'
const anchoPx = 50

const pintarTablero = ( cantidadCasillas, colorInicial, anchoPx ) =>
{
    document.write( `<div style="display: flex;">` )
    for ( let i = 0; i < cantidadCasillas; i++ )
    {
        color = ( i % 2 !== 0 ) ? 'black' : 'grey'
        color = ( i % 2 === 0 ) ? 'grey' : 'black'
        pintarFila( color )
    }
    document.write( `</div >` );
}

const pintarFila = ( colorInicial ) =>
{
    document.write( `<div class="fila">` );
    for ( let i = 0; i < cantidadCasillas; i++ )
    {
        pintarCasilla( colorInicial, anchoPx )
    }
    document.write( `</div >` );
}

const pintarCasilla = ( color ) =>
{
    document.write( `<div style="background-color:${ color }; width: ${ anchoPx }px; height: ${ anchoPx }px;"></div>` )
}



pintarTablero( cantidadCasillas, colorInicial, anchoPx )
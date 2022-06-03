// hacer una pregunta por pantalla de que quieres cenar con diferentes opciones:
//Carne -> 17€
//Pescado -> 20€
//Risotto -> 9€
//Preguntar que quieres beber
//Vino ->10€
//Cerveza ->4€
//Refresco -> 1.5€
//Agua -> 0€
//Preguntar por si quiere postre
//Postre 3€

//Hacer un programa que me recoja los valores seleccionados y me devuelva el importe a pagar mas una propina del 10%

/*
const comida = prompt( 'Dime que quieres comer: Carne , pescado , risotto' ).toLocaleLowerCase()
const bebida = prompt( 'Dime que quieres beber: vino , cerveza , refresco, agua' ).toLocaleLowerCase()
const postre = prompt( 'Dime que quieres de postre' ).toLocaleLowerCase()
let precio = 0;

switch ( comida )
{
    case 'carne':
        precio += 17
        break;
    case 'pescado':
        precio += 20
        break;
    case 'risotto':
        precio += 9
        break;
}
switch ( bebida )
{
    case 'vino':
        precio += 10
        break;
    case 'cerveza':
        precio += 4
        break;
    case 'refresco':
        precio += 1.5
        break;
}
precio += 3 // postre
precio *= 1.1 //propina

document.write( `El precio es de ${ precio }` )
*/
const getPrecioBebida = pTipoBebida =>
{
    let precio = 0
    switch ( pTipo )
    {
        case 'vino':
            precio = 10
            break;
        case 'cerveza':
            precio = 4
            break;
        case 'refresco':
            precio = 1.5
            break;
        case 'agua':
            precio = 0
            break;
    }
    return precio
}
const getPrecioComida = function ( pTipo )
{
    let precio = 0
    switch ( pTipo )
    {
        case 'carne':
            precio = 17
            break;
        case 'pescado':
            precio = 20
            break;
        case 'risotto':
            precio = 9
            break;
    }
    return precio
}
const getPrecioPostre = postre => ( postre === 'si' ) ? 3 : 0
function getPropina ( pPrecio, pPorcentaje )
{
    return pPrecio * ( pPorcentaje / 100 )
}
function calcularComanda ()
{
    const comida = prompt( 'Dime que quieres comer: Carne , pescado , risotto' ).toLocaleLowerCase()
    const bebida = prompt( 'Dime que quieres beber: vino , cerveza , refresco, agua' ).toLocaleLowerCase()
    const postre = prompt( 'Quieres postre?' ).toLocaleLowerCase()
    let precioComida = getPrecioComida( comida )
    let precioBebida = getPrecioBebida( bebida )
    let precioPostre = getPrecioPostre( postre )
    let resultado = precioComida + precioBebida + precioPostre
    let comanda = resultado + getPropina( resultado, 10 )
    console.log( `Te toca pagar ${ comanda }€` )
}
calcularComanda();
/**
 *** Comanda de un restaurante

        - hacer una pregunta por pantalla de que quiere cenar
                    - Carne -> 17€
                    - Pescado -> 20€
                    - Risotto -> 9€

        - hacer una pregunta que sea que quieres beber
                    - Vino - 10€
                    - Cerveza - 4€
                    - Refresco - 1,5€
                    - Agua - 0

        - Quieres postre SI o NO
                    - Postre 3€


    Hacer un programa que me recoja los valores seleccionados y me devuelva el importe a pagar mas una propina de 10%;
 */
const comida = prompt( 'Que vas a querer para comer? Carne, pescado, risotto' ).toLocaleLowerCase()
const bebida = prompt( 'Que vas a querer para beber? Vino, cerveza, refresco , agua' ).toLocaleLowerCase()
const postre = ( prompt( 'Vas a querer postre? SI o NO' ).toLocaleLowerCase() === 'si' ) ? 'postre' : 'No postre'
const calculateTicket = ( comida, bebida, postre ) =>
{
    let ticket = 0
    ticket += addToTicket( comida )
    ticket += addToTicket( bebida )
    ticket += addToTicket( postre )
    let ticketFinal = calculateTip( ticket, 10 )
    return ticketFinal
}

const addToTicket = ( item ) =>
{
    let ticket = 0
    switch ( item )
    {
        case 'carne':
            ticket = 17
            break
        case 'pescado':
            ticket = 20
            break
        case 'risotto':
            ticket = 9
            break
        case 'vino':
            ticket = 10
            break
        case 'cerveza':
            ticket = 4
            break
        case 'refresco':
            ticket = 1.5
            break
        case 'agua':
            ticket = 0
            break
        case 'postre':
            ticket = 3
            break
    }
    console.log( ticket )
    return ticket
}
const calculateTip = ( ticket, porcentaje ) =>
{
    porcentaje = ticket * ( porcentaje / 100 )
    let ticketPropina = porcentaje + ticket
    return ticketPropina
}
const imprimir = item => { document.write( item ) }
imprimir( calculateTicket( comida, bebida, postre ) )
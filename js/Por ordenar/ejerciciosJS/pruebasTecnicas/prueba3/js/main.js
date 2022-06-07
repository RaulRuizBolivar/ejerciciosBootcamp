const crearSaludable = ( listaAlimentos ) => {
    for ( let i = 0; i < listaAlimentos.length; i++ ) {
        listaAlimentos[ i ].saludable = false
        if ( listaAlimentos[ i ].cantidadCalorias < 15 ) {
            listaAlimentos[ i ].saludable = true
        }
    }
}

const esSaludable = ( lista, valor ) => {
    let listaSalud = []
    for ( alimento of lista ) {
        if ( alimento.saludable === valor ) {
            listaSalud.push( alimento )
        }
    }
    return listaSalud
}


const pintarAlimento = ( alimento ) => `<li class="${ ( alimento.saludable ) ? 'saludable' : 'noSaludable' }">${ alimento.nombreAlimento } , ${ alimento.cantidadCalorias } , ${ alimento.categoria }</li>`


const pintarTodosAlimentos = ( lista ) => {
    let ul = '<ul>'
    for ( alimento of lista ) {
        ul += pintarAlimento( alimento )
    }
    ul += '</ul>'
    document.write( ul )
}


crearSaludable( alimentos )
const listaSaludable = esSaludable( alimentos, true )
const listaNoSaludable = esSaludable( alimentos, false )
pintarTodosAlimentos( listaSaludable )
pintarTodosAlimentos( listaNoSaludable )
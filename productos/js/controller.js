const api = 'https://peticiones.online/api/products'
getProductos( api )

async function getProductos ( url ) {
    let response = await fetch( url, { method: 'get' } )
    let data = await response.json()
    pintarProductos( data.results )
    llenarSection( data )
}

async function getCategorias ( categoria, url ) {
    let response = await fetch( url, { method: 'get' } )
    let data = await response.json()
    filtrarPorCategoria( data.results, categoria )
}

function filtrarPorCategoria ( data, categoria ) {
    let listaFiltrada
    if ( categoria !== '' ) {
        listaFiltrada = data.filter( product => product.category === categoria )
    } else {
        listaFiltrada = data
    }
    pintarProductos( listaFiltrada )
}


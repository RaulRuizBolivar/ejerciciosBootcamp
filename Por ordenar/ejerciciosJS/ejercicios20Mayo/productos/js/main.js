/**
    <article>
        <h2>${nombre}</h2>
        <p>${price}</p>
        <p>${category}</p>
    </article>
 */

const pintarTodosProductos = ( lista ) =>
{
    for ( producto of lista )
    {
        pintarUnProducto( producto )
    }
}

const pintarUnProducto = ( producto ) =>
{
    let stock = ( producto.stock ) ? 'stock' : 'noStock'
    document.write(
        `<article class='${ stock }'>
        <h2>${ producto.name }</h2>
        <p>${ producto.price } $</p>
        <p>${ producto.category }</p>
    </article>`)
}




const filtrarPorPrecio = ( lista, filtroMin, filtroMax ) =>
{
    let listaFiltrada = []
    for ( producto of lista )
    {
        if ( producto.price < filtroMax && producto.price > filtroMin )
        {
            listaFiltrada.push( producto )
        }
    }
    return listaFiltrada
}

const filtrarPorCategoria = ( lista, filtro ) =>
{
    let listaFiltrada = []
    for ( producto of lista )
    {
        if ( producto.category.toLowerCase() === filtro.toLowerCase() )
        {
            listaFiltrada.push( producto )
        }
    }
    return listaFiltrada
}
const filtrarPorStock = ( lista, booleano ) =>
{
    let listaFiltrada = lista.filter(
        product => product.stock === booleano
    )
    return listaFiltrada
}

























const listaProductos1_3 = filtrarPorPrecio( products, 1, 3 )
const listaProteinas = filtrarPorCategoria( products, 'proteinas' )
const lista1_3Stock = filtrarPorStock( listaProductos1_3, true )
pintarTodosProductos( lista1_3Stock )
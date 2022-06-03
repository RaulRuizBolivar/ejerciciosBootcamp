const sectionProductos = document.querySelector( '#productos' )
const selectFiltro = document.querySelector( '#categorias' )


function pintarProductos ( lista ) {
    sectionProductos.innerHTML = ''
    lista.forEach( producto => pintarUnProducto( producto, sectionProductos ) );
}

function pintarUnProducto ( producto, dom ) {
    let article = document.createElement( 'article' )
    let button = document.createElement( 'button' )
    let figure = document.createElement( 'figure' )
    let img = document.createElement( 'img' )
    let h2 = document.createElement( 'h2' )
    let div = document.createElement( 'div' )
    let pPrice = document.createElement( 'p' )
    let pCategory = document.createElement( 'p' )

    article.classList.add( 'producto' )
    button.innerText = 'Añadir al carrito'
    img.src = producto.image
    img.alt = producto.title
    h2.innerText = producto.name
    pPrice.innerText = producto.price
    pCategory.innerText = producto.category

    figure.appendChild( img )
    div.append( pPrice, pCategory )
    article.append( button, figure, h2, div )
    dom.appendChild( article )
    button.addEventListener( 'click', addCarrito )
}

function llenarSection ( list ) {
    const listaCategorias = list.results.map( producto => producto.category )
    let resultado = [ ...new Set( listaCategorias ) ]

    for ( let categoria of resultado ) {
        let option = document.createElement( 'option' )
        option.value = categoria.toLowerCase()
        option.innerText = categoria
        selectFiltro.appendChild( option )
        selectFiltro.addEventListener( 'change', pintarPorCategoria )
    }
}

function pintarPorCategoria ( event ) {
    getCategorias( event.target.value, api )
}

function addCarrito ( event ) {
    alert( 'Añadido al carrito' )
}
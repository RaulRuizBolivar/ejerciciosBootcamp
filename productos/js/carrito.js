const cantidadCarrito = document.querySelector( 'header .carrito p' )
const ulCarrito = document.querySelector( 'section.carrito ul' )
const spanTotal = document.querySelector( 'section.carrito h3 span' )
const btn = document.querySelector( '.btn' )
let carrito = []
if ( localStorage.getItem( 'carrito' ) !== null ) {
    carrito = JSON.parse( localStorage.getItem( 'carrito' ) )
    cantidadCarrito.innerText = carrito.length
}

btn.addEventListener( 'click', () => {
    localStorage.removeItem( 'carrito' )
    carrito = []
    cantidadCarrito.innerText = carrito.length
    pintarCarrito( carrito, ulCarrito, spanTotal )
} )
function pintarCarrito ( carrito, dom, domTotal ) {
    if ( carrito.length === 0 ) {
        dom.innerHTML = `<li>NO HAY PRODUCTOS PENDIENTES DE COMPRA</li>`
    } else {
        carrito.forEach( producto => pintarProducto( producto, dom ) )
    }
    pintarTotal( carrito, domTotal )
}

function pintarProducto ( producto, dom ) {
    let precio = producto.price
    let titulo = producto.title
    let li = document.createElement( 'li' )
    let img = document.createElement( 'img' )
    img.src = producto.image
    li.append( img, `${ titulo } - ${ precio } €` )
    dom.appendChild( li )
}

function pintarTotal ( carrito, dom ) {
    let total = 0
    carrito.forEach( producto => total += producto.price )
    dom.innerText = total.toFixed( 2 )
}



pintarCarrito( carrito, ulCarrito, spanTotal )
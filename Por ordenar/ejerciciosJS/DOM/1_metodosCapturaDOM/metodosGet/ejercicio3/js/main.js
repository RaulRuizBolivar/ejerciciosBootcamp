//Quiero una aplicacion que cada vez que recargue la pagina me muestre un producto de mi array como producto destacado
//OJO solo un producto cada vez

const sectionDestacado = document.getElementById( 'destacado' )

const crearDestacado = lista => lista[ Math.floor( Math.random() * lista.length ) ]

let productoDestacado = crearDestacado( portatiles )

const pintarPortatil = ( DOM, producto ) => {
    DOM.innerHTML = `<h2>Productos destacados</h2><article><ul><li>${ producto.marca }</li>  <li>${ producto.modelo }</li>  <li>${ producto.precio }$</li></ul></article>`
}
//Cada vez que entro en la web
pintarPortatil( sectionDestacado, productoDestacado )

//Funciones intervalicas - Funciones que manejan tiempo en milisegundos

//setInterval => Recibe 2 parametros => 
//    El primero, la funcion que se ejecuta a cada intervalo
//    El segundo, el tiempo que tarda en repetirse esa llamada en milisegundos
//setTimeOut => Recibe 2 parametros=>
//    El primero, la funcion que se ejecuta
//    El segundo, el tiempo en milisegundos, pero en este caso solo se ejecuta una vez. Es una funcion de retraso

//Todas las funciones intervalicas tienen que estar asociadas a una variable

//Para parar un intervalo, se utiliza clearInterval(nombreDelIntervalo)

const intervalo = setInterval( () => {
    let laptop = crearDestacado( portatiles )
    pintarPortatil( sectionDestacado, laptop )
}, 5000 )
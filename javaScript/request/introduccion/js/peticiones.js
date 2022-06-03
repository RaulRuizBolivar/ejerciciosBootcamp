const sectionBlog = document.querySelector( '#blog' )

//Método Amazon
const url = 'https://jsonplaceholder.typicode.com/posts'

//Crear un objeto pedido
const pedido = new XMLHttpRequest()

//Abrir el canal de comunicacion con mi pagina
pedido.open( 'GET', url, true )
//GET -> para obtener informacion - solo recibe
//POST -> para enviar informacion - envia y recibe una contestacion
//PUT / PATH -> para actualizar informacion - envia y recibe una contestacion
//DELETE -> para borrar informacion - te envia un id y te devuelve una contestacion


//Hacemos un pedido, enviamos un pedido
pedido.send()

//Estoy atento a los cambios que hay en el pedido
pedido.addEventListener( 'load', cargarArchivo )

function cargarArchivo ( event ) {
    if ( event.target.status === 200 ) {
        let data = JSON.parse( event.target.responseText )
        pintarBlog( data, sectionBlog )
        console.log( data )
    } else {
        alert( 'Conexion perdida' )
    }
}

function pintarBlog ( lista, dom ) {
    lista.forEach( ( dato, index ) => pintarUnArticle( dom, dato, index ) )
}
function pintarUnArticle ( dom, dato, index ) {
    //Creamos las etiquetas
    let article = document.createElement( 'article' )
    let h3 = document.createElement( 'h3' )
    let p = document.createElement( 'p' )

    //Introducimos el texto
    h3.innerText = dato.title
    p.innerText = dato.body
    //Ponemos los estilos
    if ( index % 2 !== 0 ) {
        article.style.backgroundColor = 'black'
        h3.style.color = 'white'
        p.style.color = 'white'
    }
    h3.style.fontSize = '130%'
    h3.style.textTransform = 'upperCase'
    article.style.padding = '10px'
    //Los colocamos en el DOM
    article.append( h3, p )
    dom.appendChild( article )


}

/**
<article data-id="1">
    <h3>Titulo del articulo</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, beatae cumque sapiente vel tempore mollitia
        eveniet laborum ut tempora laboriosam. Perspiciatis temporibus sit qui distinctio? Nisi officiis dolorem
        consectetur eaque.</p>
</article>
 */
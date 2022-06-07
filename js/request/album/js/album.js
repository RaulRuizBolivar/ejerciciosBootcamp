const url = 'https://jsonplaceholder.typicode.com/photos'
const sectionAlbum = document.querySelector( '#album' )
const inputRange = document.querySelector( '#range' )


function getPhotos ( numImg ) {
    //Promesa, la uso para gestionar la peticion de imagenes de forma asincrona

    //Voy a hacer la peticion a la api dentro de mi promesa
    const cargaImagenes = new Promise( ( resolve, reject ) => {
        let pedido = new XMLHttpRequest()
        pedido.open( 'get', url, true )
        pedido.send()
        pedido.addEventListener( 'load', ( event ) => {
            if ( event.target.status === 200 ) {
                let response = JSON.parse( event.target.responseText )
                resolve( response.slice( 0, numImg ) )
            } else {
                reject( 'No se ha podido cargar el contenido' )
            }
        } )
    } )
    return cargaImagenes
}


range.addEventListener( 'input', recogerNumImg )

function recogerNumImg ( event ) {
    let num = parseInt( event.target.value )
    getPhotos( num )
        .then( ( arrayImg ) => { printImages( arrayImg, sectionAlbum ) } )
        .catch( error => console.log( error ) )
}

function printImages ( lista, dom ) {
    dom.innerText = ''
    lista.forEach( imagen => printOneImg( imagen, dom ) );
}

function printOneImg ( imagen, dom ) {

    let figure = document.createElement( 'figure' )
    let img = document.createElement( 'img' )
    let figcaption = document.createElement( 'figcaption' )


    img.src = imagen.thumbnailUrl
    img.alt = imagen.title
    figcaption.innerText = imagen.title
    figure.append( img, figcaption )
    dom.appendChild( figure )
}
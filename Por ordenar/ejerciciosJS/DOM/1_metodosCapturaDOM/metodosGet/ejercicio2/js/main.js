//Capturar los elementos que voy a trabajar de forma global
const sectionClasicos = document.getElementById( 'clasicos' )
const sectionNovedades = document.getElementById( 'novedades' )


console.log( libros )
//Filtrar la lista de libros por categoría que me devuelva una lista de una categoria concreta

const filtrarPorCategoria = ( lista, categoria ) => lista.filter( libro => libro.categoria.toLowerCase() === categoria.toLowerCase() )


let listaNovedades = filtrarPorCategoria( libros, 'novedades' )
let listaClasicos = filtrarPorCategoria( libros, 'clasicos' )


const printList = ( lista, objetoDom ) => { lista.forEach( libro => printBook( libro, objetoDom ) ) }

const printBook = ( libro, objetoDom ) => {
    objetoDom.innerHTML += `<article>
                                <h3>${ libro.titulo }</h3>
                                <p>Autor: ${ libro.autor }</p>
                            </article>`
}

printList( listaClasicos, sectionClasicos )
printList( listaNovedades, sectionNovedades )
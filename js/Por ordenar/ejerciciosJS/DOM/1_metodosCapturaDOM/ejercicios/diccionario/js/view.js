let seccion = ''
function printLista ( diccionario ) {
    console.log( diccionario )
    seccion += `<section><h2>${ diccionario[ 0 ].letter }</h2>`
    diccionario.forEach( elemento => {
        seccion += getElement( elemento )
    } );
    seccion += '</section>'
    document.body.innerHTML += seccion
}

function getElement ( elemento ) {
    return `<article>
    <dt>${ elemento.word }</dt>
    <dd>${ elemento.definition }</dd>
</article>`
}

let palabraC = filterByLetter( diccionario, 'c' )
printLista( palabraC )
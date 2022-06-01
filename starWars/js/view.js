const menuPeople = document.querySelector( '#personajes' );
const viewPerson = document.querySelector( '#vistaPersonaje' );
const botonesPag = document.querySelectorAll( '.botones div' );

function printMenu ( pData ) {
    menuPeople.innerHTML = "";
    pData.results.forEach( person => printPerson( person, menuPeople ) );
    //ojo me quedan los botones de paginacion.
    //console.log(pData)
    botonesPag[ 0 ].dataset.page = pData.previous;
    botonesPag[ 1 ].dataset.page = pData.next;

    botonesPag[ 0 ].style.display = ( pData.previous === null ) ? 'none' : 'block';
    botonesPag[ 1 ].style.display = ( pData.next === null ) ? 'none' : 'block';

    botonesPag.forEach( boton => boton.addEventListener( 'click', gotoPage ) );
}

function gotoPage ( event ) {
    let url = event.target.dataset.page;
    getDataMenu( url );
}




function printPerson ( pPerson, pDom ) {
    let li = document.createElement( 'li' );
    li.innerText = pPerson.name;
    //ojo el boton tiene que almacenar la url del personaje
    li.dataset.url = pPerson.url

    pDom.appendChild( li );
    li.addEventListener( 'click', getPersonInfo )

}

function getPersonInfo ( event ) {
    //con esta funcion vamos a cargar toda la informacion del personaje a derecha
    pararAudio()
    iniciarAudio()
    let url = event.target.dataset.url
    getDataInfo( url )
}

function pararAudio () {
    let audio = document.querySelector( 'audio' )
    if ( audio !== null ) {
        audio.parentNode.removeChild( audio )
    }
}

function iniciarAudio () {
    let audio = document.createElement( 'audio' )
    audio.src = './mp3/sable.mp3'
    audio.autoplay = 'autoplay'
    audio.id = 'sable'
    document.body.appendChild( audio )
}

function printCharacter ( data ) {
    viewPerson.innerHTML = ''
    let h2Name = document.createElement( 'h2' )
    h2Name.innerText = data.name
    let ul = document.createElement( 'ul' )
    ul.innerHTML = `<li>Altura: <span>${ data.height }</span></li>
    <li>Peso:<span> ${ data.mass }</span></li>
    <li>Color Piel: <span>${ data.skin_color }</span></li>
    <li>Color Pelo:<span> ${ data.hais_color }</span></li>
    <li>Genero:<span> ${ data.gender }</span></li>
    <li>Año de nacimiento: <span>${ data.birth_year }</span></li>`
    let h2Film = document.createElement( 'h2' )
    h2Film.innerText = 'Peliculas donde aparece'
    let div = document.createElement( 'div' )
    div.classList.add( 'peliculas' )
    viewPerson.append( h2Name, ul, h2Film, div )
    const films = data.films
    films.forEach( film => getDataInfo( film ) )
}

function printFilm ( data ) {
    console.log( data )
    let divPeliculas = viewPerson.querySelector( '.peliculas' )
    divPeliculas.innerHTML += `<article>
    <h3>${ data.title }</h3>
    <ul>
        <li>Capitulo: ${ data.episode_id }</li>
        <li>Director: ${ data.director }</li>
        <li>Año:${ data.release_date }</li>
    </ul>
</article>`
}
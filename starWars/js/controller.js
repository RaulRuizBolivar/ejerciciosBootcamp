const url = 'https://swapi.py4e.com/api/people/?page=1';

async function getDataMenu ( pUrl ) {
    const response = await fetch( pUrl, { method: 'GET' } );
    const data = await response.json();
    printMenu( data );
}
async function getDataInfo ( url ) {
    const response = await fetch( url, { method: 'get' } )
    const data = await response.json()


    if ( data.episode_id ) {
        //Soy una peli
        printFilm( data )
    } else {
        //Soy un personaje
        printCharacter( data )
    }
}
getDataMenu( url )
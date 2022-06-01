const url = 'https://reqres.in/api/users?page='
const sectionUsuarios = document.querySelector( '#usuarios' )
const selectPages = document.querySelector( '#paginas' )

selectPages.addEventListener( 'change', recogerSelect )

function recogerSelect ( event ) {
    if ( event.target.value === '0' ) {
        sectionUsuarios.innerText = ''
        cargarDatos( 1, true )
        cargarDatos( 2, true )
    } else {
        cargarDatos( event.target.value, false )
    }
}
async function cargarDatos ( page, isAll ) {
    //fetch es una promesa que me permite hacer peticiones asincronas a servicios HTTP externos
    let respuesta = await fetch( url + page, { method: 'get' } )
    let result = await respuesta.json()
    pintarUsuarios( result.data, sectionUsuarios, isAll )
}

function pintarUsuarios ( lista, dom, isAll ) {
    if ( !isAll ) {
        dom.innerText = ''
    }
    lista.forEach( usuario => {
        pintarUnUsuario( usuario, dom )
    } );
}

function pintarUnUsuario ( usuario, dom ) {
    let article = document.createElement( 'article' )
    let h2 = document.createElement( 'h2' )
    let p = document.createElement( 'p' )

    h2.innerText = `${ usuario.first_name } ${ usuario.last_name }`
    p.innerText = usuario.email

    article.append( h2, p )
    dom.appendChild( article )

}

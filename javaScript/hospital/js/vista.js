//Capturamos todos los elementos con los que interactuamos

let divNumPacientes = document.querySelector( '.numPacientes' )
let sectionPacientes = document.querySelector( '.contenedor' )

function printAllPatients ( list, dom, numPacientes ) {
    sectionPacientes.innerHTML = ''
    numPacientes.innerText = list.length
    list.forEach( patient => printOnePatient( patient, dom ) )
}
function printOnePatient ( patient, dom ) {
    let article = document.createElement( 'article' )
    article.classList.add( 'paciente' )
    let h3 = document.createElement( 'h3' )
    h3.innerText = `${ patient.nombre } ${ patient.apellido }`
    let ul = document.createElement( 'ul' )
    ul.innerHTML = `<li>Edad: ${ patient.edad }</li><li>Seguridad social: ${ patient.numeroSS }</li>`
    let div = document.createElement( 'div' )
    div.innerText = patient.diagnostico
    div.classList.add( 'diagnostico' )
    article.append( h3, ul, div )
    dom.appendChild( article )
}
printAllPatients( pacientes, sectionPacientes, divNumPacientes )
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

//Filtro de edad
//Capturamos los elementos con los que vamos a interacturar
let inputEdadMinima = document.querySelector( '#edadMin' )
let inputEdadMaxima = document.querySelector( '#edadMax' )
let boton = document.querySelector( '#btn' )
boton.addEventListener( 'click', recogerEdad )

function recogerEdad () {
    let edadMin = inputEdadMinima.value;
    let edadMax = inputEdadMaxima.value;
    if ( edadMin === '' || edadMax === '' ) {
        alert( 'Los cambios no pueden estar vacios' )
    } else if ( parseInt( edadMin ) > parseInt( edadMax ) ) {
        alert( 'La edad minima no puede ser mayor a la edad maxima' )
    }
    else {
        let listaFiltrada = filterByAge( pacientes, parseInt( edadMin ), parseInt( edadMax ) );
        printAllPatients( listaFiltrada, sectionPacientes, divNumPacientes );
    }
    inputEdadMaxima.value = ''
    inputEdadMinima.value = ''
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
//Filtro por diagnostico

//El filtro por diagnostico lo hacemos con un select
//El select tiene un tipo de evento asociado que se llama change, que solo reacciona cuando hay un cambio

//Capturamos los elementos de DOM con los que vamos a interactuar
let selectDiagnostico = document.querySelector( '#diagnostico' )
selectDiagnostico.addEventListener( 'change', recogerDatosSelect )
function recogerDatosSelect ( e ) {
    let diagnostico = e.target.value;
    const listaFiltrada = ( diagnostico !== '' ) ? filterByDiagnosis( pacientes, diagnostico ) : pacientes
    printAllPatients( listaFiltrada, sectionPacientes, divNumPacientes )
}

//Quiero llenar el selector de las efermendades que hay en mi array


function llenarSelector ( list, selector ) {
    //coger de la lista solo un array de diagnosticos
    const listaEnfermedades = list.map( patient => patient.diagnostico )
    //New Set es un metodo estatico que elimina elementos duplicados dentro de un array, modifica el array principal, luego es conveniente aplicarlo con spread operator
    let resultado = [ ...new Set( listaEnfermedades ) ]

    for ( let enfermedad of resultado ) {
        let option = document.createElement( 'option' )
        option.value = enfermedad.toLowerCase()
        option.innerText = enfermedad
        selector.appendChild( option )
    }
}
llenarSelector( pacientes, selectDiagnostico )

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
//Buscador Semantico / event input

//capturamos los elementos del DOM

let inputSearch = document.querySelector( '#search' )
inputSearch.addEventListener( 'input', recogerBusqueda )

function recogerBusqueda ( event ) {
    let busqueda = event.target.value
    printAllPatients( filterByName( pacientes, busqueda ), sectionPacientes, divNumPacientes )
}





// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
//Superfiltro supersahiyan 3
let selectDiagnostico2 = document.querySelector( '#diagnostico2' )
let inputEdadMinima2 = document.querySelector( '#edadMin2' )
let inputEdadMaxima2 = document.querySelector( '#edadMax2' )
let btn2 = document.querySelector( '#btn2' )
llenarSelector( pacientes, selectDiagnostico2 )
btn2.addEventListener( 'click', recogerDatosForm )


function recogerDatosForm ( event ) {
    event.preventDefault()
    let edadMin = inputEdadMinima2.value
    let edadMax = inputEdadMaxima2.value
    let diagnostico = selectDiagnostico2.value
    console.log( '%cvista.js line:115 edadMin , edadMax , diagnostico', 'color: #007acc;', edadMin, edadMax, diagnostico );
    printAllPatients( filterByDiagnosis( filterByAge( pacientes, edadMin, edadMax ), diagnostico ), sectionPacientes, divNumPacientes )

}
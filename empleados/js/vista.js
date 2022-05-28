const sectionEmpleados = document.querySelector( '#empleados' )
let sueldoMinimo = 900
let id = 3

const printOneEmployee = ( employee, dom ) => {
    let article = document.createElement( 'article' )
    let h2 = document.createElement( 'h2' )
    let pEmail = document.createElement( 'p' )
    let pSalary = document.createElement( 'p' )
    let sueldo = ( employee.sueldoMensual < sueldoMinimo ) ? 'sueldoIlegal' : 'sueldoLegal'
    pSalary.classList.add( sueldo )
    h2.innerText = employee.nombre
    pEmail.innerText = employee.email
    pSalary.innerText = employee.sueldoMensual
    article.append( h2, pEmail, pSalary )
    dom.appendChild( article )
}
const printAllEmployees = ( list, dom ) => {
    dom.innerHTML = ''
    list.forEach( employee => printOneEmployee( employee, dom ) );
}

/**
 * Validacion de formulario
 */

const inputSubmit = document.querySelector( '#addEmployee form input:last-child' )

inputSubmit.addEventListener( 'click', recogerDatos )
let inputs = document.querySelectorAll( '#addEmployee form input:not([disabled]):not([type="submit"])' )

function recogerDatos ( event ) {
    event.preventDefault()
    let resultado = true
    let name = inputs[ 0 ].value
    let email = inputs[ 1 ].value
    let sueldo = inputs[ 2 ].value
    inputs.forEach( input => validateForm( input, resultado ) )
    if ( resultado ) {
        guardarEmpleado( empleados, name, email, sueldo )
    }
    name = ''
    email = ''
    sueldo = ''
    id++
}


function validateForm ( input, resultado ) {
    if ( input.value === '' ) {
        alert( `El campo ${ input.id }  no puede estar vacio` )
        resultado = false
    }
    console.log( resultado )
    return resultado
}




printAllEmployees( empleados, sectionEmpleados )




function guardarEmpleado ( list, name, email, salary ) {
    const newEmployee = {
        id: id,
        nombre: name,
        email: email,
        sueldoMensual: salary
    }
    let newPosition = list.push( newEmployee )
    if ( newPosition ) {
        printOneEmployee( newEmployee, sectionEmpleados )
    }
}
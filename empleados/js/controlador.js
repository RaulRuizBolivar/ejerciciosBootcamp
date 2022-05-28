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
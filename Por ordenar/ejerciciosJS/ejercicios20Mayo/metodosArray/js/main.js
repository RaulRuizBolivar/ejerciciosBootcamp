const listaAlumnos = new Array(
    {
        nombre: 'Juan',
        edad: 40
    },
    {
        nombre: 'Pepe',
        edad: 56
    },
    {
        nombre: 'Rocio',
        edad: 37
    },
    {
        nombre: 'Samuel',
        edad: 24
    },
    {
        nombre: 'Pablo',
        edad: 20
    }
)


//Dado este array multidimensional de JSON quiero que me devolvais un array simple con los nombres de los alumnos

function buscar ( lista )
{
    let listaFiltrada = []
    lista.forEach(
        function ( alumno )
        {
            listaFiltrada.push( alumno.nombre )
        }
    )
    return listaFiltrada
}
const nombreAlumnos = buscar( listaAlumnos )
console.log( nombreAlumnos )

//Sacar por pantalla el nombre mas largo

function masLargo ( lista )
{
    let nombreMasLargo = ''
    lista.forEach(
        function ( nombre )
        {
            if ( nombre.length > nombreMasLargo.length )
            {
                nombreMasLargo = nombre
            }
        }
    )
    return nombreMasLargo
}
const nombreMasLargo = masLargo( nombreAlumnos )
console.log( nombreMasLargo )



const pintarAnimales = animales =>
{
    for ( let animal of animales )
    {
        pintarAnimal( animal )
    }

}

const pintarAnimal = ( animal ) =>
{
    document.write( `<article class="${ obtenerPeligrosidad( animal.peligrosidad ) }"><h3>${ animal.raza }</h3> <figure><img src="${ animal.foto }" alt="${ animal.raza }"></figure><p>Peso: ${ animal.peso } Kg</p></article>` );
}
const obtenerPeligrosidad = ( numero ) =>
{
    let peligrosidad = ""
    console.log( numero )
    switch ( numero )
    {
        case 1:
            peligrosidad = 'docil'
            break
        case 2:
            peligrosidad = 'suavecito'
            break
        case 3:
            peligrosidad = 'ojito'
            break
        case 4:
            peligrosidad = 'cuidadin'
            break
        case 5:
            peligrosidad = 'peligroso'
            break

    }
    return peligrosidad;
}
let id = 11;
const insertarAnimal = ( raza, peso, peligrosidad, foto, lista ) =>
{
    const newAnimal = {
        id: id,
        raza: raza,
        peso: peso,
        peligrosidad: peligrosidad,
        foto: foto
    }
    let posicionSiguiente = lista.length;
    lista[ posicionSiguiente ] = newAnimal
}

const filtrarPorPeligrosidad = ( lista, peligrosidad ) =>
{
    let listaFiltrada = []
    for ( let animal of lista )
    {
        if ( animal.peligrosidad === peligrosidad )
        {
            listaFiltrada.push( animal )
        }
    }
    return listaFiltrada
}

const buscarAnimal = ( lista, busqueda ) =>
{
    let listaFiltrada = []
    for ( let animal of lista )
    {
        if ( animal.raza.toLowerCase().includes( busqueda.toLowerCase() ) )
        {
            listaFiltrada.push( animal )
        }
    }
    return listaFiltrada
}


let listaAnimalesPeligrosidad = filtrarPorPeligrosidad( animales, 1 )
let listaAnimalesConLe = buscarAnimal( animales, 'le' )

insertarAnimal( 'jony', 80, 5, 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2020/11/johnny_depp_animales_fantasticos_y_donde_encontrarlos_david_yates.jpg?fit=1600%2C1067&ssl=1', animales )
pintarAnimales( listaAnimalesConLe )


function filterByAge ( pPatientList, pAgeMin, pAgeMax ) {

    return pPatientList.filter( patient => patient.edad >= pAgeMin && patient.edad <= pAgeMax )

}


function filterByDiagnosis ( pPatientList, pDiagnosis ) {
    return pPatientList.filter( patient => patient.diagnostico.toLowerCase() === pDiagnosis.toLowerCase() );
}


function filterByLastCharacter ( pPatientList, pCharacter ) {

    const listaFiltrada = pPatientList.filter( patient => {
        let lastCharacter = patient.numeroSS[ patient.numeroSS.length - 1 ];
        if ( lastCharacter === pCharacter ) {
            return patient
        }
    } )
    return listaFiltrada;
}


function filterByName ( list, word ) {
    return list.filter( patient => patient.nombre.toLowerCase().includes( word.toLowerCase() || patient.apellido.toLowerCase().includes( word.toLowerCase() ) ) )
}
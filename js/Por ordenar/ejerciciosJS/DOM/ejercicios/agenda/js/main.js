const sectionContact = document.querySelector( 'section.contact' )
let id = 1

const printAContact = ( contact, domElement ) => {
    let article = document.createElement( 'article' )
    let h2 = document.createElement( 'h2' )
    let pEmail = document.createElement( 'p' )
    let pTlf = document.createElement( 'p' )
    article.id = `id_${ contact.id }`
    h2.innerText = contact.name
    pEmail.innerText = contact.email
    pTlf.innerText = contact.tlf
    article.appendChild( h2 )
    article.appendChild( pTlf )
    article.appendChild( pEmail )
    domElement.appendChild( article )
}
const printAllContacts = ( list, domElement ) => {
    list.forEach( contact => {
        printAContact( contact, domElement )
    } );
}
const removeContact = ( num ) => {
    const contactAgendaToRemove = contactBook.indexOf( contact => contact.id === num )
    const contactToRemove = document.querySelector( '#id_' + num )
    contactToRemove.parentNode.removeChild( contactToRemove )
    contactBook.splice( contactAgendaToRemove, 1 )
}
const addContact = () => {
    let name = prompt( 'Tell me the name' )
    let tlf = parseInt( prompt( 'Tell me telephone number' ) )
    let email = prompt( 'Tell me the email' )
    const newContact = { id: id, name: name, tlf: tlf, email: email }
    contactBook.push( newContact )
    id++
    printAContact( newContact, sectionContact )
}




printAllContacts( contactBook, sectionContact )
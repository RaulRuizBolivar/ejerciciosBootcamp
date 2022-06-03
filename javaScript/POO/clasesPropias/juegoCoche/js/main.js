const escenario = document.querySelector( '#escenario' )
const topolino = new Coche( 'fiat', 'One', '#800040', escenario )
const ferrari = new Coche( 'Ferrari', 'F40', 'red', escenario )
const astonMartin = new Coche( 'Aston Martin', 'DBS', 'gray', escenario )

topolino.encenderse( 'ArrowRight', 'ArrowLeft' )
ferrari.encenderse( 'd', 'a' )
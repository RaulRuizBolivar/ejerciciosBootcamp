//Existen 2 funciones getAttribute y setAttribute

//getAttribute me lee el valor de cualquier atributo

//setAttribute modifica el valor de cualquier atributo

const cuadrado = document.querySelector( '.cuadrado' )

//Añadir un style o cualquier otro atributo
cuadrado.setAttribute( 'style', 'background-color: indigo; border-radius:50%; border: 2px solid black;' )
cuadrado.setAttribute( 'id', 'circulito' )
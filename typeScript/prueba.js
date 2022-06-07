var nombre = 'Raúl';
var edad;
edad = 40;
var estado = true;
console.log(edad * 5);
//Tengo 2 formas de definir un array:
var arrNum = new Array(1, 2, 3, 4, 5); // []
var arrNombres = [nombre, 'Juan', 'Pepe'];
//Funciones 
function sumar(numeroA, numeroB) {
    var resultado = numeroA + numeroB;
    return resultado;
}
//Funcion flecha
var restar = function (num1, num2) {
    return num1 - num2;
};
//Si quiero que la funcion no retorne nada ponemos un void
function saludar(nombre) {
    console.log('Hola ,' + nombre);
}
saludar('pepe');
var peticion = 2;
peticion = '2';
//any es un tipado de datos abierto
// TypeScript inicia un tipo concreto de Array que se llama TUPLA
var tupla = ['Raul', 25, true];
//Typescript tambie añade el concepto de enumerado
var Talla;
(function (Talla) {
    Talla[Talla["s"] = 0] = "s";
    Talla[Talla["sm"] = 1] = "sm";
    Talla[Talla["m"] = 2] = "m";
    Talla[Talla["l"] = 3] = "l";
    Talla[Talla["xl"] = 4] = "xl";
    Talla[Talla["xxl"] = 5] = "xxl";
})(Talla || (Talla = {}));
console.log(Talla);
console.log(Talla['0']);
console.log(Talla.xl);

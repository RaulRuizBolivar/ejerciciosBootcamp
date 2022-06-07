var Transformer = /** @class */ (function () {
    function Transformer() {
    }
    Transformer.prototype.sinEspacios = function (frase) {
        var resultado = frase.trim().split(' ').join('').toLocaleLowerCase();
        return resultado;
    };
    Transformer.prototype.cuantasVeces = function (frase) {
        var fraseSinEspacios = this.sinEspacios(frase);
        var resultado = fraseSinEspacios.length;
        return resultado;
    };
    Transformer.prototype.contarLetras = function (frase, letra) {
        var fraseSinEspacios = this.sinEspacios(frase);
        var resultado = fraseSinEspacios.split(letra);
        return resultado.length - 1;
    };
    return Transformer;
}());
var mensaje = 'En un lugar de la mancha';
var bumblebee = new Transformer();
console.log(bumblebee.cuantasVeces(mensaje));
console.log(bumblebee.contarLetras(mensaje, 'a'));
console.log(bumblebee.sinEspacios(mensaje));

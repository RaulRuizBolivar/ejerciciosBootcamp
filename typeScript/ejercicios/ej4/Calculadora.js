var Calculadora = /** @class */ (function () {
    function Calculadora(marca) {
        if (marca === void 0) { marca = 'LG'; }
        this.marca = '';
        this.marca = marca;
    }
    Calculadora.prototype.sumar = function () {
        var Numeros = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            Numeros[_i] = arguments[_i];
        }
        var resultado = 0;
        Numeros.forEach(function (numero) { return resultado += numero; });
        return resultado;
    };
    Calculadora.prototype.restar = function () {
        var Numeros = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            Numeros[_i] = arguments[_i];
        }
        var resultado = 0;
        Numeros.forEach(function (numero) { return resultado -= numero; });
        return resultado;
    };
    Calculadora.prototype.multiplicar = function () {
        var Numeros = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            Numeros[_i] = arguments[_i];
        }
        var resultado = 1;
        resultado = Numeros.reduce(function (prev, next) { return prev * next; });
        return resultado;
    };
    return Calculadora;
}());
var miCalculadora = new Calculadora('CASIO');
console.log(miCalculadora.sumar(1, 2, 3, 4, 5, 6, 7));
console.log(miCalculadora.restar(45, 3, 12));
console.log(miCalculadora.multiplicar(3, 4, 5, 6));

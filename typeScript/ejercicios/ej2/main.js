var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function reverseString(cadena) {
    var arrayCadena = cadena.split('');
    var arrayReverse = __spreadArray([], arrayCadena.reverse(), true);
    return arrayReverse.join('');
}
var nombre = 'Raul';
console.log(reverseString(nombre));

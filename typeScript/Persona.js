var Persona = /** @class */ (function () {
    function Persona() {
        this.age = 40;
        this.name = 'Juan';
    }
    Persona.prototype.saludar = function () {
        return 'Hola ' + this.name;
    };
    return Persona;
}());

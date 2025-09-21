var Usuario = /** @class */ (function () {
    function Usuario(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    Usuario.prototype.exibirInfo = function () {
        console.log('Usuario:${this.nome}- email:${this.email}');
    };
    return Usuario;
}());

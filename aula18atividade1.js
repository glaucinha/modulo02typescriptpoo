var CadastroUsuario1 = /** @class */ (function () {
    function CadastroUsuario1() {
    }
    CadastroUsuario1.prototype.registrar = function (nome, senha) {
        if (senha.length < 6) {
            throw new Error("Senha muito curta");
        }
        console.log("Usu\u00E1rio ".concat(nome, " registrado com sucesso!"));
    };
    return CadastroUsuario1;
}());
// Testes
var cadastro1 = new CadastroUsuario();
try {
    cadastro.registrar("Glaucia", "12345"); // senha inválida
}
catch (erro) {
    console.log("Erro:", erro.message);
}
try {
    cadastro.registrar("Glaucia", "123456"); // senha válida
}
catch (erro) {
    console.log("Erro:", erro.message);
}

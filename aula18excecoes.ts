class CadastroUsuario {
    registrar(nome: string, senha: string): void {
        if (senha.length < 6) {
            throw new Error("senha muito curta");
        }
        console.log(`Usuário ${nome} registrado com sucesso!`);
    }
}

const cadastro = new CadastroUsuario();

try {
    cadastro.registrar("Maria", "123"); // senha inválida
} catch (erro) {
    console.log("Erro:", (erro as Error).message);
}

try {
    cadastro.registrar("João", "123456"); // senha válida
} catch (erro) {
    console.log("Erro:", (erro as Error).message);
}
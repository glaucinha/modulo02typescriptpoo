class Cliente1 {
    public nome: string;
    public readonly cpf: string;
    private senha: string;

    constructor(nome: string, cpf: string, senha: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.senha = senha;
    }

    validarsenha(s: string): boolean {
        return this.senha === s;
    }
}

// Exemplo de uso
const clienteNovo = new Cliente1("Cezar", "123.456.789-00", "1234");

console.log(clienteNovo.nome);  
console.log(clienteNovo.cpf);   
console.log(clienteNovo.validarsenha("1234")); 
console.log(clienteNovo.validarsenha("0000")); 

class Cliente {
    nome: string;
    cpf: string;

    constructor(nome: string, cpf: string) {
        this.nome = nome;
        this.cpf = cpf;
    }

    saudar(): void {
        console.log(`Olá, ${this.nome}! Seu CPF é ${this.cpf}.`);
    }
}

// Criando duas instâncias
const cliente1 = new Cliente("Ana", "123.456.789-00");
const cliente2 = new Cliente("Carlos", "987.654.321-00");

// Chamando o método saudar para cada cliente
cliente1.saudar();
cliente2.saudar();
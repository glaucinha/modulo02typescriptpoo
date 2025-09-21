class Endereco {
    constructor(
        public rua: string,
        public numero: number,
        public cidade: string
    ) {}

    formatar(): string {
        return `${this.rua}, ${this.numero}, ${this.cidade}`;
    }
}

// criando instâncias
const endereco1 = new Endereco("Rua da concordia" , 250, "Recife");
const endereco2 = new Endereco("Av. Central", 456, "Rio de Janeiro");

// imprimindo resultados
console.log(endereco1.formatar());
console.log(endereco2.formatar());
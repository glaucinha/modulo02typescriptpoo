class Funcionario {
    setsalario(arg0: number) {
        throw new Error("Method not implemented.");
    }
    exibirdados() {
        throw new Error("Method not implemented.");
    }
    constructor(
        public nome: string,
        private salario: number,
        readonly id: number
    ) {}

    aumentarSalario(valor: number): void {
        this.salario += valor;
    }

    exibirFuncionario(): void {
        console.log(`Nome: ${this.nome}, Salário: R$${this.salario.toFixed(2)}, ID: ${this.id}`);
    }
}

const f1 = new Funcionario("glaucia", 2500, 1);
f1.exibirFuncionario();

f1.aumentarSalario(500);
f1.exibirFuncionario();

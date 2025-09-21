class Funcionario1 {
    public nome: string;
    private salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.setsalario(salario); // Garante validação ao criar
    }

    get salarioAtual(): number {
        return this.salario;
    }

    getsalario(): number {
        return this.salario;
    }

    setsalario(valor: number): void {
        if (valor < 1518) {
            console.log("Salário não pode ser menor que R$1.518,00. Valor não alterado.");
        } else {
            this.salario = valor;
        }
    }

    exibirdados(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Salário: R$${this.salario.toFixed(2)}`);
    }
}

// Testando
const funcionario1 = new Funcionario1("João", 2000);
funcionario1.exibirdados();

funcionario1.setsalario(1400); // Valor rejeitado
funcionario1.setsalario(1800); // Valor aceito
funcionario1.exibirdados();
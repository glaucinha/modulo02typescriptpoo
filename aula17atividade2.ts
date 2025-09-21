class Aluno1 {
    private nota: number = 0;

    getnota(): number {
        return this.nota;
    }

    setnota(valor: number): void {
        if (valor < 0 || valor > 10) {
            console.log("Nota inválida! Deve ser entre 0 e 10.");
        } else {
            this.nota = valor;
        }
    }
}

// Testando
const alunoTeste = new Aluno1();

alunoTeste.setnota(8);
console.log(alunoTeste.getnota()); // 8

alunoTeste.setnota(12); // Nota inválida
console.log(alunoTeste.getnota()); // 8, não alterou


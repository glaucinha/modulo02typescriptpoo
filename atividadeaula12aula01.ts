class Aluno {
    nome: string;
    idade: number;
    matricula: string;

    constructor(nome: string, idade: number, matricula: string) {
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
    }
}

class Turma {
    alunos: Aluno[] = [];

    adicionarAluno(aluno: Aluno): void {
        this.alunos.push(aluno);
    }

    listarAlunos(): void {
        console.log("Alunos da turma:");
        this.alunos.forEach((aluno, index) => {
            console.log(`${index + 1}. Nome: ${aluno.nome}, Idade: ${aluno.idade}, Matrícula: ${aluno.matricula}`);
        });
    }
}

// Criando alguns alunos
const aluno1 = new Aluno("Maria", 20, "A001");
const aluno2 = new Aluno("João", 22, "A002");
const aluno3 = new Aluno("Paula", 19, "A003");

// Criando a turma e adicionando alunos
const turma = new Turma();
turma.adicionarAluno(aluno1);
turma.adicionarAluno(aluno2);
turma.adicionarAluno(aluno3);

// Listando alunos da turma
turma.listarAlunos();

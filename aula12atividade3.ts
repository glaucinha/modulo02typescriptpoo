class Livro {
    constructor(public titulo: string, public autor: string) {}

    exibir(): string {
        return `Título: ${this.titulo}, Autor: ${this.autor}`;
    }
}

class Biblioteca {
    private livros: Livro[] = [];

    adicionarLivro(livro: Livro): void {
        this.livros.push(livro);
        console.log(`Livro "${livro.titulo}" adicionado à biblioteca.`);
    }

    buscarLivroPorTitulo(titulo: string): Livro | null {
        const livro = this.livros.find(l => l.titulo === titulo);
        return livro ? livro : null;
    }
}

const biblioteca = new Biblioteca();
const livro1 = new Livro("Dom Casmurro", "Machado de Assis");
const livro2 = new Livro("Memórias Póstumas de Brás Cubas", "Machado de Assis");

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);

const resultado = biblioteca.buscarLivroPorTitulo("Dom Casmurro");

if (resultado) {
    console.log("Livro encontrado:", resultado.exibir());
} else {
    console.log("Livro não encontrado.");
}

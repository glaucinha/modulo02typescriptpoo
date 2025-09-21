class Livro1 {
    titulo: string;
    autor: string;

    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
    }
}

class Estante {
    private livros: Livro[] = [];

    adicionarlivro(livro: Livro): void {
        this.livros.push(livro);
    }

    listarlivros(): void {
        if (this.livros.length === 0) {
            console.log("A estante está vazia.");
        } else {
            console.log("Livros na estante:");
            this.livros.forEach((livro, index) => {
                console.log(`${index + 1}. ${livro.titulo} - ${livro.autor}`);
            });
        }
    }
}

// Testando
const estante = new Estante();

const livro1_aula16 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien");
const livro2_aula16 = new Livro("Dom Casmurro", "Machado de Assis");

estante.adicionarlivro(livro1_aula16);
estante.adicionarlivro(livro2_aula16);

estante.listarlivros();

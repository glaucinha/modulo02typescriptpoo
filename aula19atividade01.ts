class Livro2 {
    private titulo: string;
    private autor: string;
    private ano: number;

    constructor(titulo: string, autor: string, ano: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    getTitulo(): string {
        return this.titulo;
    }
    getAutor(): string {
        return this.autor;
    }
    getAno(): number {
        return this.ano;
    }
}
class usuario {
    constructor(private nome: string, private email: string) {}

    getnome(): string {
        return this.nome;
    }
    getemail(): string {
        return this.email;
    }
}
class emprestimo {
    private livros: Livro2[] = [];

    constructor(private data: Date, private usuario: usuario) {}
     
    adicionarlivro(livro: Livro2): void {
        this.livros.push(livro);
    }
    exibirdetalhes(): void {
        console.log(`Emprestimo realizado em ${this.data.toLocaleDateString()}`);
        console.log(`usuario: ${this.usuario.getnome()}`);
        console.log("livros emprestados:");
        this.livros.forEach((livro, index) => {
            console.log(`${index + 1}. "${livro.getTitulo()}" de ${livro.getAutor()} (${livro.getAno()})`);
        });
    }
}

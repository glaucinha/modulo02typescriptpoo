;class Livro {
  constructor(
    public titulo: string,
    public autor: string,
    public ano: number
  ) {}
}

class Usuario {
  constructor(
    public nome: string,
    public email: string
  ) {}

  emprestarLivro(livro: Livro): Emprestimo {
    return new Emprestimo(new Date(), livro, this);
  }
}

class Emprestimo {
  constructor(
    public data: Date,
    public livro: Livro,
    public usuario: Usuario
  ) {}
}

// Exemplo de uso:
const livro = new Livro("Dom Casmurro", "Machado de Assis", 1899);
const usuario1 = new Usuario("João Silva", "joao@email.com");

const emprestimo1 = usuario1.emprestarLivro(livro);

console.log("Empréstimo realizado:");
console.log(`Usuário: ${emprestimo1.usuario.nome}`);
console.log(`Livro: ${emprestimo1.livro.titulo}`);
console.log(`Data: ${emprestimo1.data.toDateString()}`);

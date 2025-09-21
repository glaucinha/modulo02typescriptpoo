class produto {
    nome: string;
    preco: number;
    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }
    exibir(): void {
        console.log(`${this.nome} - R$ ${this.preco.toFixed(2)}`);
    }
}

class Carrinho {
    produtos: produto[] = [];
    adicionar(produto: produto): void {
        this.produtos.push(produto);
        console.log(`${produto.nome} adicionado ao carrinho.`);
    }

    calculartotal(): number {
        let total = 0;
        for (const p of this.produtos) {
            total += p.preco;
        }
        return total;
    }
    exibircarrinho(): void {
        console.log("produtos no carrinho:");
        for (const p of this.produtos) {
            p.exibir();
        }
        console.log(`total: R$ ${this.calculartotal().toFixed(2)}`);
    }
}

const p1 = new produto("Produto 1", 10.5);
const p2 = new produto("Produto 2", 20.0);

const carrinho = new Carrinho();
carrinho.adicionar(p1);
carrinho.adicionar(p2);
carrinho.exibircarrinho();

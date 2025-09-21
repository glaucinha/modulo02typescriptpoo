class Pedido {
    private itens: string[] = [];

    adicionarItem(item: string): void {
        this.itens.push(item);
        console.log(`Item "${item}" adicionado ao pedido.`);
    }

    finalizar(): void {
        if (this.itens.length === 0) {
            throw new Error("pedido nao pode ser finalizado sem itens");
        }
        console.log("Pedido finalizado com sucesso!");
    }
}

const pedido1 = new Pedido();

try {
    pedido1.finalizar(); // sem itens → erro
} catch (erro) {
    console.log("Erro:", (erro as Error).message);
}

const pedido2 = new Pedido();
pedido2.adicionarItem("Biscoito");
pedido2.adicionarItem("Feijão");

try {
    pedido2.finalizar(); // com itens → sucesso
} catch (erro) {
    console.log("Erro:", (erro as Error).message);
}

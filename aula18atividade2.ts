class Produto {
    private preco: number = 0;

    setPreco(valor: number): void {
        if (valor <= 0) {
            throw new Error("O preço deve ser maior que zero.");
        }
        this.preco = valor;
        console.log(`Preço definido: R$${this.preco.toFixed(2)}`);
    }

    getPreco(): number {
        return this.preco;
    }
}

const produto1 = new Produto();

try {
    produto1.setPreco(-10); // inválido
} catch (erro) {
    console.log("Erro:", (erro as Error).message);
}

try {
    produto1.setPreco(50); // válido
    console.log("Preço atual:", produto1.getPreco());
} catch (erro) {
    console.log("Erro:", (erro as Error).message);
}
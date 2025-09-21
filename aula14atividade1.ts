abstract class Animal {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    abstract emitirsom(): void;

    apresentar(): void {
        console.log(`Meu nome é ${this.nome}`);
    }
}

class Cachorro extends Animal {
    emitirsom(): void {
        console.log("Au au");
    }
}

class Gato extends Animal {
    emitirsom(): void {
        console.log("Miau");
    }
}

// Criando objetos
const cachorro = new Cachorro("Rex");
const gato = new Gato("Mimi");

cachorro.apresentar();
cachorro.emitirsom();

gato.apresentar();
gato.emitirsom();

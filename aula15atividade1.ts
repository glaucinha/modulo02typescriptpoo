interface Veiculo {
    marca: string;
    modelo: string;
    ligar(): void;
    desligar(): void;
}

class Carro implements Veiculo {
    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    ligar(): void {
        console.log(`O carro ${this.marca} ${this.modelo} está ligado.`);
    }

    desligar(): void {
        console.log(`O carro ${this.marca} ${this.modelo} foi desligado.`);
    }
}

class Moto implements Veiculo {
    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    ligar(): void {
        console.log(`A moto ${this.marca} ${this.modelo} está ligada.`);
    }

    desligar(): void {
        console.log(`A moto ${this.marca} ${this.modelo} foi desligada.`);
    }
}

// Testando
const carro1 = new Carro("Toyota", "Corolla");
const moto1 = new Moto("Honda", "CG 160");

carro1.ligar();
carro1.desligar();

moto1.ligar();
moto1.desligar();

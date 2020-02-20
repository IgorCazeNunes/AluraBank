import { Printable } from "./Printable";

export class Negociacao implements Printable {

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {
    
    }

    get volume() {
        return this.quantidade * this.valor;
    }
    
    toString(): void {
        console.log('-- toString --');
        
        console.log(
            `Data: ${this.data}
            Quantidade: ${this.quantidade}, 
            Valor: ${this.valor}, 
            Volume: ${this.volume}`
        );
    }
}
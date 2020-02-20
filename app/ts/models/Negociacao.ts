import { Printable } from "./Printable";
import { Equalable } from "./Equalable";

export class Negociacao implements Printable, Equalable<Negociacao> {

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

    equal(negociacao: Negociacao): boolean {
        return this.data.getDate() == negociacao.data.getDate()
            && this.data.getMonth() == negociacao.data.getMonth()
            && this.data.getFullYear() == negociacao.data.getFullYear();
    }
}
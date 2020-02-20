import { Negociacao } from './Negociacao';
import { Printable } from './Printable';

export class ListaNegociacao implements Printable {

    private _listaNegociacao: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this._listaNegociacao.push(negociacao);
    }

    paraArray() {
        return ([] as Negociacao[]).concat(this._listaNegociacao);
    }

    toString(): void {
        console.log('-- toString --');
        console.log(JSON.stringify(this._listaNegociacao));
    }
}
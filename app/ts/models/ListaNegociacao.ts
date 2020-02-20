import { Negociacao } from './Negociacao';
import { Printable } from './Printable';
import { Equalable } from './Equalable';

export class ListaNegociacao implements Printable, Equalable<ListaNegociacao> {

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

    equal(listaNegociacoes: ListaNegociacao): boolean {
        return JSON.stringify(this._listaNegociacao.toString()) == JSON.stringify(listaNegociacoes.toString());
    }
}
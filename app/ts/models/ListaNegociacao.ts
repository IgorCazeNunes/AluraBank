import { Negociacao } from './Negociacao';

export class ListaNegociacao {

    private _listaNegociacao: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this._listaNegociacao.push(negociacao);
    }

    paraArray() {
        return ([] as Negociacao[]).concat(this._listaNegociacao);
    }

}
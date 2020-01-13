import {
    ListaNegociacaoView,
    MensagemView
} from '../views/index';

import {
    ListaNegociacao,
    Negociacao
} from '../models/index';

export class NegociacaoController {

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;

    private _listaNegociacao = new ListaNegociacao();
    private _listaNegociacaoView = new ListaNegociacaoView('#listaNegociacaoView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacaoView.update(this._listaNegociacao);
    }

    adiciona(event: Event) {
        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if(!this._ehDiaUtil(data)) {
            this._mensagemView.update('Negociação negada, aceitamos somente negociações em dias úteis!');
            return;
        }

        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, ',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val()));

        this._listaNegociacao.adiciona(negociacao);
        this._listaNegociacaoView.update(this._listaNegociacao);

        this._mensagemView.update('Negociação adicionada com sucesso!');
    }

    private _ehDiaUtil(data: Date) {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }

}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}
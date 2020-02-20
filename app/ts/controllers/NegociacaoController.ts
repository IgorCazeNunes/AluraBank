import {
    ListaNegociacaoView,
    MensagemView
} from '../views/index';

import {
    ListaNegociacao,
    Negociacao
} from '../models/index';

import {
    domInject,
    throttle
} from '../helpers/decorators/index';

import {
    NegociacaoService
} from '../services/index';

import {
    print
} from '../helpers/index';

export class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _listaNegociacao = new ListaNegociacao();
    private _listaNegociacaoView = new ListaNegociacaoView('#listaNegociacaoView');
    private _mensagemView = new MensagemView('#mensagemView');

    private _service = new NegociacaoService();

    constructor() {
        this._listaNegociacaoView.update(this._listaNegociacao);
    }

    @throttle()
    adiciona() {
        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if (!this._ehDiaUtil(data)) {
            this._mensagemView.update('Negociação negada, aceitamos somente negociações em dias úteis!');
            return;
        }

        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, ',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val()));

        this._listaNegociacao.adiciona(negociacao);
        this._listaNegociacaoView.update(this._listaNegociacao);

        print(negociacao, this._listaNegociacao);

        this._mensagemView.update('Negociação adicionada com sucesso!');
    }

    private _ehDiaUtil(data: Date) {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }

    @throttle()
    importaDados() {
        this._service
            .obterNegociacoes(res => {
                if (res.ok) {
                    return res;
                } else {
                    throw new Error(res.statusText);
                }
            })
            .then(negociacoesParaImportar => {

                const negociacoesJaImportadas = this._listaNegociacao.paraArray();

                negociacoesParaImportar
                    .filter(negociacao => 
                        !negociacoesJaImportadas.some(jaImportada => 
                            negociacao.equal(jaImportada)))
                    .forEach(negociacao => 
                    this._listaNegociacao.adiciona(negociacao));

                this._listaNegociacaoView.update(this._listaNegociacao);
            });
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
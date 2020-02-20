import {
    ListaNegociacaoView,
    MensagemView
} from '../views/index';

import {
    ListaNegociacao,
    Negociacao,
    NegociacaoParcial
} from '../models/index';

import {
    domInject,
    throttle
} from '../helpers/decorators/index';

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

        this._mensagemView.update('Negociação adicionada com sucesso!');
    }

    private _ehDiaUtil(data: Date) {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }

    @throttle()
    importaDados() {
        function isOK(res: Response) {
            if (res.ok) {
                return res;
            } else {
                throw new Error(res.statusText);
            }
        }

        fetch('http://localhost:8080/dados')
            .then(res => isOK(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) => {
                dados.map(dado => 
                    new Negociacao(new Date(), dado.vezes, dado.montante)
                )
                .forEach(negociacao => 
                    this._listaNegociacao.adiciona(negociacao)
                );

                this._listaNegociacaoView.update(this._listaNegociacao);
            })
            .catch(error => console.log(error.message));
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
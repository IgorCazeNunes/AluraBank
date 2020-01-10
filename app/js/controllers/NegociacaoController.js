System.register(["../views/ListaNegociacaoView", "../views/MensagemView", "../models/ListaNegociacao", "../models/Negociacao"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ListaNegociacaoView_1, MensagemView_1, ListaNegociacao_1, Negociacao_1, NegociacaoController;
    return {
        setters: [
            function (ListaNegociacaoView_1_1) {
                ListaNegociacaoView_1 = ListaNegociacaoView_1_1;
            },
            function (MensagemView_1_1) {
                MensagemView_1 = MensagemView_1_1;
            },
            function (ListaNegociacao_1_1) {
                ListaNegociacao_1 = ListaNegociacao_1_1;
            },
            function (Negociacao_1_1) {
                Negociacao_1 = Negociacao_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._listaNegociacao = new ListaNegociacao_1.ListaNegociacao();
                    this._listaNegociacaoView = new ListaNegociacaoView_1.ListaNegociacaoView('#listaNegociacaoView');
                    this._mensagemView = new MensagemView_1.MensagemView('#mensagemView');
                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                    this._listaNegociacaoView.update(this._listaNegociacao);
                }
                adiciona(event) {
                    event.preventDefault();
                    const negociacao = new Negociacao_1.Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._listaNegociacao.adiciona(negociacao);
                    this._listaNegociacaoView.update(this._listaNegociacao);
                    this._mensagemView.update('Negociação adicionada com sucesso!');
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});

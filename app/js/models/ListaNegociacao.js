System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ListaNegociacao;
    return {
        setters: [],
        execute: function () {
            ListaNegociacao = class ListaNegociacao {
                constructor() {
                    this._listaNegociacao = [];
                }
                adiciona(negociacao) {
                    this._listaNegociacao.push(negociacao);
                }
                paraArray() {
                    return this._listaNegociacao;
                }
            };
            exports_1("ListaNegociacao", ListaNegociacao);
        }
    };
});

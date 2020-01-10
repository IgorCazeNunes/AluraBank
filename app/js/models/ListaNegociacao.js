class ListaNegociacao {
    constructor() {
        this._listaNegociacao = [];
    }
    adiciona(negociacao) {
        this._listaNegociacao.push(negociacao);
    }
    paraArray() {
        return this._listaNegociacao;
    }
}

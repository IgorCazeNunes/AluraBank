class NegociacaoController {
    constructor() {
        this._listaNegociacao = new ListaNegociacao();
        this._listaNegociacaoView = new ListaNegociacaoView('#listaNegociacaoView');
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._listaNegociacaoView.update(this._listaNegociacao);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._listaNegociacao.adiciona(negociacao);
        this._listaNegociacaoView.update(this._listaNegociacao);
    }
}

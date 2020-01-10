class NegociacaoController {
    constructor() {
        this._listaNegociacao = new ListaNegociacao();
        this._listaNegociacaoView = new ListaNegociacaoView('#listaNegociacaoView');
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacaoView.update(this._listaNegociacao);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
        this._listaNegociacao.adiciona(negociacao);
        this._listaNegociacaoView.update(this._listaNegociacao);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }
}

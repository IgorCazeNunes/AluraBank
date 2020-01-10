class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;

    private _listaNegociacao = new ListaNegociacao();
    private _listaNegociacaoView = new ListaNegociacaoView('#listaNegociacaoView');

    constructor() {
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');

        this._listaNegociacaoView.update(this._listaNegociacao);
    }

    adiciona(event: Event) {
        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value));

        this._listaNegociacao.adiciona(negociacao);
        this._listaNegociacaoView.update(this._listaNegociacao);
    }

}
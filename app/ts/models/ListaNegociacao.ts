class ListaNegociacao {

    private _listaNegociacao: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this._listaNegociacao.push(negociacao);
    }

    paraArray() {
        return this._listaNegociacao;
    }

}
class View {
    constructor(seletor) {
        this._elemento = $(seletor);
    }
    get elemento() {
        return this._elemento;
    }
    update(model) {
        this._elemento.html(this.template(model));
    }
}

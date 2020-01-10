class View {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    get elemento() {
        return this._elemento;
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}

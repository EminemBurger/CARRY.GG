import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("CARRY.GG");
    }

    async getHtml() {
        return ``;
    }
}
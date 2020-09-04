import {ResultItemDOMFactory} from "../Service/ResultItemDOMFactory.js";

export class ResultPanel {
    constructor() {
        this.ResultPanel = document.querySelector('.result-panel');
        this.ResultItemFactory = new ResultItemDOMFactory();
    }

    generateResultItem(BMI) {
        return this.ResultItemFactory.create(BMI);
    }

    renderResultPanel(BMICollection) {
        this.clearResultPanel();
        BMICollection.forEach(function (BMI) {
            this.ResultPanel.appendChild(this.generateResultItem(BMI));
        }, this);
    }

    clearResultPanel() {
        this.ResultPanel.innerHTML = '';
    }
}

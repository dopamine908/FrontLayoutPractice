import {ResultShowDOMFactory} from "../Service/ResultShowDOMFactory.js";

export class BMIForm {
    constructor() {
        this.BMIForm = document.querySelector('#bmi_form');
        this.ResultShowFactory = new ResultShowDOMFactory();
    }

    clearButton() {
        document.querySelector('#submit_form').classList.add('display-none');
    }

    showButton() {
        document.querySelector('#submit_form').classList.remove('display-none');
    }

    clearResultShow() {
        document.querySelector('.result-show').remove();
    }

    renderCalculateResult(BMI) {
        this.clearButton();
        this.BMIForm.appendChild(this.ResultShowFactory.create(BMI))
    }

    renderOriginalForm() {
        console.log('render original');
        this.showButton();
        this.clearResultShow();
    }

}

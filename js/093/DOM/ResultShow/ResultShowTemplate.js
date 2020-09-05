export class ResultShowTemplate {
    constructor(bmi_value) {
        this.generateDiv();
        this.generateBMIResultValueDiv(bmi_value);
        this.generateBMIResultLevelDiv();
        this.appendValueAndResult();
    }

    generateDiv() {
        this.DOM = document.createElement('div');
        this.DOM.classList.add('result-show');
    }

    generateBMIResultValueDiv(bmi_value) {
        this.BMIResultValueDOM = document.createElement('div');
        this.BMIResultValueDOM.classList.add('bmi-result-value');
        this.BMIResultValueDOM.classList.add(this.getBMIResultValueClass()); //

        let p_bmi_value_number = document.createElement('p');
        p_bmi_value_number.textContent = bmi_value;
        let p_bmi_result_title = document.createElement('p');
        p_bmi_result_title.classList.add('bmi-result-title');
        p_bmi_result_title.textContent = 'bmi';
        let div_restart = document.createElement('div');
        div_restart.classList.add('restart');
        div_restart.classList.add(this.getDivRestartClass()); //

        let img_refresh = document.createElement('img');
        img_refresh.src = '../../img/093/icons_loop.png';

        div_restart.appendChild(img_refresh);
        this.BMIResultValueDOM.appendChild(p_bmi_value_number);
        this.BMIResultValueDOM.appendChild(p_bmi_result_title);
        this.BMIResultValueDOM.appendChild(div_restart);
    }

    generateBMIResultLevelDiv() {
        this.BMIResultLevelDOM = document.createElement('div');
        this.BMIResultLevelDOM.classList.add('bmi-result-level');
        this.BMIResultLevelDOM.classList.add(this.getBMIResultLevelClass()); //
        this.BMIResultLevelDOM.textContent = this.getBMILevelViewText();
    }

    appendValueAndResult() {
        this.DOM.appendChild(this.BMIResultValueDOM);
        this.DOM.appendChild(this.BMIResultLevelDOM);
    }

    getBMILevelViewText() {
    }

    getBMIResultValueClass() {
    }

    getDivRestartClass() {
    }

    getBMIResultLevelClass() {
    }

    getNode() {
        return this.DOM;
    }
}

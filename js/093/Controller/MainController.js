import {BMI as BMIRepo} from "../Repositories/BMI.js";
import {ResultPanel} from "../DOM/ResultPanel.js";
import {BMIForm} from "../DOM/BMIForm.js";

export class MainController {
    constructor() {
        this.BMIRepository = new BMIRepo();
        this.ResultPanelDOM = new ResultPanel();
        this.BMIFormDOM = new BMIForm();
    }

    addBMI(bmi) {
        this.BMIRepository.createBMI(bmi);
    }

    initialPage() {
        this.renderResultPanel();
    }

    renderResultPanel() {
        const BMICollection = this.BMIRepository.getAllBMI();
        this.ResultPanelDOM.renderResultPanel(BMICollection)
    }

    renderCalculateResult(bmi) {
        this.BMIFormDOM.renderCalculateResult(bmi);
    }

    renderOriginalForm() {
        this.BMIFormDOM.renderOriginalForm();
    }

}

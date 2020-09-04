import {BMI as BMIRepo} from "../Repositories/BMI.js";
import {ResultPanel } from "../DOM/ResultPanel.js";

export class MainController {
    constructor() {
        this.BMIRepository = new BMIRepo();
        this.ResultPanelDOM=new ResultPanel();
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
}

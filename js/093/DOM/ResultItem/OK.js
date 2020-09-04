import {ResultItemTemplate} from "./ResultItemTemplate.js";

export class OK extends ResultItemTemplate {
    constructor(BMI) {
        super(BMI);
    }

    decideItemType() {
        this.DOM.classList.add('bmi-ok');
    }

}

import {ResultItemTemplate} from "./ResultItemTemplate.js";

export class TooLight extends ResultItemTemplate {
    constructor(BMI) {
        super(BMI);
    }

    decideItemType() {
        this.DOM.classList.add('bmi-too-light');
    }

}

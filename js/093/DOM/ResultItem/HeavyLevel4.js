import {ResultItemTemplate} from "./ResultItemTemplate.js";

export class HeavyLevel4 extends ResultItemTemplate {
    constructor(BMI) {
        super(BMI);
    }

    decideItemType() {
        this.DOM.classList.add('bmi-heavy-level-4');
    }

}

import {ResultItemTemplate} from "./ResultItemTemplate.js";

export class HeavyLevel2 extends ResultItemTemplate {
    constructor(BMI) {
        super(BMI);
    }

    decideItemType() {
        this.DOM.classList.add('bmi-heavy-level-2');
    }

}

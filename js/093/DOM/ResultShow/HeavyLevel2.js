import {ResultShowTemplate} from "./ResultShowTemplate.js";

export class HeavyLevel2 extends ResultShowTemplate {
    constructor(bmi_value) {
        super(bmi_value);
    }

    getBMILevelViewText(bmi_level) {
        return '輕度肥胖';
    }

    getBMIResultValueClass() {
        return 'result-heavy-level-2-circle';
    }

    getDivRestartClass() {
        return 'heavy-level-2-restart';
    }

    getBMIResultLevelClass() {
        return 'font-heavy-level-2-color';
    }
}

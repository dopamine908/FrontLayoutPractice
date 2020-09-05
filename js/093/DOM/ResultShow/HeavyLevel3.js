import {ResultShowTemplate} from "./ResultShowTemplate.js";

export class HeavyLevel3 extends ResultShowTemplate {
    constructor(bmi_value) {
        super(bmi_value);
    }

    getBMILevelViewText(bmi_level) {
        return '中度肥胖';
    }

    getBMIResultValueClass() {
        return 'result-heavy-level-3-circle';
    }

    getDivRestartClass() {
        return 'heavy-level-3-restart';
    }

    getBMIResultLevelClass() {
        return 'font-heavy-level-3-color';
    }
}

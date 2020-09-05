import {ResultShowTemplate} from "./ResultShowTemplate.js";

export class HeavyLevel4 extends ResultShowTemplate {
    constructor(bmi_value) {
        super(bmi_value);
    }

    getBMILevelViewText(bmi_level) {
        return '重度肥胖';
    }

    getBMIResultValueClass() {
        return 'result-heavy-level-4-circle';
    }

    getDivRestartClass() {
        return 'heavy-level-4-restart';
    }

    getBMIResultLevelClass() {
        return 'font-heavy-level-4-color';
    }
}

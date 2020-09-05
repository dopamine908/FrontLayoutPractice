import {ResultShowTemplate} from "./ResultShowTemplate.js";

export class HeavyLevel1 extends ResultShowTemplate {
    constructor(bmi_value) {
        super(bmi_value);
    }

    getBMILevelViewText(bmi_level) {
        return '過重';
    }

    getBMIResultValueClass() {
        return 'result-heavy-level-1-circle';
    }

    getDivRestartClass() {
        return 'heavy-level-1-restart';
    }

    getBMIResultLevelClass() {
        return 'font-heavy-level-1-color';
    }
}

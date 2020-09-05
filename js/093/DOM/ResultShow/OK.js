import {ResultShowTemplate} from "./ResultShowTemplate.js";

export class OK extends ResultShowTemplate {
    constructor(bmi_value) {
        super(bmi_value);
    }

    getBMILevelViewText(bmi_level) {
        return '理想';
    }

    getBMIResultValueClass() {
        return 'result-ok-circle';
    }

    getDivRestartClass() {
        return 'ok-restart';
    }

    getBMIResultLevelClass() {
        return 'ok-font-color';
    }
}

import {ResultShowTemplate} from "./ResultShowTemplate.js";

export class TooLight extends ResultShowTemplate {
    constructor(bmi_value) {
        super(bmi_value);
    }

    getBMILevelViewText(bmi_level) {
        return '過輕';
    }

    getBMIResultValueClass() {
        return 'result-too-light-circle';
    }

    getDivRestartClass() {
        return 'too-light-restart';
    }

    getBMIResultLevelClass() {
        return 'too-light-font-color';
    }

}

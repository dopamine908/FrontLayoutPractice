// import {OK} from "./OK";
// import {TooLight} from "./TooLight";
// import {HeavyLevel1} from "./HeavyLevel1";
// import {HeavyLevel2} from "./HeavyLevel2";
// import {HeavyLevel3} from "./HeavyLevel3";
// import {HeavyLevel4} from "./HeavyLevel4";

export class ResultItemTemplate {
    constructor(BMI) {
        this.generateLi();
        this.decideItemType();
        this.appendTitleDiv(BMI.bmi_level);
        this.appendBMIValueDiv(BMI.bmi_value);
        this.appendWeightDiv(BMI.weight);
        this.appendHeightDiv(BMI.height);
        this.appendTimeDiv(BMI.time);
    }

    generateLi() {
        this.DOM = document.createElement('li');
        this.DOM.classList.add('result-item');
    }

    decideItemType() {
    }

    appendTitleDiv(bmi_level) {
        let div_title = document.createElement('div');
        div_title.classList.add('item-content');
        div_title.classList.add('item-title');
        div_title.textContent = this.getBMILevelViewText(bmi_level);
        this.DOM.appendChild(div_title);
    }

    appendBMIValueDiv(bmi_value) {
        let div_bmi_value = document.createElement('div');
        div_bmi_value.classList.add('item-content');
        div_bmi_value.insertAdjacentHTML('afterbegin', 'BMI <span class="result-data">' + bmi_value + '</span>');

        this.DOM.appendChild(div_bmi_value);
    }

    appendWeightDiv(weight) {
        let div_weight = document.createElement('div');
        div_weight.classList.add('item-content');
        div_weight.insertAdjacentHTML('afterbegin', 'weight <span class="result-data">' + weight + '</span>');
        this.DOM.appendChild(div_weight);
    }

    appendHeightDiv(height) {
        let div_height = document.createElement('div');
        div_height.classList.add('item-content');
        div_height.insertAdjacentHTML('afterbegin', 'height <span class="result-data">' + height + '</span>');
        this.DOM.appendChild(div_height);
    }

    appendTimeDiv(time) {
        let div_time = document.createElement('div');
        div_time.classList.add('item-content');
        div_time.textContent = time;
        this.DOM.appendChild(div_time);
    }

    getBMILevelViewText(bmi_level) {
        let view_text;
        switch (bmi_level) {
            case 'ok':
                view_text = '理想';
                break;
            case 'too_light':
                view_text = '過輕';
                break;
            case 'level_1':
                view_text = '過重';
                break;
            case 'level_2':
                view_text = '輕度肥胖';
                break;
            case 'level_3':
                view_text = '中度肥胖';
                break;
            case 'level_4':
                view_text = '重度肥胖';
                break;
        }
        return view_text;
    }

    getNode() {
        return this.DOM;
    }
}

import {TooLight} from "../DOM/ResultShow/TooLight.js";
import {OK} from "../DOM/ResultShow/OK.js";
import {HeavyLevel1} from "../DOM/ResultShow/HeavyLevel1.js";
import {HeavyLevel2} from "../DOM/ResultShow/HeavyLevel2.js";
import {HeavyLevel3} from "../DOM/ResultShow/HeavyLevel3.js";
import {HeavyLevel4} from "../DOM/ResultShow/HeavyLevel4.js";

export class ResultShowDOMFactory {
    create(BMI) {
        let result_show_dom;
        switch (BMI.bmi_level) {
            case 'ok':
                result_show_dom = (new OK(BMI.bmi_value)).getNode();
                break;
            case 'too_light':
                result_show_dom = (new TooLight(BMI.bmi_value)).getNode();
                break;
            case 'level_1':
                result_show_dom = (new HeavyLevel1(BMI.bmi_value)).getNode();
                break;
            case 'level_2':
                result_show_dom = (new HeavyLevel2(BMI.bmi_value)).getNode();
                break;
            case 'level_3':
                result_show_dom = (new HeavyLevel3(BMI.bmi_value)).getNode();
                break;
            case 'level_4':
                result_show_dom = (new HeavyLevel4(BMI.bmi_value)).getNode();
                break;
        }
        return result_show_dom;
    }
}

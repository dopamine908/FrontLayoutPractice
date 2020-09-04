import {OK} from "../DOM/ResultItem/OK.js";
import {TooLight} from "../DOM/ResultItem/TooLight.js";
import {HeavyLevel1} from "../DOM/ResultItem/HeavyLevel1.js";
import {HeavyLevel2} from "../DOM/ResultItem/HeavyLevel2.js";
import {HeavyLevel3} from "../DOM/ResultItem/HeavyLevel3.js";
import {HeavyLevel4} from "../DOM/ResultItem/HeavyLevel4.js";

export class ResultItemDOMFactory {
    create(BMI) {
        let result_item_li_dom;
        switch (BMI.bmi_level) {
            case 'ok':
                result_item_li_dom = (new OK(BMI)).getNode();
                break;
            case 'too_light':
                result_item_li_dom = (new TooLight(BMI)).getNode();
                break;
            case 'level_1':
                result_item_li_dom = (new HeavyLevel1(BMI)).getNode();
                break;
            case 'level_2':
                result_item_li_dom = (new HeavyLevel2(BMI)).getNode();
                break;
            case 'level_3':
                result_item_li_dom = (new HeavyLevel3(BMI)).getNode();
                break;
            case 'level_4':
                result_item_li_dom = (new HeavyLevel4(BMI)).getNode();
                break;
        }
        return result_item_li_dom;
    }
}

import {LocalStorage as LocalStorageModels} from "../Models/LocalStorage.js";

export class HotSelect {
    constructor() {
        this.LocalStorage = new LocalStorageModels();
    }

    newHotSelect(area_name) {
        let all_saved_hot_area = this.getAllHotSelect();
        let max_key = all_saved_hot_area.length;
        let next_key = max_key + 1;
        if (max_key === 0) {
            this.createHotSelect(next_key, area_name);
        } else if (max_key >= 1 && max_key <= 5) {
            this.createHotSelectNoRepeat(all_saved_hot_area, area_name, next_key);
        } else {
            this.refreshHotSelect(all_saved_hot_area, area_name);
        }
    }

    refreshHotSelect(all_saved_hot_area, area_name) {
        let array_push_flag = false;
        all_saved_hot_area.forEach(function (saved_hot_area) {
            if (saved_hot_area !== area_name) {
                all_saved_hot_area.push(area_name);
                array_push_flag = true;
            }
        }, this);

        if (array_push_flag) {
            all_saved_hot_area = all_saved_hot_area.slice(1, 7);
            all_saved_hot_area.forEach(function (hot_area_name, index) {
                index = index + 1;
                this.createHotSelect(index, hot_area_name)
            }, this);
        }
    }

    createHotSelectNoRepeat(all_saved_hot_area, area_name, next_key) {
        all_saved_hot_area.forEach(function (saved_hot_area) {
            if (saved_hot_area !== area_name) {
                this.createHotSelect(next_key, area_name);
            }
        }, this);
    }

    createHotSelect(next_key, area_name) {
        this.LocalStorage.insert('hot_area_' + next_key, area_name);
    }

    getAllHotSelect() {
        return this.LocalStorage.getAll('hot_area');
    }
}

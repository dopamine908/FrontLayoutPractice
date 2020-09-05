import {LocalStorage as LocalStorageModel} from "../Model/LocalStorage.js";

export class BMI {
    constructor() {
        this.LocalStorage = new LocalStorageModel();
    }

    createBMI(bmi) {
        this.LocalStorage.insert(bmi);
    }

    getAllBMI() {
        return this.LocalStorage.getAll();
    }
}

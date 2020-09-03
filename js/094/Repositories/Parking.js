import {LocalStorage as LocalStorageModel} from "../Models/LocalStorage.js";

export class Parking {
    constructor() {
        this.LocalStorage = new LocalStorageModel();
    }

    createParkingData(index, parking_data) {
        index = index + 1;
        this.LocalStorage.insert('parking_' + index, parking_data);
    }

    getAllArea() {
        let ParkingCollection = this.LocalStorage.getAll('parking');
        let AreaCollection = ParkingCollection.map(function (parking_data) {
            return parking_data['行政區'];
        });
        AreaCollection = AreaCollection.filter(function (area, index, arr) {
            return arr.indexOf(area) === index;
        });
        return AreaCollection;
    }

    getAllParking() {
        return this.LocalStorage.getAll('parking');
    }

    getSearchArea(area_name) {
        let AllParking = this.getAllParking();
        return AllParking.filter(function (parking_data) {
            return parking_data['行政區'] === area_name;
        });
    }
}

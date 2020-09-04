export class LocalStorage {
    insert(value) {
        let index = window.localStorage.length;
        window.localStorage.setItem('bmi_' + index, JSON.stringify(value));
    }

    get(index) {
        return window.localStorage.getItem(index);
    }

    getAll() {
        let DataCollection = [];
        for (let index = 0; index < window.localStorage.length; index++) {
            if (this.get('bmi_' + index) !== null) {
                DataCollection.push(JSON.parse(this.get('bmi_' + index)));
            }
        }
        return DataCollection;
    }

}

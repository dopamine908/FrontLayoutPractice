export class LocalStorage {
    insert(index, value) {
        window.localStorage.setItem(index, JSON.stringify(value));
    }

    get(index) {
        return window.localStorage.getItem(index);
    }

    getAll(key_pattern) {
        let DataCollection = [];
        for (let index = 0; index < window.localStorage.length; index++) {
            if (this.get(key_pattern + '_' + index) !== null) {
                DataCollection.push(JSON.parse(this.get(key_pattern + '_' + index)));
            }
        }
        return DataCollection;
    }
}

export class HotSelectList {
    constructor() {
        this.HotSelectList = document.querySelector('.hot-select-list');
    }

    renderHotSelectList(hot_area_array) {
        this.clearAllHotSelectList();
        hot_area_array.forEach(function (hot_area) {
            let hot_select_item_dom = this.generateHotSelectItemDOM(hot_area);
            this.HotSelectList.appendChild(hot_select_item_dom);
        }, this);
    }

    generateHotSelectItemDOM(area_name) {
        let HotSelectItem = document.createElement('li');
        HotSelectItem.classList.add('hot-select-item');
        HotSelectItem.textContent = area_name;
        return HotSelectItem;
    }

    clearAllHotSelectList() {
        this.HotSelectList.innerHTML = '';
    }
}

export class AreaSelector {
    constructor() {
        this.AreaSecector = document.querySelector('.selector');
    }

    generateOption(value, preview) {
        let node = document.createElement('option');
        node.classList.add('option');
        node.setAttribute('value', value);
        node.textContent = preview;
        return node;
    }

    addOptionToSelector(dom) {
        this.AreaSecector.appendChild(dom);
    }

    renderSelector(area_array) {
        area_array.forEach(function (area) {
            let dom = this.generateOption(area, area);
            this.addOptionToSelector(dom);
        }, this);
    }

}

export class ParkingList {
    generatePreviewBannerDom(place, area) {
        let PreviewBannerDom = document.createElement("div");
        PreviewBannerDom.classList.add('preview-banner');

        let img = document.createElement('img');
        img.setAttribute('src', 'https://picsum.photos/id/299/460/150');

        let h3 = document.createElement("h3");
        h3.classList.add('preview-title');
        h3.textContent = place;

        let h4 = document.createElement("h4");
        h4.classList.add('preview-area');
        h4.textContent = area;

        PreviewBannerDom.appendChild(img);
        PreviewBannerDom.appendChild(h3);
        PreviewBannerDom.appendChild(h4);
        return PreviewBannerDom;
    }

    generatePreviewContent(area, place, address, parking_count) {
        let PreviewContentDom = document.createElement("div");
        PreviewContentDom.classList.add('preview-content');

        let p_area = document.createElement('p');
        p_area.insertAdjacentHTML('afterbegin', '<i class="fas fa-flag"></i>' + area);

        let p_place = document.createElement('p');
        p_place.insertAdjacentHTML('afterbegin', '<i class="fas fa-parking"></i>' + place);

        let p_address = document.createElement('p');
        p_address.insertAdjacentHTML('afterbegin', '<i class="fas fa-map-marked-alt"></i>' + address);

        let p_parking_count = document.createElement('p');
        p_parking_count.insertAdjacentHTML('afterbegin', '<i class="fas fa-hand-holding-usd"></i>' + parking_count);

        PreviewContentDom.appendChild(p_area);
        PreviewContentDom.appendChild(p_place);
        PreviewContentDom.appendChild(p_address);
        PreviewContentDom.appendChild(p_parking_count);
        return PreviewContentDom;
    }

    generateParkingItemDOM(area, place, address, parking_count) {
        let ParkingItemDOM = document.createElement('li');
        ParkingItemDOM.classList.add('parking-item');
        ParkingItemDOM.appendChild(this.generatePreviewBannerDom(place, area));
        ParkingItemDOM.appendChild(this.generatePreviewContent(area, place, address, parking_count));
        return ParkingItemDOM;
    }

    addParking(Parking) {
        let ParkingList = document.querySelector('.parking-list');
        let ParkingItemDOM = this.generateParkingItemDOM(Parking['行政區'], Parking['臨時停車處所'], Parking['地址'], Parking['可提供小型車停車位']);
        ParkingList.appendChild(ParkingItemDOM);
    }

    clearAllParkingItem() {
        let ParkingList = document.querySelector('.parking-list');
        ParkingList.innerHTML = '';
    }

    renderParkingItem(ParkingCollection) {
        this.clearAllParkingItem();
        ParkingCollection.forEach(function (Parking) {
            this.addParking(Parking);
        }, this);
    }
}

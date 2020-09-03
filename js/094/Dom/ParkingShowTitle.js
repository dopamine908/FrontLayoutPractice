export class ParkingShowTitle {
    constructor() {
        this.ParkingShowTitle = document.querySelector('.area');
    }

    renderParkingShowTitle(area) {
        this.ParkingShowTitle.innerHTML = area;
    }
}

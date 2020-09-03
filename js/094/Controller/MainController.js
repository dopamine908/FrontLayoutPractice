import {Parking as ParkingRepo} from "../Repositories/Parking.js";
import {HotSelect as HotSelectRepo} from "../Repositories/HotSelect.js";
import {Pagination as PaginationService} from "../Service/Pagination.js";
import {AreaSelector} from "../Dom/AreaSelector.js";
import {ParkingList} from "../Dom/ParkingList.js";
import {PaginationList} from "../Dom/PaginationList.js";
import {HotSelectList} from "../Dom/HotSelectList.js";
import {ParkingShowTitle} from "../Dom/ParkingShowTitle.js";

export class MainController {
    constructor() {
        this.ParkingRepository = new ParkingRepo();
        this.HotSelectRepository = new HotSelectRepo();
        this.AreaSelectorDOM = new AreaSelector();
        this.ParkingListDOM = new ParkingList();
        this.PaginationListDOM = new PaginationList();
        this.HotSelectListDOM = new HotSelectList();
        this.ParkingShowTitleDOM = new ParkingShowTitle();
    }

    initialPage() {
        this.PageData = new PaginationService(this.ParkingRepository.getAllParking());
        this.renderAreaSelector();
        this.renderParkingList();
        this.renderPaginationList();
        this.renderHotSelect();
    }

    renderAreaSelector() {
        this.AreaSelectorDOM.renderSelector(this.ParkingRepository.getAllArea());
    }

    renderParkingList() {
        this.ParkingListDOM.renderParkingItem(this.PageData.getCurrentPageData());
    }

    renderPaginationList() {
        this.PaginationListDOM.renderPaginationList(this.PageData);
    }

    renderHotSelect() {
        this.HotSelectListDOM.renderHotSelectList(this.HotSelectRepository.getAllHotSelect());
    }

    renderParkingShowTitle(area) {
        this.ParkingShowTitleDOM.renderParkingShowTitle(area);
    }

    renderPage(select_area_name, assign_page, view_page_type) {
        if (select_area_name === 'not_choose') {
            this.PageData = new PaginationService(this.ParkingRepository.getAllParking());
            select_area_name = '高雄全區';
        } else {
            this.PageData = new PaginationService(this.ParkingRepository.getSearchArea(select_area_name));
        }

        switch (view_page_type) {
            case 'next':
                this.PageData.setCurrentPage(assign_page);
                this.PageData.setCurrentPageToNextPage();
                break;
            case 'prev':
                this.PageData.setCurrentPage(assign_page);
                this.PageData.setCurrentPageToPreviousPage();
                break;
            case 'assign':
                this.PageData.setCurrentPage(assign_page);
                break;
        }

        this.renderParkingList();
        this.renderPaginationList();
        this.renderHotSelect();
        this.renderParkingShowTitle(select_area_name);

        document.querySelector('#current_page').value = this.PageData.current_page;
    }

    addHotSelect(area_name) {
        if (area_name === 'not_choose') {
            return;
        }
        this.HotSelectRepository.newHotSelect(area_name);
    }
}

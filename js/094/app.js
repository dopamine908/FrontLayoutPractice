import {Parking} from "./Repositories/Parking.js";
import {MainController as Main} from "./Controller/MainController.js";

const MainController = new Main();

fetch('https://api.kcg.gov.tw/api/service/get/897e552a-2887-4f6f-a6ee-709f7fbe0ee3')
    .then(function (response) {
        if (!response.ok) {
            throw new Error('get api fail')
        }
        return response.json();
    })
    .then(function (data) {
        initialData(data);
    })
    .then(function () {
        initialPage();
    })
    .then(function () {
        giveAreaSelectorEventListener();
        givePaginationListEventListener();
    })
    .catch(function (error) {
        console.log(error);
    });

function initialPage() {
    MainController.initialPage();
}

function initialData(response) {
    response.data.forEach(function (parking_data, index) {
        const ParkingRepository = new Parking();
        ParkingRepository.createParkingData(index, parking_data);
    });

}

function giveAreaSelectorEventListener() {
    document.querySelector('#area_selector').addEventListener('change', function (event) {
        let select_area_name = event.target.value;
        let current_page = 1;
        
        MainController.addHotSelect(select_area_name);
        MainController.renderPage(select_area_name, current_page, 'assign');
    });
}

function givePaginationListEventListener() {

    document.querySelector('.pagination-list').addEventListener('click', function (event) {
        if (event.target.nodeName === "A") {
            let select_area_name = document.querySelector('#area_selector').value;
            let assign_page = event.target.textContent;
            let current_page = document.querySelector('#current_page').value;

            let view_page_assign_type = '';
            switch (assign_page) {
                case '<< prev':
                    view_page_assign_type = 'prev';
                    assign_page = current_page;
                    break;
                case 'next >>':
                    view_page_assign_type = 'next'
                    assign_page = current_page;
                    break;
                default:
                    view_page_assign_type = 'assign';
                    break;
            }

            MainController.renderPage(select_area_name, assign_page, view_page_assign_type);
        }
    });
}
